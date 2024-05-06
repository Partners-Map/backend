import cookie, { FastifyCookieOptions } from '@fastify/cookie';
import { fastifyJwt } from '@fastify/jwt';
import 'dotenv/config';
import { FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (req: FastifyRequest, res: FastifyReply) => Promise<void>;
  }
  interface FastifyRequest {
    cookies: { [key: string]: string };
  }
}

export default fp(async fastify => {
  fastify.register(fastifyJwt, {
    secret: process.env.SECRET_KEY,
    cookie: {
      cookieName: 'x-access-token',
      signed: false
    }
  });

  fastify.register(cookie, {
    secret: process.env.SECRET_KEY,
    hook: 'onRequest',
    parseOptions: {},
    cookie: {
      httpOnly: true,
      secure: false,
      path: '/',
      maxAge: 60 * 60 * 24,
      sameSite: 'None'
    }
  } as FastifyCookieOptions);

  fastify.decorate('authenticate', async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const token = req.cookies['x-access-token'];
      fastify.log.warn(token);

      if (!token) {
        throw new Error('нет токена');
      }

      await req.jwtVerify();
    } catch (err) {
      fastify.log.error(err);
      res.send({ message: 'authorization error' });
    }
  });
});

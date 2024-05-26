import fastifySecureSession from '@fastify/secure-session';
import 'dotenv/config';
import { FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';

declare module 'fastify' {
  interface FastifyInstance {
    sessionAuth: (req: FastifyRequest, res: FastifyReply) => Promise<void>;
  }
}

declare module '@fastify/secure-session' {
  interface SessionData {
    data: {
      email: '';
      password: '';
    };
  }
}

export default fp(async fastify => {
  fastify.register(fastifySecureSession, {
    sessionName: 'session',
    cookieName: 'x-access-token',
    secret: 'averylogphrasebiggerthanthirtytwochars',
    salt: 'mq9hDxBVDbspDR6n',
    expiry: 60 * 60 * 24,
    cookie: {
      maxAge: 60 * 60 * 24,
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    }
  });

  fastify.decorate('sessionAuth', async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const data = req.session.get('data');
      if (!data) {
        throw new Error('authorization error');
      }
    } catch (err) {
      fastify.log.error(err);
      res.code(401).send({ message: 'authorization error' });
    }
  });
});

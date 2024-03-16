import { fastifyJwt } from '@fastify/jwt';
import 'dotenv/config';
import { FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (req: FastifyRequest, res: FastifyReply) => Promise<void>;
  }
}

export default fp(async fastify => {
  // TODO: refresh token
  fastify.register(fastifyJwt, {
    secret: process.env.SECRET_KEY
  });

  fastify.decorate('authenticate', async (req: FastifyRequest, res: FastifyReply) => {
    try {
      await req.jwtVerify();
    } catch (err) {
      fastify.log.error(err);
      res.send({ message: 'authorization error' });
    }
  });
});

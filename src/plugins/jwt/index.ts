import { fastifyJwt } from '@fastify/jwt';
import 'dotenv/config';
import { FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';

export default fp(async fastify => {
  // TODO: refresh token
  fastify.register(fastifyJwt, {
    secret: process.env.SECRET_KEY
  });

  fastify.decorate('authenticate', async function (req: FastifyRequest, res: FastifyReply) {
    try {
      await req.jwtVerify();
    } catch (err) {
      res.send(err);
    }
  });
});

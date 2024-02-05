import { FastifyInstance } from 'fastify/types/instance';

export default async (fastify: FastifyInstance) => {
  fastify.get('/', (req, rep) => {
    rep.code(200).send({ status: 'good' });
  });
};

import { FastifyInstance } from 'fastify/types/instance';
import { getAllUsers } from '../../services/user';

export default async (fastify: FastifyInstance) => {
  fastify.get(
    '/',
    {
      schema: {
        tags: ['user']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await getAllUsers(fastify));
    }
  );
};

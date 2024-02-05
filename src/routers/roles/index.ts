import { FastifyInstance } from 'fastify/types/instance';
import { getAllRoles } from '../../controllers/role';

export default async (fastify: FastifyInstance) => {
  fastify.get(
    '/',
    {
      schema: {
        tags: ['role']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await getAllRoles(fastify));
    }
  );
};
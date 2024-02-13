import { FastifyInstance } from 'fastify/types/instance';
import { getAllRoles } from '../../services/role';

export default async (fastify: FastifyInstance): Promise<void> => {
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

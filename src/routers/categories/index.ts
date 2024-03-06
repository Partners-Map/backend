import { FastifyInstance } from 'fastify/types/instance';
import CategoryService from '../../services/category';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get(
    '/',
    {
      schema: {
        tags: ['category']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await CategoryService.getAll(fastify));
    }
  );
};

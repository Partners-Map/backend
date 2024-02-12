import { FastifyInstance } from 'fastify/types/instance';
import { getAllCategories } from '../../controllers/category';

export default async (fastify: FastifyInstance) => {
  fastify.get(
    '/',
    {
      schema: {
        tags: ['category']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await getAllCategories(fastify));
    }
  );
};

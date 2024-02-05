import { FastifyInstance } from 'fastify/types/instance';
import { getAllCategories } from '../../controllers/categorie';

export default async (fastify: FastifyInstance) => {
  fastify.get(
    '/',
    {
      schema: {
        tags: ['categorie']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await getAllCategories(fastify));
    }
  );
};

import { FastifyInstance } from 'fastify/types/instance';
import { getAllPlaces } from '../../controllers/place';

export default async (fastify: FastifyInstance) => {
  fastify.get(
    '/',
    {
      schema: {
        tags: ['place']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await getAllPlaces(fastify));
    }
  );
};

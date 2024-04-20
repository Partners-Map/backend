import { FastifyInstance } from 'fastify/types/instance';
import PartnersService from '../../services/place';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get(
    '/',
    {
      schema: {
        tags: ['place']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await PartnersService.getAll(fastify));
    }
  );
  fastify.get(
    '/addresses',
    {
      schema: {
        tags: ['place']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await PartnersService.getAllWithAddress(fastify));
    }
  );
  fastify.get(
    '/avg-price',
    {
      schema: {
        tags: ['place']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await PartnersService.getAllWithAvgPrice(fastify));
    }
  );
};

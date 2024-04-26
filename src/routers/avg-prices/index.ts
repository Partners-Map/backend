import { FastifyInstance } from 'fastify/types/instance';
import AvgPriceService from '../../services/avg-price';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get(
    '/',
    {
      schema: {
        tags: ['avg-price']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await AvgPriceService.getAll(fastify));
    }
  );
  fastify.get(
    '/ranges',
    {
      schema: {
        tags: ['avg-price']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await AvgPriceService.getAllRanges(fastify));
    }
  );
};

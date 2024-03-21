import { FastifyInstance } from 'fastify/types/instance';
import DiscountService from '../../services/discount';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get(
    '/',
    {
      schema: {
        tags: ['discount']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await DiscountService.getAll(fastify));
    }
  );
};

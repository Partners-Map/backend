import { FastifyInstance } from 'fastify/types/instance';
import DiscountTypeService from '../../services/discount-type';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get(
    '/',
    {
      schema: {
        tags: ['discount-type']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await DiscountTypeService.getAll(fastify));
    }
  );
};

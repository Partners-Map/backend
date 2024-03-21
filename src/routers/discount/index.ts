import { Discount as TDiscount } from '@prisma/client';
import { FastifyInstance } from 'fastify/types/instance';
import DiscountService from '../../services/discount';
import { discountBodyRequestShema, discountParamsIdRequestShema } from '../../schemas/requests/discount';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: { ...discountParamsIdRequestShema }
    },
    async (req, rep) => {
      rep.code(200).send(await DiscountService.getById(fastify, req.params.id));
    }
  );
  fastify.post<{ Body: Omit<TDiscount, 'id'> }>(
    '/',
    {
      schema: { ...discountBodyRequestShema },
      onRequest: [fastify.authenticate]
    },
    async (req, res) => {
      res.code(200).send(await DiscountService.create(fastify, req.body));
    }
  );
  fastify.put<{
    Params: {
      id: string;
    };
    Body: Omit<TDiscount, 'id'>;
  }>(
    '/:id',
    {
      schema: { ...discountParamsIdRequestShema, ...discountBodyRequestShema },
      onRequest: [fastify.authenticate]
    },
    async (req, res) => {
      res.code(200).send(await DiscountService.create(fastify, req.body));
    }
  );
  fastify.delete<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: { ...discountParamsIdRequestShema },
      onRequest: [fastify.authenticate]
    },
    async (req, res) => {
      res.code(200).send(await DiscountService.remove(fastify, req.params.id));
    }
  );
};

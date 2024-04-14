import { DiscountType as TDiscountType } from '@prisma/client';
import { FastifyInstance } from 'fastify/types/instance';
import DiscountTypeService from '../../services/discount-type';
import {
  discountTypeBodyRequestShema,
  discountTypeParamsIdRequestShema
} from '../../schemas/requests/discount-type';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: { ...discountTypeParamsIdRequestShema }
    },
    async (req, rep) => {
      rep.code(200).send(await DiscountTypeService.getById(fastify, req.params.id));
    }
  );
  fastify.post<{ Body: Omit<TDiscountType, 'id'> }>(
    '/',
    {
      schema: { ...discountTypeBodyRequestShema },
      onRequest: [fastify.authenticate]
    },
    async (req, res) => {
      res.code(200).send(await DiscountTypeService.create(fastify, req.body));
    }
  );
  fastify.put<{
    Params: {
      id: string;
    };
    Body: Omit<TDiscountType, 'id'>;
  }>(
    '/:id',
    {
      schema: { ...discountTypeParamsIdRequestShema, ...discountTypeBodyRequestShema },
      onRequest: [fastify.authenticate]
    },
    async (req, res) => {
      res.code(200).send(await DiscountTypeService.create(fastify, req.body));
    }
  );
  fastify.delete<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: { ...discountTypeParamsIdRequestShema },
      onRequest: [fastify.authenticate]
    },
    async (req, res) => {
      res.code(200).send(await DiscountTypeService.remove(fastify, req.params.id));
    }
  );
};

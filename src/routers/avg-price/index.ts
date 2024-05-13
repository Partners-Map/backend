import { AvgPrice as TAvgPrice } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { avgPriceBodyRequestShema, avgPriceParamsIdRequestShema } from '../../schemas/requests/avg-price';
import AvgPriceService from '../../services/avg-price';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: {
        ...avgPriceParamsIdRequestShema
      }
    },
    async (req, rep) => {
      rep.code(200).send(await AvgPriceService.getById(fastify, req.params.id));
    }
  );
  fastify.post<{
    Body: Omit<TAvgPrice, 'id'>;
  }>(
    '/',
    {
      schema: {
        ...avgPriceBodyRequestShema
      }
    },
    async (req, rep) => {
      rep.code(200).send(await AvgPriceService.create(fastify, req.body));
    }
  );
  fastify.put<{
    Params: {
      id: string;
    };
    Body: Omit<TAvgPrice, 'id'>;
  }>(
    '/:id',
    {
      schema: {
        ...avgPriceParamsIdRequestShema,
        ...avgPriceBodyRequestShema
      }
    },
    async (req, rep) => {
      rep.code(200).send(await AvgPriceService.update(fastify, req.params.id, req.body));
    }
  );
  fastify.delete<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: {
        ...avgPriceParamsIdRequestShema
      }
    },
    async (req, rep) => {
      rep.code(200).send(await AvgPriceService.remove(fastify, req.params.id));
    }
  );
};

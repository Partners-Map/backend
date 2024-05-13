import { Address as TAddress } from '@prisma/client';
import { FastifyInstance } from 'fastify/types/instance';
import { addressBodyRequestShema, addressParamsIdRequestShema } from '../../schemas/requests/address';
import AddressService from '../../services/address';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: {
        ...addressParamsIdRequestShema
      }
    },
    async (req, rep) => {
      rep.code(200).send(await AddressService.getById(fastify, req.params.id));
    }
  );
  fastify.post<{ Body: Omit<TAddress, 'id'> }>(
    '/',
    {
      schema: {
        ...addressBodyRequestShema
      }
    },
    async (req, res) => {
      res.code(200).send(await AddressService.create(fastify, req.body));
    }
  );
  fastify.put<{
    Params: {
      id: string;
    };
    Body: Omit<TAddress, 'id'>;
  }>(
    '/:id',
    {
      schema: {
        ...addressParamsIdRequestShema,
        ...addressBodyRequestShema
      }
    },
    async (req, res) => {
      res.code(200).send(await AddressService.create(fastify, req.body));
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
        ...addressParamsIdRequestShema
      }
    },
    async (req, res) => {
      res.code(200).send(await AddressService.remove(fastify, req.params.id));
    }
  );
};

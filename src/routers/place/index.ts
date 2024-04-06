import { Place } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import PartnersService from '../../services/place';
import { placeParamsIdRequestShema, placeBodyRequestShema } from '../../schemas/requests/place';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: {
        ...placeParamsIdRequestShema
      }
    },
    async (req, res) => {
      res.code(200).send(await PartnersService.getById(fastify, req.params.id));
    }
  );
  fastify.get<{
    Params: {
      id: string;
    };
  }>(
    '/:id/address',
    {
      schema: {
        ...placeParamsIdRequestShema
      }
    },
    async (req, res) => {
      res.code(200).send(await PartnersService.getByIdWithAddress(fastify, req.params.id));
    }
  );
  fastify.post<{ Body: Omit<Place, 'id'> }>(
    '/',
    {
      schema: {
        ...placeBodyRequestShema
      },
      onRequest: [fastify.authenticate]
    },
    async (req, res) => {
      res.code(200).send(await PartnersService.create(fastify, req.body));
    }
  );
  fastify.put<{
    Params: {
      id: string;
    };
    Body: Omit<Place, 'id'>;
  }>(
    '/:id',
    {
      schema: {
        ...placeParamsIdRequestShema,
        ...placeBodyRequestShema
      },
      onRequest: [fastify.authenticate]
    },
    async (req, res) => {
      res.code(200).send(await PartnersService.update(fastify, req.params.id, req.body));
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
        ...placeParamsIdRequestShema
      },
      onRequest: [fastify.authenticate]
    },
    async (req, rep) => {
      rep.code(200).send(await PartnersService.remove(fastify, req.params.id));
    }
  );
};

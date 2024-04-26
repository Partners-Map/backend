import { Place } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { newPlaceBodyRequestShema, placeBodyRequestShema, placeParamsIdRequestShema } from '../../schemas/requests/place';
import PartnersService from '../../services/place';
import { TNewPlace } from '../../@types/api/new-place';

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
  // TODO: по мимо crud нужно полное создание нового завидения
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
  fastify.get<{
    Params: {
      id: string;
    };
  }>(
    '/:id/avg-price',
    {
      schema: {
        ...placeParamsIdRequestShema
      }
    },
    async (req, res) => {
      res.code(200).send(await PartnersService.getByIdWithAvgPrice(fastify, req.params.id));
    }
  );
  fastify.get<{
    Params: {
      id: string;
    };
  }>(
    '/:id/full-info',
    {
      schema: {
        ...placeParamsIdRequestShema
      }
    },
    async (req, res) => {
      res.code(200).send(await PartnersService.getByIdWithFullInfo(fastify, req.params.id));
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
  fastify.post<{ Body: TNewPlace }>(
    '/full',
    {
      schema: {
        ...newPlaceBodyRequestShema
      },
      onRequest: [fastify.authenticate]
    },
    async (req, res) => {
      res.code(200).send(await PartnersService.createFull(fastify, req.body));
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

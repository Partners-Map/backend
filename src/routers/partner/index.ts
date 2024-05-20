import { Partner as TPartner } from '@prisma/client';
import { FastifyInstance } from 'fastify/types/instance';
import { partnerBodyRequestShema, partnerParamsIdRequestShema } from '../../schemas/requests/partner';
import PartnerService from '../../services/partner';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: {
        ...partnerParamsIdRequestShema
      }
    },
    async (req, rep) => {
      rep.code(200).send(await PartnerService.getById(fastify, req.params.id));
    }
  );
  fastify.post<{ Body: Omit<TPartner, 'id'> }>(
    '/',
    {
      schema: {
        ...partnerBodyRequestShema
      },
      onRequest: fastify.sessionAuth
    },
    async (req, res) => {
      res.code(200).send(await PartnerService.create(fastify, req.body));
    }
  );
  fastify.put<{
    Params: {
      id: string;
    };
    Body: Omit<TPartner, 'id'>;
  }>(
    '/:id',
    {
      schema: {
        ...partnerParamsIdRequestShema,
        ...partnerBodyRequestShema
      },
      onRequest: fastify.sessionAuth
    },
    async (req, res) => {
      res.code(200).send(await PartnerService.create(fastify, req.body));
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
        ...partnerParamsIdRequestShema
      },
      onRequest: fastify.sessionAuth
    },
    async (req, res) => {
      res.code(200).send(await PartnerService.remove(fastify, req.params.id));
    }
  );
};

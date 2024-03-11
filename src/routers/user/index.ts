import type { User as TUser } from '@prisma/client';
import { FastifyInstance } from 'fastify/types/instance';
import {
  createUserRequestSchema,
  deleteUserByIdRequestSchema,
  getUserByIdRequestShema,
  updateUserRequestSchema
} from '../../schemas/requests/user';
import {
  createUserResponseShema,
  deleteUserResponseShema,
  getUserByIdResponseShema,
  updateUserResponseShema
} from '../../schemas/responses/user';
import UserService from '../../services/user';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: { ...getUserByIdRequestShema, ...getUserByIdResponseShema }
    },
    async (req, rep) => {
      rep.code(200).send(await UserService.getById(fastify, req.params.id));
    }
  );
  fastify.post<{ Body: Omit<TUser, 'id'> }>(
    '/',
    {
      schema: { ...createUserRequestSchema, ...createUserResponseShema }
    },
    async (req, res) => {
      res.code(201).send(await UserService.create(fastify, req.body));
    }
  );
  fastify.put<{
    Params: {
      id: string;
    };
    Body: Omit<TUser, 'id'>;
  }>(
    '/:id',
    {
      schema: { ...updateUserRequestSchema, ...updateUserResponseShema }
    },
    async (req, res) => {
      res.code(200).send(await UserService.update(fastify, req.params.id, req.body));
    }
  );
  fastify.delete<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: { ...deleteUserByIdRequestSchema, ...deleteUserResponseShema }
    },
    async (req, res) => {
      res.code(200).send(await UserService.remove(fastify, req.params.id));
    }
  );
};

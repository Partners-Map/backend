import { FastifyInstance } from 'fastify/types/instance';
import { TCreateUserReq } from '../../@types/req/user';
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
import { createUser, deleteUserById, getUserById, updateUser } from '../../services/user';

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
      const { id: userId } = req.params;
      rep.code(200).send(await getUserById(fastify, userId));
    }
  );
  fastify.post<{ Body: TCreateUserReq }>(
    '/',
    {
      schema: { ...createUserRequestSchema, ...createUserResponseShema }
    },
    async (req, res) => {
      const user = req.body;
      res.code(201).send(await createUser(fastify, user));
    }
  );
  fastify.put<{
    Params: {
      id: string;
    };
    Body: TCreateUserReq;
  }>(
    '/:id',
    {
      schema: { ...updateUserRequestSchema, ...updateUserResponseShema }
    },
    async (req, res) => {
      const { id: userId } = req.params;
      const userData = req.body;
      res.code(200).send(await updateUser(fastify, userId, userData));
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
      const { id: userId } = req.params;
      res.code(200).send(await deleteUserById(fastify, userId));
    }
  );
};

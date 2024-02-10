import { FastifyInstance } from 'fastify/types/instance';
import { TCreateUserReq } from '../../@types/req/user';
import {
  createUser,
  deleteUserById,
  getUserById,
  updateUser
} from '../../controllers/user';
import {
  createUserRequestSchema,
  deleteUserByIdRequestSchema,
  getUserByIdRequestShema,
  updateUserRequestSchema
} from '../../schemas/requests/user';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: { ...getUserByIdRequestShema }
    },
    async (req, rep) => {
      const { id: userId } = req.params;
      rep.code(200).send(await getUserById(fastify, userId));
    }
  );
  fastify.post<{ Body: TCreateUserReq }>(
    '/',
    {
      schema: { ...createUserRequestSchema }
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
      schema: { ...updateUserRequestSchema }
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
      schema: { ...deleteUserByIdRequestSchema }
    },
    async (req, res) => {
      const { id: userId } = req.params;
      res.code(200).send(await deleteUserById(fastify, userId));
    }
  );
};

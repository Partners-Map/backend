import { FastifyInstance } from 'fastify/types/instance';
import { TCreateUserReq } from '../../@types/req/user';
import {
  createUser,
  deleteUserById,
  getUserById,
  updateUser
} from '../../controllers/user';

export default async (fastify: FastifyInstance) => {
  fastify.get<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            id: {
              type: 'string'
            }
          },
          required: ['id']
        },
        tags: ['user']
      }
    },
    async (req, rep) => {
      const { id: userId } = req.params;
      if (!userId) {
        fastify.log.warn(req.params);
      }
      rep.code(200).send(await getUserById(fastify, userId));
    }
  );
  fastify.post<{ Body: TCreateUserReq }>(
    '/',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            email: {
              type: 'string'
            },
            password: {
              type: 'string'
            },
            roleId: {
              type: 'string'
            }
          },
          required: ['email', 'password', 'roleId']
        },
        tags: ['user']
      }
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
      schema: {
        params: {
          type: 'object',
          properties: {
            id: {
              type: 'string'
            }
          },
          required: ['id']
        },
        body: {
          type: 'object',
          properties: {
            email: {
              type: 'string'
            },
            password: {
              type: 'string'
            },
            roleId: {
              type: 'string'
            }
          },
          required: ['email', 'password', 'roleId']
        },
        tags: ['user']
      }
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
      schema: {
        params: {
          type: 'object',
          properties: {
            id: {
              type: 'string'
            }
          },
          required: ['id']
        },
        tags: ['user']
      }
    },
    async (req, res) => {
      const { id: userId } = req.params;
      const userData = req.body;
      res.code(200).send(await deleteUserById(fastify, userId));
    }
  );
};

import { Category as TCategory } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import CategoryService from '../../services/category';

export default async (fastify: FastifyInstance): Promise<void> => {
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
        tags: ['category']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await CategoryService.getById(fastify, req.params.id));
    }
  );
  fastify.post<{
    Body: Omit<TCategory, 'id'>;
  }>(
    '/',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            title: {
              type: 'string'
            }
          },
          required: ['title']
        },
        tags: ['category']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await CategoryService.create(fastify, req.body));
    }
  );
  fastify.put<{
    Params: {
      id: string;
    };
    Body: Omit<TCategory, 'id'>;
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
            title: {
              type: 'string'
            }
          },
          required: ['title']
        },
        tags: ['category']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await CategoryService.update(fastify, req.params.id, req.body));
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
        tags: ['category']
      },
      onRequest: fastify.sessionAuth
    },
    async (req, rep) => {
      rep.code(200).send(await CategoryService.remove(fastify, req.params.id));
    }
  );
};

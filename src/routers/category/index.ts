import { FastifyInstance } from 'fastify';
import {
  getCategorieById,
  createCategorie,
  updateCategorie,
  deleteCategorie
} from '../../controllers/category';

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
        tags: ['category']
      }
    },
    async (req, rep) => {
      const { id: categoryId } = req.params;
      rep.code(200).send(await getCategorieById(fastify, categoryId));
    }
  );
  fastify.post<{
    Body: {
      title: string;
    };
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
      const { title } = req.body;
      rep.code(200).send(await createCategorie(fastify, title));
    }
  );
  fastify.put<{
    Params: {
      id: string;
    };
    Body: {
      title: string;
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
      const { id: categoryId } = req.params;
      const { title } = req.body;
      rep.code(200).send(await updateCategorie(fastify, categoryId, title));
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
      }
    },
    async (req, rep) => {
      const { id: categoryId } = req.params;
      rep.code(200).send(await deleteCategorie(fastify, categoryId));
    }
  );
};

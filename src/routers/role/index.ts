import { FastifyInstance } from 'fastify';
import { createRole, deleteRole, getRoleById, updateRole } from '../../controllers/role';

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
        tags: ['role']
      }
    },
    async (req, rep) => {
      const { id: roleId } = req.params;
      rep.code(200).send(await getRoleById(fastify, roleId));
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
        tags: ['role']
      }
    },
    async (req, rep) => {
      const { title } = req.body;
      rep.code(200).send(await createRole(fastify, title));
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
        tags: ['role']
      }
    },
    async (req, rep) => {
      const { id: roleId } = req.params;
      const { title } = req.body;
      rep.code(200).send(await updateRole(fastify, roleId, title));
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
        tags: ['role']
      }
    },
    async (req, rep) => {
      const { id: roleId } = req.params;
      rep.code(200).send(await deleteRole(fastify, roleId));
    }
  );
};

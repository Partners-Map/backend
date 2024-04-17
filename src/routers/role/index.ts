import { FastifyInstance } from 'fastify';
import { roleBodyRequestShema, roleParamsIdRequestShema } from '../../schemas/requests/role';
import RoleService from '../../services/role';

export default async (fastify: FastifyInstance) => {
  fastify.get<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: {
        ...roleParamsIdRequestShema
      },
      onRequest: [fastify.authenticate]
    },
    async (req, rep) => {
      rep.code(200).send(await RoleService.getById(fastify, req.params.id));
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
        ...roleBodyRequestShema
      },
      onRequest: [fastify.authenticate]
    },
    async (req, rep) => {
      rep.code(200).send(await RoleService.create(fastify, req.body));
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
        ...roleParamsIdRequestShema,
        ...roleBodyRequestShema
      },
      onRequest: [fastify.authenticate]
    },
    async (req, rep) => {
      rep.code(200).send(await RoleService.update(fastify, req.params.id, req.body));
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
        ...roleParamsIdRequestShema
      },
      onRequest: [fastify.authenticate]
    },
    async (req, rep) => {
      rep.code(200).send(await RoleService.remove(fastify, req.params.id));
    }
  );
};

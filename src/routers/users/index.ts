import { FastifyInstance } from 'fastify/types/instance';
import { getAllUsersResponseShema } from '../../schemas/responses/user';
import UserService from '../../services/user';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get(
    '/',
    {
      schema: {
        tags: ['user'],
        ...getAllUsersResponseShema
      },
      onRequest: [fastify.authenticate]
    },
    async (req, rep) => {
      rep.code(200).send(await UserService.getAll(fastify));
    }
  );
};

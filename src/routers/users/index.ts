import { FastifyInstance } from 'fastify/types/instance';
import { getAllUsers } from '../../services/user';
import { getAllUsersResponseShema } from '../../schemas/responses/user';

export default async (fastify: FastifyInstance) => {
  fastify.get(
    '/',
    {
      schema: {
        tags: ['user'],
        ...getAllUsersResponseShema
      }
    },
    async (req, rep) => {
      rep.code(200).send(await getAllUsers(fastify));
    }
  );
};

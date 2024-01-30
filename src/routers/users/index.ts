import { FastifyInstance } from 'fastify/types/instance';
import { getAllUsers } from '../../controllers/users';

export default async (fastify: FastifyInstance) => {
  fastify.get('/', async (req, rep) => {
    rep.code(200).send(await getAllUsers(fastify));
  });
};

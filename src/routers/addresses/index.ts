import { FastifyInstance } from 'fastify/types/instance';
import AddressService from '../../services/address';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get(
    '/',
    {
      schema: {
        tags: ['address']
      }
    },
    async (req, rep) => {
      rep.code(200).send(await AddressService.getAll(fastify));
    }
  );
};

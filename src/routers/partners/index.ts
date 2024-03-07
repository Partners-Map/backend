import { FastifyInstance } from 'fastify/types/instance';
import PartnersService from '../../services/partner';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get(
    '/',
    {
      schema: { tags: ['partner'] }
    },
    async (req, rep) => {
      rep.code(200).send(await PartnersService.getAll(fastify));
    }
  );
};

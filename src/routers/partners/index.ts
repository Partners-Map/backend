import { FastifyInstance } from 'fastify/types/instance';
import { getAllPartners } from '../../controllers/partner';

export default async (fastify: FastifyInstance) => {
  fastify.get('/', { schema: { tags: ['partners'] } }, async (req, rep) => {
    rep.code(200).send(await getAllPartners(fastify));
  });
};

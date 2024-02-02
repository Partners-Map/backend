import { Partners } from '@prisma/client';
import { FastifyInstance } from 'fastify';

export const getAllPartners = async (fastify: FastifyInstance): Promise<Partners[]> => {
  return await fastify.prisma.partners.findMany();
};

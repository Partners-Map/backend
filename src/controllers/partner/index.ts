import { Partner } from '@prisma/client';
import { FastifyInstance } from 'fastify';

export const getAllPartners = async (fastify: FastifyInstance): Promise<Partner[]> => {
  return await fastify.prisma.partner.findMany();
};

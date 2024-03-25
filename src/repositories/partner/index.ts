import { Partner as TPartner } from '@prisma/client';
import { FastifyInstance } from 'fastify';

const getAll = async (fastify: FastifyInstance): Promise<TPartner[]> => fastify.prisma.partner.findMany();

const getById = async (fastify: FastifyInstance, id: string): Promise<TPartner> =>
  await fastify.prisma.partner.findUnique({
    where: {
      id
    }
  });

const create = async (fastify: FastifyInstance, data: Omit<TPartner, 'id'>): Promise<TPartner> =>
  await fastify.prisma.partner.create({
    data
  });

const update = async (fastify: FastifyInstance, id: string, data: Omit<TPartner, 'id'>): Promise<TPartner> =>
  await fastify.prisma.partner.update({
    where: {
      id
    },
    data
  });

const remove = async (fastify: FastifyInstance, id: string): Promise<TPartner> =>
  await fastify.prisma.partner.delete({
    where: {
      id
    }
  });

export default { getAll, getById, create, update, remove };

import type { Role as TRole } from '@prisma/client';
import { FastifyInstance } from 'fastify';

const getAll = async (fastify: FastifyInstance): Promise<TRole[]> => await fastify.prisma.role.findMany();

const getById = async (fastify: FastifyInstance, id: string): Promise<TRole> =>
  await fastify.prisma.role.findUnique({
    where: {
      id
    }
  });

const create = async (fastify: FastifyInstance, data: Omit<TRole, 'id'>): Promise<TRole> =>
  await fastify.prisma.role.create({
    data
  });

const update = async (fastify: FastifyInstance, id: string, data: Omit<TRole, 'id'>): Promise<TRole> =>
  await fastify.prisma.role.update({
    where: {
      id
    },
    data
  });

const remove = async (fastify: FastifyInstance, id: string): Promise<TRole> =>
  await fastify.prisma.role.delete({
    where: {
      id
    }
  });

export default { getAll, getById, create, update, remove };

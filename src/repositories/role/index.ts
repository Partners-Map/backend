import type { Role as TRole } from '@prisma/client';
import { FastifyInstance } from 'fastify';

const getAll = async (fastify: FastifyInstance): Promise<TRole[]> => await fastify.prisma.role.findMany();

const getById = async (fastify: FastifyInstance, roleId: string): Promise<TRole> =>
  await fastify.prisma.role.findUnique({
    where: {
      id: roleId
    }
  });

const create = async (fastify: FastifyInstance, createdData: Omit<TRole, 'id'>): Promise<TRole> =>
  await fastify.prisma.role.create({
    data: createdData
  });

const update = async (
  fastify: FastifyInstance,
  roleId: string,
  updatebleData: Omit<TRole, 'id'>
): Promise<TRole> =>
  await fastify.prisma.role.update({
    where: {
      id: roleId
    },
    data: updatebleData
  });

const remove = async (fastify: FastifyInstance, roleId: string): Promise<TRole> =>
  await fastify.prisma.role.delete({
    where: {
      id: roleId
    }
  });

export default { getAll, getById, create, update, remove };

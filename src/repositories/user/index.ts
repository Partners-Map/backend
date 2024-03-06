import type { User as TUser } from '@prisma/client';
import { FastifyInstance } from 'fastify';

export const getAll = async (fastify: FastifyInstance): Promise<TUser[]> =>
  await fastify.prisma.user.findMany();

export const getById = async (fastify: FastifyInstance, userId: string): Promise<TUser> =>
  await fastify.prisma.user.findUnique({
    where: {
      id: userId
    }
  });

export const create = async (fastify: FastifyInstance, createdData: Omit<TUser, 'id'>): Promise<TUser> =>
  await fastify.prisma.user.create({
    data: createdData
  });

export const update = async (
  fastify: FastifyInstance,
  updatebleId: string,
  updatebleData: Omit<TUser, 'id'>
): Promise<TUser> =>
  await fastify.prisma.user.update({
    where: {
      id: updatebleId
    },
    data: updatebleData
  });

export const remove = async (fastify: FastifyInstance, removableId: string): Promise<TUser> =>
  await fastify.prisma.user.delete({
    where: {
      id: removableId
    }
  });

export default { getAll, getById, create, update, remove };

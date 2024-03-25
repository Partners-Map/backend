import type { User as TUser } from '@prisma/client';
import { FastifyInstance } from 'fastify';

const getAll = async (fastify: FastifyInstance): Promise<TUser[]> => await fastify.prisma.user.findMany();

const getById = async (fastify: FastifyInstance, id: string): Promise<TUser> =>
  await fastify.prisma.user.findUnique({
    where: {
      id
    }
  });

const getByEmail = async (fastify: FastifyInstance, email: string): Promise<TUser> =>
  await fastify.prisma.user.findUnique({
    where: {
      email
    }
  });

const create = async (fastify: FastifyInstance, data: Omit<TUser, 'id'>): Promise<TUser> =>
  await fastify.prisma.user.create({
    data: data
  });

const update = async (fastify: FastifyInstance, id: string, data: Omit<TUser, 'id'>): Promise<TUser> =>
  await fastify.prisma.user.update({
    where: {
      id
    },
    data: data
  });

const remove = async (fastify: FastifyInstance, id: string): Promise<TUser> =>
  await fastify.prisma.user.delete({
    where: {
      id
    }
  });

export default {
  getAll,
  getById,
  getByEmail,
  create,
  update,
  remove
};

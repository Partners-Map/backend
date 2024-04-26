import { Category as TCategory } from '@prisma/client';
import { FastifyInstance } from 'fastify';

const getAll = async (fastify: FastifyInstance): Promise<TCategory[]> => fastify.prisma.category.findMany();

const getById = async (fastify: FastifyInstance, id: string): Promise<TCategory> =>
  await fastify.prisma.category.findUnique({
    where: {
      id
    }
  });

const create = async (fastify: FastifyInstance, data: Omit<TCategory, 'id'>): Promise<TCategory> =>
  await fastify.prisma.category.create({
    data
  });

const update = async (
  fastify: FastifyInstance,
  id: string,
  data: Omit<TCategory, 'id'>
): Promise<TCategory> =>
  await fastify.prisma.category.update({
    where: {
      id
    },
    data
  });

const remove = async (fastify: FastifyInstance, id: string): Promise<TCategory> => {
  await fastify.prisma.placeToCategory.deleteMany({
    where: {
      categoryId: id
    }
  });
  return await fastify.prisma.category.delete({
    where: {
      id
    }
  });
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};

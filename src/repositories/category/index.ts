import { Category as TCategory } from '@prisma/client';
import { FastifyInstance } from 'fastify';

const getAll = async (fastify: FastifyInstance): Promise<TCategory[]> => fastify.prisma.category.findMany();

const getById = async (fastify: FastifyInstance, categoryId: string): Promise<TCategory> =>
  await fastify.prisma.category.findUnique({
    where: {
      id: categoryId
    }
  });

const create = async (fastify: FastifyInstance, createdData: Omit<TCategory, 'id'>): Promise<TCategory> =>
  await fastify.prisma.category.create({
    data: createdData
  });

const update = async (
  fastify: FastifyInstance,
  updatebleId: string,
  updatebleData: Omit<TCategory, 'id'>
): Promise<TCategory> =>
  await fastify.prisma.category.update({
    where: {
      id: updatebleId
    },
    data: updatebleData
  });

const remove = async (fastify: FastifyInstance, removableId: string): Promise<TCategory> => {
  await fastify.prisma.placeToCategory.deleteMany({
    where: {
      categoryId: removableId
    }
  });
  return await fastify.prisma.category.delete({
    where: {
      id: removableId
    }
  });
};

export default { getAll, getById, create, update, remove };

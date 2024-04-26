import { Category as TCategory, PlaceToCategory as TPlaceToCategory } from '@prisma/client';
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

const tyingCategoryAndPlace = async (
  fastify: FastifyInstance,
  data: { placeId: string; categoryId: string }
): Promise<TPlaceToCategory> => {
  return await fastify.prisma.placeToCategory.create({
    data: {
      placeId: data.placeId,
      categoryId: data.categoryId
    }
  });
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
  tyingCategoryAndPlace
};

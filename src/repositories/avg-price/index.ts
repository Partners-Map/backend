import { AvgPrice as TAvgPrice } from '@prisma/client';
import { FastifyInstance } from 'fastify';

const getAll = async (fastify: FastifyInstance): Promise<TAvgPrice[]> => fastify.prisma.avgPrice.findMany();

const getById = async (fastify: FastifyInstance, id: string): Promise<TAvgPrice> =>
  await fastify.prisma.avgPrice.findUnique({
    where: {
      id
    }
  });

const create = async (fastify: FastifyInstance, data: Omit<TAvgPrice, 'id'>): Promise<TAvgPrice> =>
  await fastify.prisma.avgPrice.create({
    data
  });

const update = async (
  fastify: FastifyInstance,
  id: string,
  data: Omit<TAvgPrice, 'id'>
): Promise<TAvgPrice> =>
  await fastify.prisma.avgPrice.update({
    where: {
      id
    },
    data
  });

const remove = async (fastify: FastifyInstance, id: string): Promise<TAvgPrice> => {
  await fastify.prisma.placeToCategory.deleteMany({
    where: {
      categoryId: id
    }
  });
  return await fastify.prisma.avgPrice.delete({
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

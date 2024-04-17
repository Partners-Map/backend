import { Discount as TDiscount } from '@prisma/client';
import { FastifyInstance } from 'fastify';

const getAll = async (fastify: FastifyInstance): Promise<TDiscount[]> => fastify.prisma.discount.findMany();

const getById = async (fastify: FastifyInstance, id: string): Promise<TDiscount> =>
  await fastify.prisma.discount.findUnique({
    where: {
      id
    }
  });

const create = async (fastify: FastifyInstance, data: Omit<TDiscount, 'id'>): Promise<TDiscount> =>
  await fastify.prisma.discount.create({
    data
  });

const update = async (
  fastify: FastifyInstance,
  id: string,
  data: Omit<TDiscount, 'id'>
): Promise<TDiscount> =>
  await fastify.prisma.discount.update({
    where: {
      id
    },
    data
  });

const remove = async (fastify: FastifyInstance, id: string): Promise<TDiscount> =>
  await fastify.prisma.discount.delete({
    where: {
      id
    }
  });

export default { getAll, getById, create, update, remove };

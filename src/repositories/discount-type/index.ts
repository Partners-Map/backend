import { DiscountType as TDiscountType } from '@prisma/client';
import { FastifyInstance } from 'fastify';

const getAll = async (fastify: FastifyInstance): Promise<TDiscountType[]> =>
  fastify.prisma.discountType.findMany();

const getById = async (fastify: FastifyInstance, id: string): Promise<TDiscountType> =>
  await fastify.prisma.discountType.findUnique({
    where: {
      id
    }
  });

const create = async (fastify: FastifyInstance, data: Omit<TDiscountType, 'id'>): Promise<TDiscountType> =>
  await fastify.prisma.discountType.create({
    data
  });

const update = async (
  fastify: FastifyInstance,
  id: string,
  data: Omit<TDiscountType, 'id'>
): Promise<TDiscountType> =>
  await fastify.prisma.discountType.update({
    where: {
      id
    },
    data
  });

const remove = async (fastify: FastifyInstance, id: string): Promise<TDiscountType> =>
  await fastify.prisma.discountType.delete({
    where: {
      id
    }
  });

export default {
  getAll,
  getById,
  create,
  update,
  remove
};

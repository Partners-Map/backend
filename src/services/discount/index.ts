import { Discount as TDiscount } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import DiscountRepository from '../../repositories/discount';

const getAll = async (fastify: FastifyInstance): Promise<TDiscount[]> => {
  return await DiscountRepository.getAll(fastify);
};

const getById = async (fastify: FastifyInstance, id: string): Promise<TDiscount> => {
  return await DiscountRepository.getById(fastify, id);
};

const create = async (fastify: FastifyInstance, data: Omit<TDiscount, 'id'>): Promise<TDiscount> => {
  return await DiscountRepository.create(fastify, data);
};

const update = async (
  fastify: FastifyInstance,
  id: string,
  data: Omit<TDiscount, 'id'>
): Promise<TDiscount> => {
  return await DiscountRepository.update(fastify, id, data);
};

const remove = async (fastify: FastifyInstance, id: string): Promise<TDiscount> => {
  return await DiscountRepository.remove(fastify, id);
};

export default { getAll, getById, create, update, remove };

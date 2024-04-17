import { DiscountType as TDiscountType } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import DiscountTypeRepository from '../../repositories/discount-type';

const getAll = async (fastify: FastifyInstance): Promise<TDiscountType[]> => {
  return await DiscountTypeRepository.getAll(fastify);
};

const getById = async (fastify: FastifyInstance, id: string): Promise<TDiscountType> => {
  return await DiscountTypeRepository.getById(fastify, id);
};

const create = async (fastify: FastifyInstance, data: Omit<TDiscountType, 'id'>): Promise<TDiscountType> => {
  return await DiscountTypeRepository.create(fastify, data);
};

const update = async (
  fastify: FastifyInstance,
  id: string,
  data: Omit<TDiscountType, 'id'>
): Promise<TDiscountType> => {
  return await DiscountTypeRepository.update(fastify, id, data);
};

const remove = async (fastify: FastifyInstance, id: string): Promise<TDiscountType> => {
  return await DiscountTypeRepository.remove(fastify, id);
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};

import { Category as TCategory } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import CategoryRepository from '../../repositories/category';

const getAll = async (fastify: FastifyInstance): Promise<TCategory[]> => {
  return await CategoryRepository.getAll(fastify);
};

const getById = async (fastify: FastifyInstance, id: string): Promise<TCategory> => {
  return await CategoryRepository.getById(fastify, id);
};

const create = async (fastify: FastifyInstance, data: Omit<TCategory, 'id'>): Promise<TCategory> => {
  return await CategoryRepository.create(fastify, data);
};

const update = async (
  fastify: FastifyInstance,
  id: string,
  data: Omit<TCategory, 'id'>
): Promise<TCategory> => {
  return await CategoryRepository.update(fastify, id, data);
};

const remove = async (fastify: FastifyInstance, id: string): Promise<TCategory> => {
  return await CategoryRepository.remove(fastify, id);
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};

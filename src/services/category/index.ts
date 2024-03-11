import { Category as TCategory } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import CategoryRepository from '../../repositories/category';

const getAll = async (fastify: FastifyInstance): Promise<TCategory[]> => {
  return await CategoryRepository.getAll(fastify);
};

const getById = async (fastify: FastifyInstance, categoryId: string): Promise<TCategory> => {
  return await CategoryRepository.getById(fastify, categoryId);
};

const create = async (fastify: FastifyInstance, createdData: Omit<TCategory, 'id'>): Promise<TCategory> => {
  return await CategoryRepository.create(fastify, createdData);
};

const update = async (
  fastify: FastifyInstance,
  updatebleId: string,
  updatebleData: Omit<TCategory, 'id'>
): Promise<TCategory> => {
  return await CategoryRepository.update(fastify, updatebleId, updatebleData);
};

const remove = async (fastify: FastifyInstance, removableId: string): Promise<TCategory> => {
  return await CategoryRepository.remove(fastify, removableId);
};

export default { getAll, getById, create, update, remove };

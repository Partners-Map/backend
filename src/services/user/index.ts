import type { User as TUser } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import UserRepository from '../../repositories/user';

const getAll = async (fastify: FastifyInstance): Promise<TUser[]> => {
  return await UserRepository.getAll(fastify);
};

const getById = async (fastify: FastifyInstance, userId: string): Promise<TUser> => {
  return await UserRepository.getById(fastify, userId);
};

const create = async (fastify: FastifyInstance, createdData: Omit<TUser, 'id'>): Promise<TUser> => {
  return await UserRepository.create(fastify, createdData);
};

const update = async (
  fastify: FastifyInstance,
  userId: string,
  updatedData: Omit<TUser, 'id'>
): Promise<TUser> => {
  return await UserRepository.update(fastify, userId, updatedData);
};

const remove = async (fastify: FastifyInstance, userId: string): Promise<TUser> => {
  return await UserRepository.remove(fastify, userId);
};

export default { getAll, getById, create, update, remove };

import type { Role as TRole } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import RoleRepository from '../../repositories/role';

const getAll = async (fastify: FastifyInstance): Promise<TRole[]> => {
  return await RoleRepository.getAll(fastify);
};

const getById = async (fastify: FastifyInstance, addressId: string): Promise<TRole> => {
  return await RoleRepository.getById(fastify, addressId);
};

const create = async (fastify: FastifyInstance, createdData: Omit<TRole, 'id'>): Promise<TRole> => {
  return await RoleRepository.create(fastify, createdData);
};

const update = async (
  fastify: FastifyInstance,
  updatebleId: string,
  updatebleData: Omit<TRole, 'id'>
): Promise<TRole> => {
  return await RoleRepository.update(fastify, updatebleId, updatebleData);
};

const remove = async (fastify: FastifyInstance, removableId: string): Promise<TRole> => {
  return await RoleRepository.remove(fastify, removableId);
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};

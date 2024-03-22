import type { Role as TRole } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import RoleRepository from '../../repositories/role';

const getAll = async (fastify: FastifyInstance): Promise<TRole[]> => {
  return await RoleRepository.getAll(fastify);
};

const getById = async (fastify: FastifyInstance, addressId: string): Promise<TRole> => {
  return await RoleRepository.getById(fastify, addressId);
};

const create = async (fastify: FastifyInstance, data: Omit<TRole, 'id'>): Promise<TRole> => {
  return await RoleRepository.create(fastify, data);
};

const update = async (fastify: FastifyInstance, id: string, data: Omit<TRole, 'id'>): Promise<TRole> => {
  return await RoleRepository.update(fastify, id, data);
};

const remove = async (fastify: FastifyInstance, id: string): Promise<TRole> => {
  return await RoleRepository.remove(fastify, id);
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};

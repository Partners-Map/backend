import { Address as TAddress } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import AddressRepository from '../../repositories/address';

const getAll = async (fastify: FastifyInstance): Promise<TAddress[]> => {
  return await AddressRepository.getAll(fastify);
};

const getById = async (fastify: FastifyInstance, id: string): Promise<TAddress> => {
  return await AddressRepository.getById(fastify, id);
};

const create = async (fastify: FastifyInstance, data: Omit<TAddress, 'id'>): Promise<TAddress> => {
  return await AddressRepository.create(fastify, data);
};

const update = async (
  fastify: FastifyInstance,
  id: string,
  data: Omit<TAddress, 'id'>
): Promise<TAddress> => {
  return await AddressRepository.update(fastify, id, data);
};

const remove = async (fastify: FastifyInstance, id: string): Promise<TAddress> => {
  return await AddressRepository.remove(fastify, id);
};

export default { getAll, getById, create, update, remove };

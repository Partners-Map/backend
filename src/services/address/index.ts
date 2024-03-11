import { Address as TAddress } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import AddressRepository from '../../repositories/address';

const getAll = async (fastify: FastifyInstance): Promise<TAddress[]> => {
  return await AddressRepository.getAll(fastify);
};

const getById = async (fastify: FastifyInstance, addressId: string): Promise<TAddress> => {
  return await AddressRepository.getById(fastify, addressId);
};

const create = async (fastify: FastifyInstance, createdData: Omit<TAddress, 'id'>): Promise<TAddress> => {
  return await AddressRepository.create(fastify, createdData);
};

const update = async (
  fastify: FastifyInstance,
  updatebleId: string,
  updatebleData: Omit<TAddress, 'id'>
): Promise<TAddress> => {
  return await AddressRepository.update(fastify, updatebleId, updatebleData);
};

const remove = async (fastify: FastifyInstance, removableId: string): Promise<TAddress> => {
  return await AddressRepository.remove(fastify, removableId);
};

export default { getAll, getById, create, update, remove };

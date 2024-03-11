import { Place as TPlace } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import PlaceRepository from '../../repositories/place';

const getAll = async (fastify: FastifyInstance): Promise<TPlace[]> => {
  return await PlaceRepository.getAll(fastify);
};

const getById = async (fastify: FastifyInstance, partnerId: string): Promise<TPlace> => {
  return await PlaceRepository.getById(fastify, partnerId);
};

const create = async (fastify: FastifyInstance, createdData: Omit<TPlace, 'id'>): Promise<TPlace> => {
  return await PlaceRepository.create(fastify, createdData);
};

const update = async (
  fastify: FastifyInstance,
  updatebleId: string,
  updatebleData: Omit<TPlace, 'id'>
): Promise<TPlace> => {
  return await PlaceRepository.update(fastify, updatebleId, updatebleData);
};

const remove = async (fastify: FastifyInstance, removableId: string): Promise<TPlace> => {
  return await PlaceRepository.remove(fastify, removableId);
};

export default { getAll, getById, create, update, remove };

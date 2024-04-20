import { Place as TPlace } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import PlaceRepository from '../../repositories/place';

const getAll = async (fastify: FastifyInstance): Promise<TPlace[]> => {
  return await PlaceRepository.getAll(fastify);
};

const getAllWithAddress = async (fastify: FastifyInstance): Promise<TPlace[]> => {
  return await PlaceRepository.getAllWithAddress(fastify);
};

const getAllWithAvgPrice = async (fastify: FastifyInstance): Promise<TPlace[]> => {
  return await PlaceRepository.getAllWithAvgPrice(fastify);
};

const getById = async (fastify: FastifyInstance, id: string): Promise<TPlace> => {
  return await PlaceRepository.getById(fastify, id);
};

const getByIdWithAddress = async (fastify: FastifyInstance, id: string): Promise<TPlace> => {
  return await PlaceRepository.getByIdWithAddress(fastify, id);
};

const getByIdWithAvgPrice = async (fastify: FastifyInstance, id: string): Promise<TPlace> => {
  return await PlaceRepository.getByIdWithAvgPrice(fastify, id);
};

const create = async (fastify: FastifyInstance, data: Omit<TPlace, 'id'>): Promise<TPlace> => {
  return await PlaceRepository.create(fastify, data);
};

const update = async (fastify: FastifyInstance, id: string, data: Omit<TPlace, 'id'>): Promise<TPlace> => {
  return await PlaceRepository.update(fastify, id, data);
};

const remove = async (fastify: FastifyInstance, id: string): Promise<TPlace> => {
  return await PlaceRepository.remove(fastify, id);
};

export default {
  getAll,
  getAllWithAddress,
  getAllWithAvgPrice,
  getById,
  getByIdWithAddress,
  getByIdWithAvgPrice,
  create,
  update,
  remove
};

import { Partner as TPartner } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import PartnerRepository from '../../repositories/partner';

const getAll = async (fastify: FastifyInstance): Promise<TPartner[]> => {
  return await PartnerRepository.getAll(fastify);
};

const getById = async (fastify: FastifyInstance, id: string): Promise<TPartner> => {
  return await PartnerRepository.getById(fastify, id);
};

const create = async (fastify: FastifyInstance, data: Omit<TPartner, 'id'>): Promise<TPartner> => {
  return await PartnerRepository.create(fastify, data);
};

const update = async (
  fastify: FastifyInstance,
  id: string,
  data: Omit<TPartner, 'id'>
): Promise<TPartner> => {
  return await PartnerRepository.update(fastify, id, data);
};

const remove = async (fastify: FastifyInstance, id: string): Promise<TPartner> => {
  return await PartnerRepository.remove(fastify, id);
};

export default { getAll, getById, create, update, remove };

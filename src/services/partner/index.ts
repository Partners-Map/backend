import { Partner as TPartner } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import PartnerRepository from '../../repositories/partner';

const getAll = async (fastify: FastifyInstance): Promise<TPartner[]> => {
  return await PartnerRepository.getAll(fastify);
};

const getById = async (fastify: FastifyInstance, partnerId: string): Promise<TPartner> => {
  return await PartnerRepository.getById(fastify, partnerId);
};

const create = async (fastify: FastifyInstance, createdData: Omit<TPartner, 'id'>): Promise<TPartner> => {
  return await PartnerRepository.create(fastify, createdData);
};

const update = async (
  fastify: FastifyInstance,
  updatebleId: string,
  updatebleData: Omit<TPartner, 'id'>
): Promise<TPartner> => {
  return await PartnerRepository.update(fastify, updatebleId, updatebleData);
};

const remove = async (fastify: FastifyInstance, removableId: string): Promise<TPartner> => {
  return await PartnerRepository.remove(fastify, removableId);
};

export default { getAll, getById, create, update, remove };

import { Partner as TPartner } from '@prisma/client';
import { FastifyInstance } from 'fastify';

const getAll = async (fastify: FastifyInstance): Promise<TPartner[]> => fastify.prisma.partner.findMany();

const getById = async (fastify: FastifyInstance, partnerId: string): Promise<TPartner> =>
  await fastify.prisma.partner.findUnique({
    where: {
      id: partnerId
    }
  });

const create = async (fastify: FastifyInstance, createdData: Omit<TPartner, 'id'>): Promise<TPartner> =>
  await fastify.prisma.partner.create({
    data: createdData
  });

const update = async (
  fastify: FastifyInstance,
  updatebleId: string,
  updatebleData: Omit<TPartner, 'id'>
): Promise<TPartner> =>
  await fastify.prisma.partner.update({
    where: {
      id: updatebleId
    },
    data: updatebleData
  });

const remove = async (fastify: FastifyInstance, removableId: string): Promise<TPartner> => {
  return await fastify.prisma.partner.delete({
    where: {
      id: removableId
    }
  });
};

export default { getAll, getById, create, update, remove };

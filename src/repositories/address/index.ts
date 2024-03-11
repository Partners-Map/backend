import { Address as TAddress } from '@prisma/client';
import { FastifyInstance } from 'fastify';

const getAll = async (fastify: FastifyInstance): Promise<TAddress[]> => fastify.prisma.address.findMany();

const getById = async (fastify: FastifyInstance, addressId: string): Promise<TAddress> =>
  await fastify.prisma.address.findUnique({
    where: {
      id: addressId
    }
  });

const create = async (fastify: FastifyInstance, createdData: Omit<TAddress, 'id'>): Promise<TAddress> =>
  fastify.prisma.address.create({
    data: createdData
  });

const update = async (
  fastify: FastifyInstance,
  updatebleId: string,
  updatebleData: Omit<TAddress, 'id'>
): Promise<TAddress> =>
  fastify.prisma.address.update({
    where: {
      id: updatebleId
    },
    data: updatebleData
  });

const remove = async (fastify: FastifyInstance, removableId: string): Promise<TAddress> =>
  fastify.prisma.address.delete({
    where: {
      id: removableId
    }
  });

export default { getAll, getById, create, update, remove };

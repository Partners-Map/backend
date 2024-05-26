import { Address as TAddress } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { BatchPayload } from '../../@types/orm';

const getAll = async (fastify: FastifyInstance): Promise<TAddress[]> => fastify.prisma.address.findMany();

const getById = async (fastify: FastifyInstance, id: string): Promise<TAddress> =>
  await fastify.prisma.address.findUnique({
    where: {
      id
    }
  });

const create = async (fastify: FastifyInstance, data: Omit<TAddress, 'id'>): Promise<TAddress> =>
  fastify.prisma.address.create({
    data
  });

const createMany = async (fastify: FastifyInstance, data: Omit<TAddress, 'id'>[]): Promise<BatchPayload> =>
  fastify.prisma.address.createMany({
    data,
    skipDuplicates: true
  });

const update = async (fastify: FastifyInstance, id: string, data: Omit<TAddress, 'id'>): Promise<TAddress> =>
  fastify.prisma.address.update({
    where: {
      id
    },
    data
  });

const remove = async (fastify: FastifyInstance, id: string): Promise<TAddress> =>
  fastify.prisma.address.delete({
    where: {
      id
    }
  });

const removeManyByPlaceId = async (fastify: FastifyInstance, id: string): Promise<BatchPayload> =>
  fastify.prisma.address.deleteMany({
    where: {
      placeId: id
    }
  });

export default { getAll, getById, create, createMany, update, remove, removeManyByPlaceId };

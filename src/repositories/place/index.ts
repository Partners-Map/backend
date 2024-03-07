import { Place as TPlace } from '@prisma/client';
import { FastifyInstance } from 'fastify';

const getAll = async (fastify: FastifyInstance): Promise<TPlace[]> => fastify.prisma.place.findMany();

const getById = async (fastify: FastifyInstance, placeId: string): Promise<TPlace> =>
  await fastify.prisma.place.findUnique({
    where: {
      id: placeId
    }
  });

const create = async (fastify: FastifyInstance, createdData: Omit<TPlace, 'id'>): Promise<TPlace> =>
  await fastify.prisma.place.create({
    data: createdData
  });

const update = async (
  fastify: FastifyInstance,
  updatebleId: string,
  updatebleData: Omit<TPlace, 'id'>
): Promise<TPlace> =>
  await fastify.prisma.place.update({
    where: {
      id: updatebleId
    },
    data: updatebleData
  });

const remove = async (fastify: FastifyInstance, removableId: string): Promise<TPlace> =>
  await fastify.prisma.place.delete({
    where: {
      id: removableId
    }
  });

export default { getAll, getById, create, update, remove };

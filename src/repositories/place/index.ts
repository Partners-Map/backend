import { Place as TPlace } from '@prisma/client';
import { FastifyInstance } from 'fastify';

const getAll = async (fastify: FastifyInstance): Promise<TPlace[]> => fastify.prisma.place.findMany();

const getById = async (fastify: FastifyInstance, id: string): Promise<TPlace> =>
  await fastify.prisma.place.findUnique({
    where: {
      id
    }
  });

const create = async (fastify: FastifyInstance, data: Omit<TPlace, 'id'>): Promise<TPlace> =>
  await fastify.prisma.place.create({
    data
  });

const update = async (fastify: FastifyInstance, id: string, data: Omit<TPlace, 'id'>): Promise<TPlace> =>
  await fastify.prisma.place.update({
    where: {
      id
    },
    data
  });

const remove = async (fastify: FastifyInstance, id: string): Promise<TPlace> =>
  await fastify.prisma.place.delete({
    where: {
      id
    }
  });

export default { getAll, getById, create, update, remove };

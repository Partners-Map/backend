import { Place as TPlace } from '@prisma/client';
import { FastifyInstance } from 'fastify';

const getAll = async (fastify: FastifyInstance): Promise<TPlace[]> => fastify.prisma.place.findMany();

const getAllWithAddress = async (fastify: FastifyInstance): Promise<TPlace[]> =>
  fastify.prisma.place.findMany({
    include: {
      address: true
    }
  });

const getAllWithAvgPrice = async (fastify: FastifyInstance): Promise<TPlace[]> =>
  (
    await fastify.prisma.place.findMany({
      include: {
        minAvgPrice: true,
        maxAvgPrice: true
      }
    })
  ).map(place => ({
    ...place,
    maxAvgPrice: place.maxAvgPrice ? place.maxAvgPrice : '',
    maxAvgPriceId: place.maxAvgPriceId ? place.maxAvgPriceId : ''
  }));

const getById = async (fastify: FastifyInstance, id: string): Promise<TPlace> =>
  await fastify.prisma.place.findUnique({
    where: {
      id
    }
  });

const getByIdWithAddress = async (fastify: FastifyInstance, id: string): Promise<TPlace> =>
  await fastify.prisma.place.findUnique({
    where: {
      id
    },
    include: {
      address: true
    }
  });

const getByIdWithAvgPrice = async (fastify: FastifyInstance, id: string): Promise<TPlace> => {
  const place = await fastify.prisma.place.findUnique({
    where: {
      id
    },
    include: {
      minAvgPrice: true,
      maxAvgPrice: true
    }
  });

  const placeWithEmptyMaxAvgPrice = {
    ...place,
    maxAvgPrice: place.maxAvgPrice ? place.maxAvgPrice : '',
    maxAvgPriceId: place.maxAvgPriceId ? place.maxAvgPriceId : ''
  };

  return placeWithEmptyMaxAvgPrice;
};

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

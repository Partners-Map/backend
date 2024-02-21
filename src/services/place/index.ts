import { Place } from '@prisma/client';
import { FastifyInstance } from 'fastify';

export const getAllPlaces = async (fastify: FastifyInstance): Promise<Place[]> => {
  return await fastify.prisma.place.findMany({
    include: {
      address: true
    }
  });
};

export const getPlaceById = async (fastify: FastifyInstance, placeId: string): Promise<Place> => {
  return await fastify.prisma.place.findUnique({
    where: {
      id: placeId
    }
  });
};

export const getPlaceByIdWithAddress = async (fastify: FastifyInstance, placeId: string): Promise<any> => {
  return await fastify.prisma.place.findUnique({
    where: {
      id: placeId
    },
    include: {
      address: true
    }
  });
};

export const createPlace = async (
  fastify: FastifyInstance,
  createdData: Omit<Place, 'id'>
): Promise<Place> => {
  return await fastify.prisma.place.create({
    data: {
      name: createdData.name,
      description: createdData.description,
      conditions: createdData.conditions,
      partnerId: createdData.partnerId
    }
  });
};

export const updatePlace = async (
  fastify: FastifyInstance,
  placeId: string,
  updatedData: Omit<Place, 'id'>
): Promise<Place> => {
  return await fastify.prisma.place.update({
    where: {
      id: placeId
    },
    data: {
      name: updatedData.name,
      description: updatedData.description,
      conditions: updatedData.conditions,
      partnerId: updatedData.partnerId
    }
  });
};

export const deletePlace = async (fastify: FastifyInstance, placeId: string): Promise<Place> => {
  await fastify.prisma.placeToCategory.deleteMany({
    where: {
      placeId: placeId
    }
  });
  await fastify.prisma.address.delete({
    where: {
      placeId: placeId
    }
  });
  return await fastify.prisma.place.delete({
    where: {
      id: placeId
    }
  });
};

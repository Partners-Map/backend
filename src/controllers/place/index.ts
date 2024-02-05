import { Places } from '@prisma/client';
import { FastifyInstance } from 'fastify';

export const getAllPlaces = async (fastify: FastifyInstance): Promise<Places[]> => {
  return await fastify.prisma.places.findMany();
};

export const getPlaceById = async (
  fastify: FastifyInstance,
  placeId: string
): Promise<Places> => {
  return await fastify.prisma.places.findUnique({
    where: {
      id: placeId
    }
  });
};

export const createPlace = async (
  fastify: FastifyInstance,
  createdData: Omit<Places, 'id'>
): Promise<Places> => {
  return await fastify.prisma.places.create({
    data: {
      adress: createdData.adress,
      latitude: createdData.latitude,
      longitude: createdData.longitude
    }
  });
};

export const updatePlace = async (
  fastify: FastifyInstance,
  placeId: string,
  createdData: Omit<Places, 'id'>
): Promise<Places> => {
  return await fastify.prisma.places.update({
    where: {
      id: placeId
    },
    data: {
      adress: createdData.adress,
      latitude: createdData.latitude,
      longitude: createdData.longitude
    }
  });
};

export const deletePlace = async (
  fastify: FastifyInstance,
  placeId: string
): Promise<Places> => {
  await fastify.prisma.partnersOnPlaces.deleteMany({
    where: {
      placesId: placeId
    }
  });
  return await fastify.prisma.places.delete({
    where: {
      id: placeId
    }
  });
};

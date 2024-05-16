import { Place as TPlace, PlaceToCategory as TPlaceToCategory } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { TNewPlace } from '../../@types/api/new-place';

const getAll = async (fastify: FastifyInstance): Promise<TPlace[]> => fastify.prisma.place.findMany();

const getAllWithAddress = async (fastify: FastifyInstance): Promise<TPlace[]> =>
  fastify.prisma.place.findMany({
    include: {
      address: true
    }
  });

const getAllWithFullInfo = async (fastify: FastifyInstance): Promise<TPlace[]> =>
  (
    await fastify.prisma.place.findMany({
      include: {
        minAvgPrice: true,
        maxAvgPrice: true,
        partner: true,
        address: true,
        discount: true,
        _count: true
      }
    })
  ).map(place => ({
    ...place,
    maxAvgPrice: place.maxAvgPrice ? place.maxAvgPrice : '',
    maxAvgPriceId: place.maxAvgPriceId ? place.maxAvgPriceId : ''
  }));

const getAllPlaceWithCategory = async (fastify: FastifyInstance): Promise<TPlaceToCategory[]> =>
  (
    await fastify.prisma.placeToCategory.findMany({
      include: {
        place: true,
        category: true
      }
    })
  ).map(item => ({
    ...item,
    place: {
      ...item.place,
      maxAvgPriceId: item.place.maxAvgPriceId === null ? '' : item.place.maxAvgPriceId
    }
  }));

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

const getByIdWithFullInfo = async (fastify: FastifyInstance, id: string): Promise<TPlace> => {
  const place = await fastify.prisma.place.findUnique({
    where: {
      id
    },
    include: {
      minAvgPrice: true,
      maxAvgPrice: true,
      partner: true,
      address: true,
      discount: true,
      _count: true
    }
  });

  return {
    ...place,
    maxAvgPriceId: place.maxAvgPriceId ? place.maxAvgPriceId : ''
  };
};

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

const getByIdPlaceWithCategory = async (fastify: FastifyInstance, id: string): Promise<TPlaceToCategory[]> =>
  (
    await fastify.prisma.placeToCategory.findMany({
      where: {
        place: {
          id
        }
      },
      include: {
        place: true,
        category: true
      }
    })
  ).map(item => ({
    ...item,
    place: {
      ...item.place,
      maxAvgPriceId: item.place.maxAvgPriceId === null ? '' : item.place.maxAvgPriceId
    }
  }));

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

const updateFull = async (fastify: FastifyInstance, id: string, data: TNewPlace): Promise<TPlace> =>
  await fastify.prisma.place.update({
    where: {
      id
    },
    data: {
      title: data.place.title,
      description: data.place.description,
      kitchen: '',
      openingTime: data.place.openingTime,
      closingTime: data.place.closingTime,
      minAvgPrice: {
        connect: {
          id: data.place.minAvgPriceId
        }
      },
      maxAvgPrice:
        data.place.maxAvgPriceId !== ''
          ? {
              connect: {
                id: data.place.minAvgPriceId
              }
            }
          : null,
      partner: {
        connect: {
          id: data.partnerId
        }
      },
      discount: {
        update: {
          conditions: data.discount.conditions,
          amount: data.discount.amount,
          information: data.discount.information,
          discountTypeId: data.discount.discountTypeId
        }
      }
    }
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
  getAllWithFullInfo,
  getAllPlaceWithCategory,
  getById,
  getByIdWithAddress,
  getByIdWithAvgPrice,
  getByIdWithFullInfo,
  getByIdPlaceWithCategory,
  create,
  update,
  updateFull,
  remove
};

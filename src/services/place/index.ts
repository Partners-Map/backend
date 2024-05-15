import { Place as TPlace, PlaceToCategory as TPlaceToCategory } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import PlaceRepository from '../../repositories/place';
import DiscountRepository from '../../repositories/discount';
import CategoryRepository from '../../repositories/category';
import AddressRepository from '../../repositories/address';

import { TNewPlace } from '../../@types/api/new-place';
import { Decimal } from '@prisma/client/runtime/library';

const getAll = async (fastify: FastifyInstance): Promise<TPlace[]> => {
  return await PlaceRepository.getAll(fastify);
};

const getAllWithAddress = async (fastify: FastifyInstance): Promise<TPlace[]> => {
  return await PlaceRepository.getAllWithAddress(fastify);
};

const getAllWithFullInfo = async (fastify: FastifyInstance): Promise<TPlace[]> => {
  return await PlaceRepository.getAllWithFullInfo(fastify);
};

const getAllWithCategory = async (fastify: FastifyInstance): Promise<TPlaceToCategory[]> => {
  return await PlaceRepository.getAllPlaceWithCategory(fastify);
};

const getAllWithAvgPrice = async (fastify: FastifyInstance): Promise<TPlace[]> => {
  return await PlaceRepository.getAllWithAvgPrice(fastify);
};

const getById = async (fastify: FastifyInstance, id: string): Promise<TPlace> => {
  return await PlaceRepository.getById(fastify, id);
};

const getByIdWithFullInfo = async (fastify: FastifyInstance, id: string): Promise<TPlace> => {
  return await PlaceRepository.getByIdWithFullInfo(fastify, id);
};

const getByIdWithAddress = async (fastify: FastifyInstance, id: string): Promise<TPlace> => {
  return await PlaceRepository.getByIdWithAddress(fastify, id);
};

const getByIdWithAvgPrice = async (fastify: FastifyInstance, id: string): Promise<TPlace> => {
  return await PlaceRepository.getByIdWithAvgPrice(fastify, id);
};

const getByIdWithCategory = async (fastify: FastifyInstance, id: string): Promise<TPlaceToCategory[]> => {
  return await PlaceRepository.getByIdPlaceWithCategory(fastify, id);
};

const create = async (fastify: FastifyInstance, data: Omit<TPlace, 'id'>): Promise<TPlace> => {
  return await PlaceRepository.create(fastify, data);
};

const createFull = async (fastify: FastifyInstance, data: TNewPlace): Promise<TPlace> => {
  const discount = await DiscountRepository.create(fastify, {
    ...data.discount,
    amount: Number(data.discount.amount)
  });
  const place = await PlaceRepository.create(fastify, {
    ...data.place,
    discountId: discount.id,
    partnerId: data.partnerId,
    maxAvgPriceId: data.place.maxAvgPriceId !== '' ? data.place.maxAvgPriceId : null
  });
  const category = await CategoryRepository.tyingCategoryAndPlace(fastify, {
    placeId: place.id,
    categoryId: data.categoryId
  });
  const addresses = await AddressRepository.createMany(
    fastify,
    data.addresses.map(address => ({
      ...address,
      placeId: place.id,
      latitude: new Decimal(address.latitude),
      longitude: new Decimal(address.longitude)
    }))
  );
  return place;
};

const update = async (fastify: FastifyInstance, id: string, data: Omit<TPlace, 'id'>): Promise<TPlace> => {
  return await PlaceRepository.update(fastify, id, data);
};

const updateFull = async (fastify: FastifyInstance, id: string, data: TNewPlace): Promise<TPlace> => {
  try {
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

    await fastify.prisma.address.deleteMany({
      where: {
        placeId: id
      }
    });

    const newAddresses = data.addresses.map(address => ({
      ...address,
      placeId: id
    }));

    if (newAddresses.length > 0) {
      await fastify.prisma.address.createMany({ data: newAddresses });
    }
  } catch (error) {
    fastify.log.error(error);
  }
};

const remove = async (fastify: FastifyInstance, id: string): Promise<TPlace> => {
  return await PlaceRepository.remove(fastify, id);
};

export default {
  getAll,
  getAllWithAddress,
  getAllWithAvgPrice,
  getAllWithFullInfo,
  getAllWithCategory,
  getById,
  getByIdWithAddress,
  getByIdWithAvgPrice,
  getByIdWithFullInfo,
  getByIdWithCategory,
  create,
  createFull,
  update,
  updateFull,
  remove
};

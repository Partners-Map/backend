import { AvgPrice as TAvgPrice } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import AvgPriceRepository from '../../repositories/avg-price';

type AvgPricesRanges = {
  symbol: string;
  startOfRange: string;
  endOfRange: string;
};

const getAll = async (fastify: FastifyInstance): Promise<TAvgPrice[]> => {
  return await AvgPriceRepository.getAll(fastify);
};

const getAllRanges = async (fastify: FastifyInstance): Promise<AvgPricesRanges[]> => {
  const avgPrices = await AvgPriceRepository.getAll(fastify);
  const avgPricesRanges = avgPrices.map((price, index, prices) => ({
    symbol: price.symbol + '-' + (prices[index + 1] ? prices[index + 1].symbol : prices[0].symbol),
    startOfRange: price.slug,
    endOfRange: prices[index + 1] ? prices[index + 1].slug : prices[0].slug
  }));

  return avgPricesRanges;
};

const getById = async (fastify: FastifyInstance, id: string): Promise<TAvgPrice> => {
  return await AvgPriceRepository.getById(fastify, id);
};

const create = async (fastify: FastifyInstance, data: Omit<TAvgPrice, 'id'>): Promise<TAvgPrice> => {
  return await AvgPriceRepository.create(fastify, data);
};

const update = async (
  fastify: FastifyInstance,
  id: string,
  data: Omit<TAvgPrice, 'id'>
): Promise<TAvgPrice> => {
  return await AvgPriceRepository.update(fastify, id, data);
};

const remove = async (fastify: FastifyInstance, id: string): Promise<TAvgPrice> => {
  return await AvgPriceRepository.remove(fastify, id);
};

export default {
  getAll,
  getAllRanges,
  getById,
  create,
  update,
  remove
};

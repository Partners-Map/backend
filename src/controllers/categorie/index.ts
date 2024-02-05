import { Categories } from '@prisma/client';
import { FastifyInstance } from 'fastify';

export const getAllCategories = async (
  fastify: FastifyInstance
): Promise<Categories[]> => {
  return await fastify.prisma.categories.findMany();
};

export const getCategorieById = async (
  fastify: FastifyInstance,
  categorieId: string
): Promise<Categories> => {
  return await fastify.prisma.categories.findUnique({
    where: {
      id: categorieId
    }
  });
};

export const createCategorie = async (
  fastify: FastifyInstance,
  title: string
): Promise<Categories> => {
  return await fastify.prisma.categories.create({
    data: {
      title
    }
  });
};

export const updateCategorie = async (
  fastify: FastifyInstance,
  categorieId: string,
  newTitle: string
): Promise<Categories> => {
  return await fastify.prisma.categories.update({
    where: {
      id: categorieId
    },
    data: {
      title: newTitle
    }
  });
};

export const deleteCategorie = async (
  fastify: FastifyInstance,
  categorieId: string
): Promise<Categories> => {
  return await fastify.prisma.categories.delete({
    where: {
      id: categorieId
    }
  });
};

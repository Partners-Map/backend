import { Category } from '@prisma/client';
import { FastifyInstance } from 'fastify';

export const getAllCategories = async (fastify: FastifyInstance): Promise<Category[]> => {
  return await fastify.prisma.category.findMany();
};

export const getCategorieById = async (
  fastify: FastifyInstance,
  categoryId: string
): Promise<Category> => {
  return await fastify.prisma.category.findUnique({
    where: {
      id: categoryId
    }
  });
};

export const createCategorie = async (
  fastify: FastifyInstance,
  title: string
): Promise<Category> => {
  return await fastify.prisma.category.create({
    data: {
      title
    }
  });
};

export const updateCategorie = async (
  fastify: FastifyInstance,
  categoryId: string,
  newTitle: string
): Promise<Category> => {
  return await fastify.prisma.category.update({
    where: {
      id: categoryId
    },
    data: {
      title: newTitle
    }
  });
};

export const deleteCategorie = async (
  fastify: FastifyInstance,
  categoryId: string
): Promise<Category> => {
  await fastify.prisma.placeToCategory.deleteMany({
    where: {
      categoryId: categoryId
    }
  });
  return await fastify.prisma.category.delete({
    where: {
      id: categoryId
    }
  });
};

import type { User } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { TCreateUserReq } from '../../@types/req/user';

export const findAll = async (fastify: FastifyInstance): Promise<User[]> => {
  return await fastify.prisma.user.findMany();
};

export const findById = async (fastify: FastifyInstance, userId: string): Promise<User> => {
  return await fastify.prisma.user.findUnique({
    where: {
      id: userId
    }
  });
};

export const create = async (fastify: FastifyInstance, createdData: TCreateUserReq): Promise<User> => {
  return await fastify.prisma.user.create({
    data: {
      email: createdData.email,
      password: createdData.password,
      roleId: createdData.roleId
    }
  });
};

export const updateById = async (
  fastify: FastifyInstance,
  userId: string,
  updatedData: TCreateUserReq
): Promise<User> => {
  return await fastify.prisma.user.update({
    where: {
      id: userId
    },
    data: {
      email: updatedData.email,
      password: updatedData.password,
      roleId: updatedData.roleId
    }
  });
};

export const deleteById = async (fastify: FastifyInstance, userId: string): Promise<User> => {
  return await fastify.prisma.user.delete({
    where: {
      id: userId
    }
  });
};

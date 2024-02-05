import type { User } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { TCreateUserReq } from '../../@types/req/user';

export const getAllUsers = async (fastify: FastifyInstance): Promise<User[]> => {
  return await fastify.prisma.user.findMany();
};

export const getUserById = async (
  fastify: FastifyInstance,
  userId: string
): Promise<User> => {
  return await fastify.prisma.user.findUnique({
    where: {
      id: userId
    }
  });
};

export const createUser = (
  fastify: FastifyInstance,
  createdData: TCreateUserReq
): Promise<User> => {
  const newUser = fastify.prisma.user.create({
    data: {
      email: createdData.email,
      password: createdData.password,
      roleId: createdData.roleId
    }
  });
  return newUser;
};

export const updateUser = (
  fastify: FastifyInstance,
  userId: string,
  updatedData: TCreateUserReq
): Promise<User> => {
  const updatedUser = fastify.prisma.user.update({
    where: {
      id: userId
    },
    data: {
      email: updatedData.email,
      password: updatedData.password,
      roleId: updatedData.roleId
    }
  });
  return updatedUser;
};

export const deleteUserById = async (
  fastify: FastifyInstance,
  userId: string
): Promise<User> => {
  const deletedUser = fastify.prisma.user.delete({
    where: {
      id: userId
    }
  });
  return deletedUser;
};

import type { Users } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { TCreateUserReq } from '../../@types/req/user';

export const getAllUsers = async (fastify: FastifyInstance): Promise<Users[]> => {
  return await fastify.prisma.users.findMany();
};

export const getUserById = async (
  fastify: FastifyInstance,
  userId: string
): Promise<Users> => {
  return await fastify.prisma.users.findUnique({
    where: {
      id: userId
    }
  });
};

export const createUser = (
  fastify: FastifyInstance,
  createdData: TCreateUserReq
): Promise<Users> => {
  const newUser = fastify.prisma.users.create({
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
): Promise<Users> => {
  const updatedUser = fastify.prisma.users.update({
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
): Promise<Users> => {
  const deletedUser = fastify.prisma.users.delete({
    where: {
      id: userId
    }
  });
  return deletedUser;
};

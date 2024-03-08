import type { User } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { TCreateUserReq } from '../../@types/req/user';
import { create, deleteById, findAll, findById, updateById } from '../../repositories/user';

export const getAllUsers = async (fastify: FastifyInstance): Promise<User[]> => {
  const allUsers = await findAll(fastify);
  return allUsers;
};

export const getUserById = async (fastify: FastifyInstance, userId: string): Promise<User> => {
  const foundUser = await findById(fastify, userId);
  return foundUser;
};

export const createUser = async (fastify: FastifyInstance, createdData: TCreateUserReq): Promise<User> => {
  const newUser = await create(fastify, createdData);
  return newUser;
};

export const updateUser = async (
  fastify: FastifyInstance,
  userId: string,
  updatedData: TCreateUserReq
): Promise<User> => {
  const updatedUser = await updateById(fastify, userId, updatedData);
  return updatedUser;
};

export const deleteUserById = async (fastify: FastifyInstance, userId: string): Promise<User> => {
  const deletedUser = await deleteById(fastify, userId);
  return deletedUser;
};

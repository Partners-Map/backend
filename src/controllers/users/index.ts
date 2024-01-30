import { FastifyInstance } from 'fastify';
import type { Users } from '@prisma/client';

export const getAllUsers = async (fastify: FastifyInstance): Promise<Users[]> => {
  return await fastify.prisma.users.findMany();
};

export const getUserById = async (
  fastify: FastifyInstance,
  userId: string
): Promise<any> => {
  return await fastify.prisma.users.findUnique({
    where: {
      id: userId
    }
  });
};

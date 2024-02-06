import type { Role } from '@prisma/client';
import { FastifyInstance } from 'fastify';

export const getAllRoles = async (fastify: FastifyInstance): Promise<Role[]> => {
  return await fastify.prisma.role.findMany();
};

export const getRoleById = async (
  fastify: FastifyInstance,
  roleId: string
): Promise<Role> => {
  return await fastify.prisma.role.findUnique({
    where: {
      id: roleId
    }
  });
};

export const createRole = async (
  fastify: FastifyInstance,
  title: string
): Promise<Role> => {
  return await fastify.prisma.role.create({
    data: {
      title
    }
  });
};

export const updateRole = async (
  fastify: FastifyInstance,
  roleId: string,
  newTitle: string
): Promise<Role> => {
  return await fastify.prisma.role.update({
    where: {
      id: roleId
    },
    data: {
      title: newTitle
    }
  });
};

export const deleteRole = async (
  fastify: FastifyInstance,
  roleId: string
): Promise<Role> => {
  return await fastify.prisma.role.delete({
    where: {
      id: roleId
    }
  });
};

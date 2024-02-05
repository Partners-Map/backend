import type { Roles } from '@prisma/client';
import { FastifyInstance } from 'fastify';

export const getAllRoles = async (fastify: FastifyInstance): Promise<Roles[]> => {
  return await fastify.prisma.roles.findMany();
};

export const getRoleById = async (
  fastify: FastifyInstance,
  roleId: string
): Promise<Roles> => {
  return await fastify.prisma.roles.findUnique({
    where: {
      id: roleId
    }
  });
};

export const createRole = async (
  fastify: FastifyInstance,
  title: string
): Promise<Roles> => {
  return await fastify.prisma.roles.create({
    data: {
      title
    }
  });
};

export const updateRole = async (
  fastify: FastifyInstance,
  roleId: string,
  newTitle: string
): Promise<Roles> => {
  return await fastify.prisma.roles.update({
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
): Promise<Roles> => {
  return await fastify.prisma.roles.delete({
    where: {
      id: roleId
    }
  });
};

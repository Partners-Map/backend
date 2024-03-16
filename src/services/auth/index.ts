import { User as TUser } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import UserRepository from '../../repositories/user';
import bcrypt from 'bcrypt';

type TLoginData = {
  email: string;
  password: string;
};

type TLoginResponse = {
  status: boolean;
  user?: TUser;
};

const login = async ({ email, password }: TLoginData, fastify: FastifyInstance): Promise<TLoginResponse> => {
  try {
    const user = await UserRepository.getByEmail(fastify, email);
    const isPasswordValid = await bcrypt.compare(password, user.password);
    return { status: isPasswordValid, user };
  } catch (error) {
    fastify.log.error(error);
    return { status: false };
  }
};

const generateAccessToken = async (user: TUser, fastify: FastifyInstance): Promise<string> => {
  return await fastify.jwt.sign({
    userId: user.id
  });
};

export default {
  login,
  generateAccessToken
};

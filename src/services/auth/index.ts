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

const checkUser = async (
  { email, password }: TLoginData,
  fastify: FastifyInstance
): Promise<TLoginResponse> => {
  const user = await UserRepository.getByEmail(fastify, email);
  const isPasswordValid = await bcrypt.compare(password, user.password);
  return user && isPasswordValid
    ? {
        status: true,
        user
      }
    : {
        status: false
      };
};

const generateAccessToken = async (user: TUser, fastify: FastifyInstance): Promise<string> => {
  return await fastify.jwt.sign({
    userId: user.id
  });
};

export default {
  checkUser,
  generateAccessToken
};

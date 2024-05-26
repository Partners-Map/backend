import type { User as TUser } from '@prisma/client';
import bcrypt from 'bcrypt';
import { FastifyInstance } from 'fastify';
import UserRepository from '../../repositories/user';

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
  return user && (await bcrypt.compare(password, user.password))
    ? {
        status: true,
        user
      }
    : {
        status: false
      };
};

export default {
  checkUser
};

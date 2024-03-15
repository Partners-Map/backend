import { User as TUser } from '@prisma/client';
import { FastifyInstance } from 'fastify';

type TLoginData = {
  email: string;
  password: string;
};

const login = async ({ email, password }: TLoginData, fastify: FastifyInstance) => {
  const checkResult = await checkLoginDetails({ email, password }, fastify);
  if (!checkResult.message && checkResult.isPasswordValid) {
    return { status: checkResult.isPasswordValid, user: checkResult.user };
  } else if (checkResult.message) {
    return { status: false, message: checkResult.message };
  } else {
    return { status: false, message: 'Неверный пароль' };
  }
};

const checkLoginDetails = async (data: TLoginData, fastify: FastifyInstance) => {
  try {
    const user = await fastify.prisma.user.findUnique({
      where: {
        email: data.email
      }
    });
    const isPasswordValid = user.password === data.password;
    return { email: true, isPasswordValid, user };
  } catch (error) {
    fastify.log.error(error);
    return { email: false, message: 'Пользователя с таким email не найдено' };
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

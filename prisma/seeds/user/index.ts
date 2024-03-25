import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import bcrypt from 'bcrypt';
import 'dotenv/config';

export const usersSeeds = async (prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>) => {
  const [adminRole] = await prisma.role.findMany();
  await prisma.user.createMany({
    data: [
      {
        email: process.env.BASE_ADMIN_EMAIL!,
        password: await bcrypt.hash(
          process.env.BASE_ADMIN_PASSWORD!,
          Number(process.env.USER_PASSWORD_SALT_ROUNDS!)
        ),
        roleId: adminRole.id
      }
    ]
  });
};

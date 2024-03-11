import { PrismaClient, Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const rolesSeeds = async (prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>) => {
  await prisma.role.createMany({
    data: [
      {
        title: 'админ'
      },
      {
        title: 'партнер'
      }
    ]
  });
};

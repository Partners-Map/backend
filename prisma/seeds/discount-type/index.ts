import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const discountTypesSeeds = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
) => {
  await prisma.discountType.createMany({
    data: [
      {
        title: 'Скидка'
      },
      {
        title: 'Кэшбэк'
      }
    ]
  });
};

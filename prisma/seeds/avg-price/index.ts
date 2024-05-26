import { PrismaClient } from '@prisma/client';

export const avgPricesSeeds = async (prisma: PrismaClient) => {
  await prisma.avgPrice.createMany({
    data: [
      {
        symbol: '₽',
        slug: 'small'
      },
      {
        symbol: '₽₽',
        slug: 'middle'
      },
      {
        symbol: '₽₽₽',
        slug: 'large'
      }
    ]
  });
};

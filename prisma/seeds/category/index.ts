import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const categoriesSeeds = async (prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>) => {
  await prisma.category.createMany({
    data: [
      {
        title: 'Рестораны, кафе и кофейни'
      },
      {
        title: 'Отдых'
      },
      {
        title: 'Здоровье'
      },
      {
        title: 'Услуги красоты'
      },
      {
        title: 'Дом'
      },
      {
        title: 'Спорт'
      },
      {
        title: 'Магазин'
      },
      {
        title: 'Путешествия'
      },
      {
        title: 'Образование'
      }
    ]
  });
};

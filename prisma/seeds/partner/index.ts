import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const partnersSeeds = async (prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>) => {
  await prisma.partner.createMany({
    data: [
      {
        name: 'London Restaurant Group'
      },
      {
        name: 'Mantera Restaurants'
      },
      {
        name: 'Мой кофе'
      },
      {
        name: 'Фрида'
      },
      {
        name: 'Зацепи'
      },
      {
        name: 'Итэлия'
      },
      {
        name: 'BestFOOD'
      },
      {
        name: 'Domileo'
      },
      {
        name: 'Hooknrolla'
      },
      {
        name: 'Сицилия'
      },
      {
        name: 'SimpleWine'
      },
      {
        name: 'Pushkin'
      },
      {
        name: 'City Thai Spa'
      },
      {
        name: 'Classic'
      },
      {
        name: 'Don’t drama'
      },
      {
        name: 'Loren'
      },
      {
        name: 'Бест-Клининг'
      },
      {
        name: 'World Class'
      },
      {
        name: 'Iskra Sochi'
      },
      {
        name: 'Ru_testo'
      },
      {
        name: 'Цветочный дом'
      },
      {
        name: 'Тироль клаб'
      },
      {
        name: 'SurfTeamSochi'
      },
      {
        name: 'Прогулки на яхтах и катерах'
      },
      {
        name: 'Пара смыслов'
      },
      {
        name: 'Sirius'
      },
      {
        name: 'Green Flow'
      },
      {
        name: 'Swissotel Камелия Сочи'
      },
      {
        name: 'Сочи-Парк'
      },
      {
        name: 'Компьютерная академия ТОП'
      },
      {
        name: 'Learn to Learn'
      }
    ]
  });
};

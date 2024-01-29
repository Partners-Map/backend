import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(async () => {
  await prisma.roles.createMany({
    data: [
      {
        title: 'админ'
      },
      {
        title: 'партнер'
      }
    ]
  });
  const roles = await prisma.roles.findMany();
  await prisma.users.createMany({
    data: [
      {
        email: 'admin@example.com',
        password: 'qwerty123',
        roleId: roles[0].id
      },
      {
        email: 'partner@example.com',
        password: 'qwerty123',
        roleId: roles[1].id
      },
      {
        email: 'user1@example.com',
        password: 'qwerty123',
        roleId: roles[1].id
      },
      {
        email: 'user2@example.com',
        password: 'qwerty123',
        roleId: roles[1].id
      }
    ]
  });
  await prisma.categorys.createMany({
    data: [
      {
        title: 'кафе и рестораны'
      },
      {
        title: 'отдых и спорт'
      },
      {
        title: 'для детей'
      },
      {
        title: 'сбер клуб скидки'
      }
    ]
  });
  await prisma.places.createMany({
    data: [
      {
        adress: 'Курортный проспект, 74',
        latitude: 43.568259,
        longitude: 39.742147
      },
      {
        adress: 'Виноградная улица, 27',
        latitude: 43.596652,
        longitude: 39.713004
      },
      {
        adress: 'улица Войкова, 1',
        latitude: 43.580808,
        longitude: 39.71866
      },
      {
        adress: 'улица Новая Заря, 7',
        latitude: 43.605961,
        longitude: 39.732181
      }
    ]
  });
  const categorys = await prisma.categorys.findMany();
  await prisma.partners.createMany({
    data: [
      {
        title: 'кафе',
        requirements: ['быть партнером'],
        additionalInformation: 'доп. информация',
        categoryId: categorys[0].id
      },
      {
        title: 'спорт',
        requirements: ['быть партнером'],
        additionalInformation: 'доп. информация',
        categoryId: categorys[1].id
      },
      {
        title: 'детский сад',
        requirements: ['быть партнером'],
        additionalInformation: 'доп. информация',
        categoryId: categorys[2].id
      },
      {
        title: 'клуб',
        requirements: ['быть партнером'],
        additionalInformation: 'доп. информация',
        categoryId: categorys[3].id
      }
    ]
  });
  const places = await prisma.places.findMany();
  const partners = await prisma.partners.findMany();
  await prisma.partnersOnPlaces.createMany({
    data: [
      {
        partnersId: partners[0].id,
        placesId: places[0].id
      },
      {
        partnersId: partners[0].id,
        placesId: places[1].id
      },
      {
        partnersId: partners[1].id,
        placesId: places[1].id
      },
      {
        partnersId: partners[2].id,
        placesId: places[2].id
      },
      {
        partnersId: partners[3].id,
        placesId: places[3].id
      }
    ]
  });
})()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

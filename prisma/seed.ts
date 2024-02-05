import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(async () => {
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
  const roles = await prisma.role.findMany();
  await prisma.user.createMany({
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
  await prisma.partner.createMany({
    data: [
      {
        name: 'OOO кафе ромашка'
      },
      {
        name: 'OOO детский сад'
      },
      {
        name: 'OOO клуб'
      },
      {
        name: 'OOO спортзал'
      }
    ]
  });
  await prisma.category.createMany({
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
  const partners = await prisma.partner.findMany();
  await prisma.place.createMany({
    data: [
      {
        name: 'кафе ромашка',
        description: '',
        conditions: ['быть партнером'],
        partnerId: partners[0].id
      },
      {
        name: 'детский сад',
        description: '',
        conditions: ['быть партнером'],
        partnerId: partners[1].id
      },
      {
        name: 'клуб',
        description: 'крутой',
        conditions: ['быть партнером'],
        partnerId: partners[2].id
      },
      {
        name: 'спортзал',
        description: '',
        conditions: ['быть партнером'],
        partnerId: partners[3].id
      }
    ]
  });

  const places = await prisma.place.findMany();
  await prisma.address.createMany({
    data: [
      {
        city: 'Сочи',
        street: 'Курортный проспект',
        house: '74',
        latitude: 43.568259,
        longitude: 39.742147,
        placeId: places[0].id
      },
      {
        city: 'Сочи',
        street: 'Виноградная улица',
        house: '27',
        latitude: 43.596652,
        longitude: 39.713004,
        placeId: places[1].id
      },
      {
        city: 'Сочи',
        street: 'Войкова',
        house: '1',
        latitude: 43.580808,
        longitude: 39.71866,
        placeId: places[2].id
      },
      {
        city: 'Сочи',
        street: 'Новая Заря',
        house: '7',
        latitude: 43.605961,
        longitude: 39.732181,
        placeId: places[3].id
      }
    ]
  });
  const categories = await prisma.category.findMany();
  await prisma.placeToCategory.createMany({
    data: [
      {
        placeId: places[0].id,
        categoryId: categories[0].id
      },
      {
        placeId: places[1].id,
        categoryId: categories[1].id
      },
      {
        placeId: places[2].id,
        categoryId: categories[2].id
      },
      {
        placeId: places[3].id,
        categoryId: categories[3].id
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

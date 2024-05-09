import { PrismaClient } from '@prisma/client';
import { addressesSeeds } from './seeds/address';
import { avgPricesSeeds } from './seeds/avg-price';
import { categoriesSeeds } from './seeds/category';
import { discountTypesSeeds } from './seeds/discount-type';
import { partnersSeeds } from './seeds/partner';
import { placesSeeds } from './seeds/place';
import { placeToCategoriesSeeds } from './seeds/place-to-category';
import { rolesSeeds } from './seeds/role';
import { usersSeeds } from './seeds/user';

const prisma = new PrismaClient();

(async () => {
  if (await prisma.category.findFirst()) {
    console.log('\n🔔 seeds не применены');
    return;
  }
  await rolesSeeds(prisma);
  await usersSeeds(prisma);
  await partnersSeeds(prisma);
  await categoriesSeeds(prisma);
  await discountTypesSeeds(prisma);
  await avgPricesSeeds(prisma);
  await placesSeeds(prisma);
  await addressesSeeds(prisma);
  await placeToCategoriesSeeds(prisma);
})()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

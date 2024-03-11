import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const usersSeeds = async (prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>) => {
  const [adminRole, partnerRole] = await prisma.role.findMany();
  await prisma.user.createMany({
    data: [
      {
        email: 'admin@example.com',
        password: 'qwerty123',
        roleId: adminRole.id
      },
      {
        email: 'partner@example.com',
        password: 'qwerty123',
        roleId: partnerRole.id
      },
      {
        email: 'user1@example.com',
        password: 'qwerty123',
        roleId: partnerRole.id
      },
      {
        email: 'user2@example.com',
        password: 'qwerty123',
        roleId: partnerRole.id
      }
    ]
  });
};

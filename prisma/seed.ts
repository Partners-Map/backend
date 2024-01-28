import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const role1 = await prisma.role.create({
        data: {
            title: 'админ'
        }
    })
    const role2 = await prisma.role.create({
        data: {
            title: 'партнер'
        }
    })
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});


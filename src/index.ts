import autoLoad from '@fastify/autoload';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import 'dotenv/config';
import Fastify from 'fastify';
import { join } from 'path';
import { version } from '../package.json';
import { loggerConfig } from './configs/logger';
import { PrismaClient } from '@prisma/client';

const fastify = Fastify({
  logger: loggerConfig[process.env.PROJECT_STATUS] ?? true
});
const prisma = new PrismaClient();

fastify.register(fastifySwagger, {
  swagger: {
    info: {
      title: 'Partners map',
      description: 'adadada',
      version
    }
  }
});

fastify.register(fastifySwaggerUi, {
  routePrefix: '/docs',
  staticCSP: true,
  transformStaticCSP: header => header
});

fastify.register(autoLoad, {
  dir: join(__dirname, 'plugins')
});

fastify.register(autoLoad, {
  dir: join(__dirname, 'routers'),
  options: {
    prefix: '/api/v1'
  }
});

fastify.listen(
  { port: Number(process.env.SERVER_PORT) || 3002 },
  async (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    const allUsers = await prisma.users.findMany();
    console.log(allUsers);
  }
);

import autoLoad from '@fastify/autoload';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import Fastify from 'fastify';
import { join } from 'path';
import { version } from '../package.json';
import { getSubdirectories } from './utils/subdirectories';

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifySwagger, {
  swagger: {
    info: {
      title: 'Partners map',
      description: 'adadada',
      version,
    },
  },
});

fastify.register(fastifySwaggerUi, {
  routePrefix: '/docs',
  staticCSP: true,
  transformStaticCSP: (header) => header,
});

fastify.register(autoLoad, {
  dir: join(__dirname, 'plugins'),
});

fastify.register(autoLoad, {
  dir: join(__dirname, 'routers'),
  options: {
    prefix: '/api/v1/',
  },
});

fastify.listen({ port: 3003 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

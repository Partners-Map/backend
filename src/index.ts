import autoLoad from '@fastify/autoload';
import Fastify from 'fastify';
import { join } from 'path';

const fastify = Fastify({
  logger: true,
});

fastify.register(autoLoad, {
  dir: join(__dirname, 'routers'),
  options: {
    prefix: '/api/v1/',
  },
});

fastify.register(autoLoad, {
  dir: join(__dirname, 'plugins'),
});

fastify.listen({ port: 3003, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

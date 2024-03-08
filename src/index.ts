import autoLoad from '@fastify/autoload';
import { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts';
import 'dotenv/config';
import Fastify from 'fastify';
import { join } from 'path';
import { loggerConfig } from './configs/logger';

const fastify = Fastify({
  logger: loggerConfig[process.env.PROJECT_STATUS] ?? true
}).withTypeProvider<JsonSchemaToTsProvider>();

fastify.register(autoLoad, {
  dir: join(__dirname, 'plugins')
});

fastify.register(autoLoad, {
  dir: join(__dirname, 'routers'),
  options: {
    prefix: '/api/v1'
  }
});

fastify.setErrorHandler((error, request, res) => {
  fastify.log.error(error);
  res.status(500).send({ error: 'Internal Server Error' });
});

fastify.listen(
  {
    port: Number(process.env.SERVER_PORT) || 3002,
    host: process.env.PROJECT_STATUS === 'production' ? '0.0.0.0' : 'localhost'
  },
  async (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  }
);

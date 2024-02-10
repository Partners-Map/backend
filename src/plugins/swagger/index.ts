import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fp from 'fastify-plugin';
import { version } from '../../../package.json';

export default fp(async fastify => {
  fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Partners map',
        version
      }
    }
  });

  fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      deepLinking: true
    },
    staticCSP: true,
    transformStaticCSP: header => header
  });
});

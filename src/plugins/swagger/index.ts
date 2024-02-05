import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fp from 'fastify-plugin';
import { version } from '../../../package.json';

export default fp(async fastify => {
  fastify.register(fastifySwagger, {
    swagger: {
      info: {
        title: 'Partners map',
        version
      }
    }
  });

  fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    staticCSP: true,
    transformStaticCSP: header => header
  });
});

import cors from '@fastify/cors';
import fp from 'fastify-plugin';

export default fp(async fastify => {
  fastify.register(cors, {
    origin: process.env.FRONTEND_HOST,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Accept',
      'Origin',
      'X-HTTP-Method-Override',
      'X-CSRF-Token',
      'Accept-Language',
      'Accept-Encoding',
      'Access-Control-Request-Method',
      'Access-Control-Request-Headers',
    ]
  });
});

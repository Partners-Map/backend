import cors from '@fastify/cors';
import fp from 'fastify-plugin';
import { corsConfig } from '../../configs/cors';

export default fp(async fastify => {
  fastify.register(cors, {
    origin: corsConfig.origin,
    methods: corsConfig.methods
  });
});

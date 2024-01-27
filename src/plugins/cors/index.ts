import cors from '@fastify/cors';
import { FastifyInstance } from 'fastify';
import { corsConfig } from '../../configs/cors';

export default async function (fastify: FastifyInstance) {
  fastify.register(cors, {
    origin: corsConfig.origin,
    methods: corsConfig.methods,
  });
}

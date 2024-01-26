import cors from '@fastify/cors';
import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });
}

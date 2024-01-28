import { FastifyInstance } from 'fastify/types/instance';

export default async (fastify: FastifyInstance) => {
  // fastify.get('/', (req, rep) => {
  //   rep.header('Access-Control-Allow-Origin', '*');
  //   rep.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  //   rep.header('Access-Control-Allow-Headers', 'Content-Type');
  //   rep.code(204).send({ status: 'good' });
  // });
  fastify.route({
    method: 'OPTIONS',
    url: '/',
    schema: {
      response: {
        204: {
          description: 'OK',
          headers: {
            'Access-Control-Allow-Origin': {
              type: 'string'
            },
            'Access-Control-Allow-Methods': {
              type: 'string'
            },
            'Access-Control-Allow-Headers': {
              type: 'string'
            }
          },
          content: {
            'text/plain': {
              schema: {
                type: 'object',
                properties: {
                  status: { type: 'string' }
                }
              }
            }
          }
        }
      }
    },
    handler: (req, rep) => {
      rep.header('Access-Control-Allow-Origin', '*');
      rep.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      rep.header('Access-Control-Allow-Headers', 'Content-Type');
      fastify.log.warn('good');

      rep.code(204).send({ status: 'good' });
    }
  });
};

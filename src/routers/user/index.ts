import { FastifyInstance } from 'fastify/types/instance';
import { getUserById } from '../../controllers/users';

export default async (fastify: FastifyInstance) => {
  fastify.get<{ Params: { id: string } }>(
    '/:id',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' }
          },
          required: ['id']
        }
      }
    },
    async (req, rep) => {
      const { id: userId } = req.params;
      if (!userId) {
        fastify.log.warn(req.params);
      }
      rep.code(200).send(await getUserById(fastify, userId));
    }
  );
  // fastify.route({
  //   method: 'GET',
  //   url: '/:id',
  //   schema: {
  //     params: {
  //       type: 'object',
  //       properties: {
  //         id: {
  //           type: 'string',
  //           description: 'user id'
  //         }
  //       }
  //     }
  //   },
  //   handler(request, reply) {
  //     reply.send('1231231');
  //   }
  // });
};

import { FastifyInstance } from 'fastify';
import AuthService from '../../services/auth';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.post<{
    Body: {
      email: '';
      password: '';
    };
  }>(
    '/',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            email: {
              type: 'string'
            },
            password: {
              type: 'string'
            }
          }
        },
        tags: ['auth']
      }
    },
    async (req, res) => {
      const lognResult = await AuthService.login(req.body, fastify);

      if (!lognResult.status) {
        res.code(401).send({ error: lognResult.message });
        return;
      }

      const newAccessToken = await AuthService.generateAccessToken(lognResult.user, fastify);
      res.code(200).send({ accessToken: newAccessToken });
    }
  );
};

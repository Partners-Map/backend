import { FastifyInstance } from 'fastify';
import 'dotenv/config';
import AuthService from '../../services/auth';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.post<{
    Body: {
      email: '';
      password: '';
    };
  }>(
    '/login',
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
      const loginResult = await AuthService.checkUser(req.body, fastify);

      if (!loginResult.status) {
        res.code(401).send({ error: 'неверный email или password' });
        return;
      }

      req.session.set('data', req.body);
      res.code(200).send({
        user: loginResult.user
      });
    }
  );
};

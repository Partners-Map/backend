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
      const lognResult = await AuthService.checkUser(req.body, fastify);

      if (!lognResult.status) {
        res.code(401).send({ error: 'неверный email или password' });
        return;
      }

      const accessToken = await AuthService.generateAccessToken(lognResult.user, fastify);
      res
        .code(200)
        .setCookie('x-access-token', accessToken, {
          path: '/',
          secure: false,
          httpOnly: true,
          sameSite: 'lax'
        })
        .send({
          user: lognResult.user
        });
    }
  );
};

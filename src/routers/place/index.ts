import { Places } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import {
  createPlace,
  deletePlace,
  getPlaceById,
  updatePlace
} from '../../controllers/place';

export default async (fastify: FastifyInstance) => {
  fastify.get<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            id: {
              type: 'string'
            }
          },
          required: ['id']
        },
        tags: ['place']
      }
    },
    async (req, res) => {
      const { id: placeId } = req.params;
      res.code(200).send(await getPlaceById(fastify, placeId));
    }
  );
  fastify.post<{ Body: Omit<Places, 'id'> }>(
    '/',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            adress: {
              type: 'string'
            },
            latitude: {
              type: 'string'
            },
            longitude: {
              type: 'string'
            }
          },
          required: ['adress', 'latitude', 'longitude']
        },
        tags: ['place']
      }
    },
    async (req, res) => {
      const createdData = req.body;
      res.code(200).send(await createPlace(fastify, createdData));
    }
  );
  fastify.put<{
    Params: {
      id: string;
    };
    Body: Omit<Places, 'id'>;
  }>(
    '/:id',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            id: {
              type: 'string'
            }
          },
          required: ['id']
        },
        body: {
          type: 'object',
          properties: {
            adress: {
              type: 'string'
            },
            latitude: {
              type: 'string'
            },
            longitude: {
              type: 'string'
            }
          },
          required: ['adress', 'latitude', 'longitude']
        },
        tags: ['place']
      }
    },
    async (req, res) => {
      const { id: placeId } = req.params;
      const createdData = req.body;
      res.code(200).send(await updatePlace(fastify, placeId, createdData));
    }
  );
  fastify.delete<{
    Params: {
      id: string;
    };
  }>(
    '/:id',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            id: {
              type: 'string'
            }
          },
          required: ['id']
        },
        tags: ['place']
      }
    },
    async (req, rep) => {
      const { id: placeId } = req.params;
      fastify.log.warn(placeId);
      rep.code(200).send(await deletePlace(fastify, placeId));
    }
  );
};

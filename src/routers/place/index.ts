import { Place } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import {
  createPlace,
  deletePlace,
  getPlaceById,
  getPlaceByIdWithAddress,
  updatePlace
} from '../../services/place';

export default async (fastify: FastifyInstance): Promise<void> => {
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
  fastify.get<{
    Params: {
      id: string;
    };
  }>(
    '/withAddress/:id',
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
      res.code(200).send(await getPlaceByIdWithAddress(fastify, placeId));
    }
  );
  fastify.post<{ Body: Omit<Place, 'id'> }>(
    '/',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            },
            description: {
              type: 'string'
            },
            conditions: {
              type: 'string'
            },
            partnerId: {
              type: 'string'
            }
          },
          required: ['name', 'description', 'conditions', 'partnerId']
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
    Body: Omit<Place, 'id'>;
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
            name: {
              type: 'string'
            },
            description: {
              type: 'string'
            },
            conditions: {
              type: 'string'
            },
            partnerId: {
              type: 'string'
            }
          },
          required: ['name', 'description', 'conditions', 'partnerId']
        },
        tags: ['place']
      }
    },
    async (req, res) => {
      const { id: placeId } = req.params;
      const updatedData = req.body;
      res.code(200).send(await updatePlace(fastify, placeId, updatedData));
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

      rep.code(200).send(await deletePlace(fastify, placeId));
    }
  );
};

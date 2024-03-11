export const addressParamsIdRequestShema = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      }
    },
    required: ['id']
  },
  tags: ['address']
};

export const addressBodyRequestShema = {
  body: {
    type: 'object',
    properties: {
      city: {
        type: 'string'
      },
      street: {
        type: 'string'
      },
      house: {
        type: 'string'
      },
      latitude: {
        type: 'number'
      },
      longitude: {
        type: 'number'
      },
      placeId: {
        type: 'string'
      }
    },
    required: ['*']
  },
  tags: ['address']
};

export const avgPriceParamsIdRequestShema = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      }
    },
    required: ['id']
  },
  tags: ['avg-price']
};

export const avgPriceBodyRequestShema = {
  body: {
    type: 'object',
    properties: {
      symbol: {
        type: 'number'
      },
      slug: {
        type: 'string'
      }
    },
    required: ['*']
  },
  tags: ['avg-price']
};

export const discountParamsIdRequestShema = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      }
    },
    required: ['id']
  },
  tags: ['discount']
};

export const discountBodyRequestShema = {
  body: {
    type: 'object',
    properties: {
      conditions: {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      amount: {
        type: 'number'
      },
      information: {
        type: 'string'
      },
      discountTypeId: {
        type: 'string'
      }
    },
    required: ['*']
  },
  tags: ['discount']
};

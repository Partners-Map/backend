export const placeParamsIdRequestShema = {
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
};

export const placeBodyRequestShema = {
  body: {
    type: 'object',
    properties: {
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      avgReceipt: {
        type: 'number'
      },
      kitchen: {
        type: 'string'
      },
      partnerId: {
        type: 'string'
      },
      discountId: {
        type: 'string'
      }
    },
    required: ['title', 'description', 'partnerId', 'discountId']
  },
  tags: ['place']
};

export const newPlaceBodyRequestShema = {
  body: {
    type: 'object',
    properties: {
      partnerId: {
        type: 'string'
      },
      categoryId: {
        type: 'string'
      },
      place: {
        type: 'object',
        properties: {}
      },
      discount: {
        type: 'object',
        properties: {}
      },
      addresses: {
        type: 'array',
        items: {
          type: 'object',
          properties: {}
        }
      }
    }
  },
  tags: ['place']
};

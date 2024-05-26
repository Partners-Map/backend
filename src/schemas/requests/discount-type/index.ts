export const discountTypeParamsIdRequestShema = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      }
    },
    required: ['id']
  },
  tags: ['discount-type']
};

export const discountTypeBodyRequestShema = {
  body: {
    type: 'object',
    properties: {
      title: {
        type: 'string'
      }
    },
    required: ['title']
  },
  tags: ['discount-type']
};

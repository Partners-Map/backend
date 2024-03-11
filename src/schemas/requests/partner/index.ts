export const partnerParamsIdRequestShema = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      }
    },
    required: ['id']
  },
  tags: ['partner']
};

export const partnerBodyRequestShema = {
  body: {
    type: 'object',
    properties: {
      name: {
        type: 'string'
      }
    },
    required: ['*']
  },
  tags: ['partner']
};

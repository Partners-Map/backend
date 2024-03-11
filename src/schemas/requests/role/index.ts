export const roleParamsIdRequestShema = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      }
    },
    required: ['id']
  },
  tags: ['role']
};

export const roleBodyRequestShema = {
  body: {
    type: 'object',
    properties: {
      title: {
        type: 'string'
      }
    },
    required: ['title']
  },
  tags: ['role']
};

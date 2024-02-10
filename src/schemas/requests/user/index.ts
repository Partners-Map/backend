export const getUserByIdRequestShema = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      }
    },
    required: ['id']
  },
  tags: ['user']
};

export const createUserRequestSchema = {
  body: {
    type: 'object',
    properties: {
      email: {
        type: 'string'
      },
      password: {
        type: 'string'
      },
      roleId: {
        type: 'string'
      }
    },
    required: ['email', 'password', 'roleId']
  },
  tags: ['user']
};

export const updateUserRequestSchema = {
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
      email: {
        type: 'string'
      },
      password: {
        type: 'string'
      },
      roleId: {
        type: 'string'
      }
    },
    required: ['email', 'password', 'roleId']
  },
  tags: ['user']
};

export const deleteUserByIdRequestSchema = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      }
    },
    required: ['id']
  },
  tags: ['user']
};

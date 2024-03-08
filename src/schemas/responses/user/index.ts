const userFields = {
  id: {
    type: 'string'
  },
  email: {
    type: 'string'
  },
  password: {
    type: 'string'
  },
  roleId: {
    type: 'string'
  }
};

const responseUserData = {
  response: {
    200: {
      type: 'object',
      properties: userFields
    }
  }
};

export const getAllUsersResponseShema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: userFields
      }
    }
  }
};

export const getUserByIdResponseShema = responseUserData;

export const createUserResponseShema = responseUserData;

export const updateUserResponseShema = responseUserData;

export const deleteUserResponseShema = responseUserData;

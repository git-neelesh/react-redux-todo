import { CREATE_POLICY, DELETE_POLICY } from './actionTypes';

export const createPolicy = (name, amount, dateOfJoining) => {
  return {
    type: CREATE_POLICY,
    payload: {
      name: name,
      premium: amount,
      dateOfJoining: dateOfJoining
    }
  };
};

export const deletePolicy = name => {
  return {
    type: DELETE_POLICY,
    payload: {
      name: name
    }
  };
};

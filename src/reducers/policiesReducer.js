import { CREATE_POLICY, DELETE_POLICY } from '../actions/actionTypes';

const policiesReducer = (listOfPolicies = [], action) => {
  if (action.type === CREATE_POLICY) {
    return [...listOfPolicies, action.payload];
  } else if (action.type === DELETE_POLICY) {
    return listOfPolicies.filter(policy => policy.name !== action.payload.name);
  }

  return listOfPolicies;
};

export default policiesReducer;

import { CREATE_CLAIM } from '../actions/actionTypes';

const claimsHistoryReducer = (oldListOfClaims = [], action) => {
  if (action.type === CREATE_CLAIM) {
    return [...oldListOfClaims, action.payload];
  }

  return oldListOfClaims;
};

export default claimsHistoryReducer;

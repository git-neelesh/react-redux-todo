import { CREATE_CLAIM } from './actionTypes';

export const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: CREATE_CLAIM,
    payload: {
      name: name,
      amount: amountOfMoneyToCollect
    }
  };
};

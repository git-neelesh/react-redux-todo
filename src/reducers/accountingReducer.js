import { CREATE_CLAIM, CREATE_POLICY } from '../actions/actionTypes';

const accountingReducer = (bagOfMoney = 100, action) => {
  console.log("Accounting", action, bagOfMoney)
  if (action.type === CREATE_CLAIM) {
    bagOfMoney = bagOfMoney - action.payload.amount;
  } else if (action.type === CREATE_POLICY) {
    bagOfMoney = bagOfMoney + action.payload.premium;
  }
  console.log("bagOfMoney", bagOfMoney)
  return bagOfMoney;
};

export default accountingReducer;

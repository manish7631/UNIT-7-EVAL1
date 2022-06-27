import * as types from "./actionTypes";



const getShoesRequest = () => {
    return { type: types.GET_SHOES_REQUEST };
  };
  const getShoesSuccess = (payload) => {
    return { type: types.GET_SHOES_SUCCESS, payload };
  };
  const getShoesFailure = () => {
    return { type: types.GET_SHOES_FAILURE };
  };

  

const IncShoesCountRequest = () => {
  return { type: types.UPDATE_SHOE_COUNT_REQUEST };
};
const IncShoesCountSuccess = (payload) => {
  return { type: types.UPDATE_SHOE_COUNT_SUCCESS, payload };
};
const IncShoesCountFailure = () => {
  return { type: types.UPDATE_SHOE_COUNT_FAILURE };
};

const incrementCounter = (payload) => {
  return {
    type: types.INCREMENT_COUNTER,
    payload,
  };
};

const decrementCounter = (payload) => {
  return {
    type: types.DECREMENT_COUNTER,
    payload,
  };
};



 
  export {getShoesFailure, getShoesRequest, getShoesSuccess, IncShoesCountFailure, IncShoesCountRequest, IncShoesCountSuccess, incrementCounter, decrementCounter}
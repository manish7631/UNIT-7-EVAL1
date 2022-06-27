import * as types from "./actionTypes" 



const initialState = {
  counter: 0,
    shoes: [],
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch(type){
        case types.GET_SHOES_REQUEST:
        return {
            ...state,
            isLoading: true,
            isError: false,
          };

          case types.GET_SHOES_SUCCESS:
             
            return {
                ...state,
                shoes:payload,
                isLoading: false,
                isError: false,
              };

              case types.GET_SHOES_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                  };

                  case types.UPDATE_SHOE_COUNT_REQUEST:
      return {   ...state, isLoading: true, isError: false};
    case types.UPDATE_SHOE_COUNT_SUCCESS:
      return {
        ...state,
        shoes:payload,
        isLoading: false,
        isError: false,
      };

      
      case types.UPDATE_SHOE_COUNT_FAILURE:
        return {   ...state, isLoading: false, isError: true};

        case types.INCREMENT_COUNTER:
      return { ...state, counter: state.counter + payload };
    case types.DECREMENT_COUNTER:
      return { ...state, counter: state.counter - payload };

          default:
        return state;
    }
    
  };
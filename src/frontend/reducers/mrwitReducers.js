import {  
    GET_CONSULTANTS_REQUEST,  
    GET_CONSULTANTS_SUCCESS,  
    GET_CONSULTANTS_FAILURE  
  } from '../actions/types'
  
  
  const INITIAL_STATE = {
    isLoading: false,
    consultants: [],
  };
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {    
      case GET_CONSULTANTS_REQUEST: 
        return {
          ...state,
          isLoading: true
        };
        case GET_CONSULTANTS_SUCCESS:
          console.log('success')
          return {
            ...state,
            isLoading: false,
            consultants: action.payload,
            error: '',
          };
        case GET_CONSULTANTS_FAILURE:
          return {
            ...state,
            isLoading: false,
            consultants: [],
            error: action.payload
          };
      
      
      default:
        return state;
    }
  }
  
  export default reducer;
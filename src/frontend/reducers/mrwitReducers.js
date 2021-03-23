import {
  GET_CONSULTANTS_REQUEST,
  GET_CONSULTANTS_SUCCESS,
  GET_CONSULTANTS_FAILURE,
  GET_CONSULTANT_REQUEST,
  GET_CONSULTANT_SUCCESS,
  GET_CONSULTANT_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  consultants: [],
  consultant: [],
  error: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CONSULTANTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case GET_CONSULTANTS_SUCCESS:
      console.log('success');
      console.log('Payload de consultants success ', action.payload);
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
        error: action.payload,
      };
    case GET_CONSULTANT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case GET_CONSULTANT_SUCCESS:
      console.log('success');
      return {
        ...state,
        isLoading: false,
        consultant: action.payload,
        error: '',
      };
    case GET_CONSULTANT_FAILURE:
      return {
        ...state,
        isLoading: false,
        consultant: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

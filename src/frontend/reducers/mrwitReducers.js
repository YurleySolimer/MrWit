import {
  GET_CONSULTANTS_REQUEST,
  GET_CONSULTANTS_SUCCESS,
  GET_CONSULTANTS_FAILURE,
  GET_CONSULTANT_REQUEST,
  GET_CONSULTANT_SUCCESS,
  GET_CONSULTANT_FAILURE,
  CLEAR_SEARCH,
  REDIRECT,
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  search: {
    busqueda: '',
    consultores: [],
    proffession: '',
    sector: '',
    especialidad: '',
  },
  consultant: [],
  error: '',
  redirectTo: '',
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
      return {
        ...state,
        isLoading: false,
        search: action.payload,
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
    case CLEAR_SEARCH:
      return {
        ...state,
        isLoading: false,
        search: {
          busqueda: '',
          consultores: [],
          proffession: '',
          sector: '',
          especialidad: '',
        },
        consultant: [],
        error: '',
        redirectTo: '',
      };
    case REDIRECT:
      return {
        ...state,
        redirectTo: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

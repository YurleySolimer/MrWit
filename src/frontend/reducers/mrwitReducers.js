import {
  GET_CONSULTANTS_REQUEST,
  GET_CONSULTANTS_SUCCESS,
  GET_CONSULTANTS_FAILURE,
  GET_CONSULTANT_REQUEST,
  GET_CONSULTANT_SUCCESS,
  GET_CONSULTANT_FAILURE,
  SET_NEW_USER_REQUEST,
  SET_NEW_USER_SUCCESS,
  SET_NEW_USER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
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
    case SET_NEW_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case SET_NEW_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
      };
    case SET_NEW_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
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

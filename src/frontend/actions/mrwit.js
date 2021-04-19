import axios from 'axios';
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
  CLEAR_SEARCH,
  REDIRECT,
} from './types';

//Obtener consultores buscados

export const redirect = (link) => {
  return {
    type: REDIRECT,
    payload: link,
  };
};


export const setNewUserRequest = () => {
  return {
    type: SET_NEW_USER_REQUEST,
  };
};

export const setNewUserSuccess = () => {
  return {
    type: SET_NEW_USER_SUCCESS,
  };
};

export const setNewUserFailure = (error) => {
  return {
    type: SET_NEW_USER_FAILURE,
    payload: error,
  };
};

export const setNewUser = (arr) => {
  return (dispatch) => {
    dispatch(setNewUserRequest());
    try {
      axios.post(`${axios.defaults.baseURL}/signup`, arr[0], arr[1])
        .then((res) => {
          arr[3](res.data);
          dispatch(setNewUserSuccess());
          dispatch(redirect(arr[2]));
        });
    } catch (error) {
      dispatch(setNewUserFailure(error.message));
    }
  };
};

export const getConsultantsRequest = () => {
  return {
    type: GET_CONSULTANTS_REQUEST,
  };
};

export const getConsultantsSuccess = (consultants) => {
  return {
    type: GET_CONSULTANTS_SUCCESS,
    payload: consultants,
  };
};

export const getConsultantsFailure = (error) => {
  return {
    type: GET_CONSULTANTS_FAILURE,
    payload: error,
  };
};

export const getConsultants = (arr) => {
  return (dispatch) => {
    dispatch(getConsultantsRequest());
    try {
      axios.post(`${axios.defaults.baseURL}/busqueda`, arr[0])
        .then((response) => {
          const consultants = response.data;
          dispatch(getConsultantsSuccess(consultants));
          dispatch(redirect(arr[1]));
        })
        .catch((error) => {
          console.log('error');
          dispatch(getConsultantsFailure(error.message));
        });
    } catch (err) {
      dispatch(getConsultantsFailure(err.message));
    }
  };
};

//Obtener un consultor -> Perfil del consultor

export const getConsultantRequest = () => {
  return {
    type: GET_CONSULTANT_REQUEST,
  };
};

export const getConsultantSuccess = (consultant) => {
  console.log('entre en getConsultantSuccess')
  return {
    type: GET_CONSULTANT_SUCCESS,
    payload: consultant,
  };
};

export const getConsultantFailure = (error) => {
  console.log('entre en getConsultantFailure')
  return {
    type: GET_CONSULTANT_FAILURE,
    payload: error,
  };
};

export const getConsultant = (id) => {
  return (dispatch) => {
    dispatch(getConsultantRequest());
    console.log('estoy en el dispatch de getConsultant');
    axios.get(`${axios.defaults.baseURL}/consultor/${id}`)
      .then((response) => {
        const consultant = response.data;
        console.log(response);
        console.log('Se consiguieron los consultores');
        dispatch(getConsultantSuccess(consultant));
      })
      .catch((error) => {
        console.log('error');

        dispatch(getConsultantFailure(error.message));
      });
  };
};

//Wallet

export const getWalletRequest = () => {
  return {
    type: GET_WALLET_REQUEST,
  };
};

export const getWalletSuccess = (client) => {
  return {
    type: GET_WALLET_SUCCESS,
    payload: client,
  };
};

export const getWalletFailure = (error) => {
  return {
    type: GET_WALLET_FAILURE,
    payload: error,
  };
};

export const getWallet = () => {
  return (dispatch) => {
    dispatch(getWalletRequest());
    axios.get(`${axios.defaults.baseURL}/user/client/:id/wallet`)
      .then((response) => {
        const client = response.data;
        dispatch(getWalletSuccess(client));
      })
      .catch((error) => {
        console.log('error');

        dispatch(getWalletFailure(error.message));
      });
  };
};

//Historial

export const getHistoryRequest = () => {
  return {
    type: GET_HISTORY_REQUEST,
  };
};

export const getHistorySuccess = (client) => {
  return {
    type: GET_HISTORY_SUCCESS,
    payload: client,
  };
};

export const getHistoryFailure = (error) => {
  return {
    type: GET_HISTORY_FAILURE,
    payload: error,
  };
};

export const getHistory = () => {
  return (dispatch) => {
    dispatch(getHistoryRequest());
    axios.get(`${axios.defaults.baseURL}/user/client/:id/history`)
      .then((response) => {
        const client = response.data;
        dispatch(getHistorySuccess(client));
      })
      .catch((error) => {
        console.log('error');

        dispatch(getHistoryFailure(error.message));
      });
  };
};

//Agenda

export const getAgendaRequest = () => {
  return {
    type: GET_AGENDA_REQUEST,
  };
};

export const getAgendaSuccess = (client) => {
  return {
    type: GET_AGENDA_SUCCESS,
    payload: client,
  };
};

export const getAgendaFailure = (error) => {
  return {
    type: GET_AGENDA_FAILURE,
    payload: error,
  };
};

export const getAgenda = () => {
  return (dispatch) => {
    dispatch(getAgendaRequest());
    axios.get(`${axios.defaults.baseURL}/user/client/:id/agenda`)
      .then((response) => {
        const client = response.data;
        dispatch(getAgendaSuccess(client));
      })
      .catch((error) => {
        console.log('error');

        dispatch(getAgendaFailure(error.message));
      });
  };
};

// Clearing

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
  };
};

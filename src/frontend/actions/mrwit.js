import axios from 'axios';
import {  
  GET_CONSULTANTS_REQUEST,  
  GET_CONSULTANTS_SUCCESS,  
  GET_CONSULTANTS_FAILURE  
} from './types'


//Obtener consultores buscados
export const getConsultants = () => {
  return(dispatch) => {
    dispatch(getConsultantsRequest());
    axios.get('http://localhost:3000/resultados')
    .then(response => {
      const consultants = response.data
      dispatch(getConsultantsSuccess(consultants))
    })
    .catch (error => {
      console.log("error")

      dispatch(getConsultantsFailure(error.message))
    })
  }
}



export const getConsultantsRequest = () => {
  return {
    type: GET_CONSULTANTS_REQUEST
  }
}

export const getConsultantsSuccess = consultants => {
  return {
    type: GET_CONSULTANTS_SUCCESS,
    payload: consultants
  }
}

export const getConsultantsFailure = error => {
  return {
    type: GET_CONSULTANTS_FAILURE,
    payload: error
  }
}


//Obtener un consultor -> Perfil del consultor
export const getConsultant = () => {
    return(dispatch) => {
      dispatch(getConsultantRequest());
      axios.get('http://localhost:3000/consultor/:id')
      .then(response => {
        const consultant = response.data
        dispatch(getConsultantSuccess(consultant))
      })
      .catch (error => {
        console.log("error")
  
        dispatch(getConsultantFailure(error.message))
      })
    }
  }

  export const getConsultantRequest = () => {
    return {
      type: GET_CONSULTANT_REQUEST
    }
  }
  
  export const getConsultantSuccess = consultant => {
    return {
      type: GET_CONSULTANT_SUCCESS,
      payload: consultant
    }
  }
  
  export const getConsultantFailure = error => {
    return {
      type: GET_CONSULTANT_FAILURE,
      payload: error
    }
  }


//Wallet
export const getWallet = () => {
  return(dispatch) => {
    dispatch(getWalletRequest());
    axios.get('http://localhost:3000/user/client/:id/wallet')
    .then(response => {
      const client = response.data
      dispatch(getWalletSuccess(client))
    })
    .catch (error => {
      console.log("error")

      dispatch(getWalletFailure(error.message))
    })
  }
}

export const getWalletRequest = () => {
  return {
    type: GET_WALLET_REQUEST
  }
}

export const getWalletSuccess = client => {
  return {
    type: GET_WALLET_SUCCESS,
    payload: client
  }
}

export const getWalletFailure = error => {
  return {
    type: GET_WALLET_FAILURE,
    payload: error
  }
}


//Historial
export const getHistory = () => {
  return(dispatch) => {
    dispatch(getHistoryRequest());
    axios.get('http://localhost:3000/user/client/:id/history')
    .then(response => {
      const client = response.data
      dispatch(getHistorySuccess(client))
    })
    .catch (error => {
      console.log("error")

      dispatch(getHistoryFailure(error.message))
    })
  }
}

export const getHistoryRequest = () => {
  return {
    type: GET_HISTORY_REQUEST
  }
}

export const getHistorySuccess = client => {
  return {
    type: GET_HISTORY_SUCCESS,
    payload: client
  }
}

export const getHistoryFailure = error => {
  return {
    type: GET_HISTORY_FAILURE,
    payload: error
  }
}


//Agenda
export const getAgenda = () => {
  return(dispatch) => {
    dispatch(getAgendaRequest());
    axios.get('http://localhost:3000/user/client/:id/agenda')
    .then(response => {
      const client = response.data
      dispatch(getAgendaSuccess(client))
    })
    .catch (error => {
      console.log("error")

      dispatch(getAgendaFailure(error.message))
    })
  }
}

export const getAgendaRequest = () => {
  return {
    type: GET_AGENDA_REQUEST
  }
}

export const getAgendaSuccess = client => {
  return {
    type: GET_AGENDA_SUCCESS,
    payload: client
  }
}

export const getAgendaFailure = error => {
  return {
    type: GET_AGENDA_FAILURE,
    payload: error
  }
}
  
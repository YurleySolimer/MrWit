// eslint-disable-next-line import/prefer-default-export
export const setIsCall = (value) => (dispatch) => {
  dispatch({
    type: 'SET_CALL',
    payload: value,
  });
};
export const getCall = (value) => (dispatch) => {
  dispatch({
    type: 'GET_CALL',
    payload: value,
  });
};
export const setUser = (value) => (dispatch) => {
  dispatch({
    type: 'SET_USER',
    payload: value,
  });
};

export const setCurrency = (value) => (dispatch) => {
  dispatch({
    type: 'SET_CURRENCY',
    payload: value,
  });
};

export const setHeader = (value) => (dispatch) => {
  dispatch({
    type: 'SET_HEADER',
    payload: value,
  });
};

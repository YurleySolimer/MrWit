// eslint-disable-next-line import/prefer-default-export
export const setIsOnline = (value) => (dispatch) => {
  dispatch({
    type: 'SET_IS_ONLINE',
    payload: !value,
  });
};

export const setIsCall = (value) => (dispatch) => {
  dispatch({
    type: 'SET_CALL',
    payload: !value,
  });
};

export const setIsSearch = (value) => (dispatch) => {
  dispatch({
    type: 'SET_SEARCH',
    payload: !value,
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

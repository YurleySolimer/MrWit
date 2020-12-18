const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
      };
    case 'SIGNUP_REQUEST':
      return {
        ...state,
      };
    default:
      return state;
  };
};

export default reducer;

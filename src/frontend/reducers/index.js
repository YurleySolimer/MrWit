const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_TYPE':
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
    case 'LOGOUT_REQUEST':
    case 'GET_CONSULTANT':
    default:
      return state;
  }
};

export default reducer;

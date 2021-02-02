const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_IS_ONLINE':
      return {
        ...state,
        isOnline: [...state.user, action.payload],
      };
    case 'SET_USER':
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

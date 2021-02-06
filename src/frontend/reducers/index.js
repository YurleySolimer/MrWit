const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_IS_ONLINE':
      return {
        ...state,
        isOnline: [...state.isOnline, action.payload],
      };
    case 'SET_USER':
      if (action.payload === 'client') {
        return {
          ...state,
          user: 'client',
        };
      }
      if (action.payload === 'consultant') {
        return {
          ...state,
          user: 'consultant',
        };
      }
    case 'SET_SEARCH':
      return {
        ...state,
        isSearch: [...state.isSearch, action.payload],
      };
    case 'SET_CALL':
      return {
        ...state,
        isCall: [...state.isCall, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;

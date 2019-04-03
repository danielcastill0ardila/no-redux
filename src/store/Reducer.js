export function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, players: action.payload };
    case 'ADD_PLAYER':
      return {
        ...state,
        favplayers: state.favplayers.concat(action.payload)
      };
    case 'REMOVE_PLAYER':
      return {
        ...state,
        favplayers: action.payload
      };
    default:
      return state;
  }
}

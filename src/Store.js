import React from 'react';

export const Store = React.createContext();

const initialState = {
  players: [],
  favplayers: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, players: action.payload };
    case 'ADD_PLAYER':
      return {
        ...state,
        favplayers: state.favplayers.concat(action.payload)
      };
    case 'REMOVE_PLAYER':
      console.log('entre');
      return {
        ...state,
        favplayers: action.payload
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

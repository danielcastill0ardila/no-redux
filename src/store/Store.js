import React, { useReducer } from 'react';
import { reducer } from './Reducer';
export const Store = React.createContext();

const initialState = {
  videos: []
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

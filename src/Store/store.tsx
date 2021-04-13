import React, { createContext, useContext, useReducer, Dispatch}  from "react";
import { IAction, IState } from '../Interface/Interface';
import { combineReducers, getInitialState } from './Helpers';
import reducers from './Reducers';

const initialState = getInitialState(reducers);

const store = createContext<{state: {
  products: IState
}, dispatch: Dispatch<IAction>}>(initialState);

export const StoreProvider = (props: any): JSX.Element => {
    const [state, dispatch] = useReducer(combineReducers(reducers), initialState)
    return (
    <>
      <store.Provider value={{state, dispatch}}>
      {props.children}
      </store.Provider>
      </>
    )
}

export const useStore = () => {
    const { state, dispatch } = useContext<{state: {
      products: IState
    }, dispatch: Dispatch<IAction>}>(store);
    return { state, dispatch };
  };




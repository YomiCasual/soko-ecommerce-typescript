import { IAction } from '../Interface/Interface';

export function getInitialState(reducers: any) {
    const reducersCombined: any = {};
    for (let key in reducers) {
      reducersCombined[key] = reducers[key](undefined, {});
    }
    return reducersCombined;
  }
  
  export function combineReducers(reducers: any) {
    return (state:any = {}, action: IAction) => {
      const newState: any = {};
      for (let key in reducers) {
        newState[key] = reducers[key](state[key], action);
      }
      return newState;
    }
  }
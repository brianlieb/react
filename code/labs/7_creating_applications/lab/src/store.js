import { createStore } from 'redux';

//export const DELETE = 'delete';

export const airports = [];
export const UPDATE = 'update';


export const reducers = function(state, action) {
  switch(action.type) {
    case UPDATE:
    return {airports: [...state.airports.filter(a => action.airports.every(b => b.code !== a.code)), ...action.airports]};
    default:
    return state;
  }
}

export function createUpdate(airports) {
  return { type: UPDATE, airports };
}

export function createAirportStore() {
  return createStore(reducers, {airports: []});
}
import { createStore } from 'redux';

const REFRESH = "refresh";

const reducers = function(tasks, action) {
  switch(action.type) {
    case REFRESH:
      return action.tasks;
      
    default:
      return tasks;
  }
}

export default createStore(reducers, []);

export function createRefresh(tasks) {
  return { type: REFRESH, tasks };
}
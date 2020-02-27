import { createStore } from 'redux';
import Worker from './worker';

const workers = [
  new Worker(1,'Brian', 'Lieb', true),
  new Worker(2,'Sally', 'Jones', true),
  new Worker(3, 'Jordan', 'Watson', false),
];

const TOGGLE_FULLTIME = "toggle full time";
const ADD_WORKER = 'add worker';

const reducers = function(workers, action) {
  switch(action.type) {
    case TOGGLE_FULLTIME:
      return workers.map(worker =>
        worker.id !== action.worker.id
          ? worker
          : Object.assign(new Worker(), worker, { fulltime: !worker.fulltime }));
    case ADD_WORKER:
      return [...workers, action.worker];
    default:
      return workers;
  }
}

export function createToggleTime(worker) {
  return { type: TOGGLE_FULLTIME, worker };
}

export function createAddWorker(worker) {
  return { type: ADD_WORKER, worker };
}


export default createStore(reducers, workers);
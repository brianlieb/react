import { createStore } from 'redux';
import Task from './task';

const TOGGLE_COMPLETED = "toggle completed";
const ADD_TASK = "add a task";

const tasks = [
  new Task(1, "start project", true),
  new Task(2, "write test!!", false),
  new Task(3, "write minimum code", false),
];

const reducers = function(tasks, action) {
  switch(action.type) {
    case TOGGLE_COMPLETED:
      return tasks.map(task => task.id !== action.id ? task :
        Object.assign(new Task(), task, { completed: !task.completed }));
    case ADD_TASK:
      return [...tasks, new Task(tasks.length + 1, action.name, false)];
    default:
      return tasks;
  }
}

export function createToggleCompleted(id) {
  return { type: TOGGLE_COMPLETED, id };
}

export function createAddTask(name) {
  return { type: ADD_TASK, name };
}

export default createStore(reducers, tasks);
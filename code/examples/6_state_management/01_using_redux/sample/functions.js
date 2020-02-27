const TOGGLE_COMPLETED = 'toggle completed';
const DELETE_TASK = 'destroy from the face of earth';
const ADD_TASK = 'Add a task, please';
const TASKS = 'LOCAL_STORAGE_TASKS';

function createToggleCompleted(id) {
  return { type: TOGGLE_COMPLETED, id };
}

function createDeleteTask(id) {
  return { type: DELETE_TASK, id };
}

function createAddTask(name) {
  return { type: ADD_TASK, name };
}

const reducers = function(tasks, action) {
  switch(action.type) {
    case TOGGLE_COMPLETED:
      return tasks.map(task => task.id !== action.id ? task :
        {...task, completed: !task.completed });
    case DELETE_TASK:
      return tasks.filter(task => task.id !== action.id);
    case ADD_TASK:
      return [...tasks, {id: tasks.length + 1, name: action.name, completed: false }];
    default:
      return tasks;
  }
}

let tasks = [
  {id: 1, name: 'Task 1', completed: true },
  {id: 2, name: 'Task 2', completed: false },
  {id: 3, name: 'Task 3', completed: false },
];

const storedTasks = localStorage.getItem(TASKS);

if(storedTasks) {
  tasks = JSON.parse(storedTasks);
}

const store = Redux.createStore(reducers, tasks);

function toggleCompleted(taskId) {
  store.dispatch(createToggleCompleted(taskId));
}

function deleteTask(taskId) {
  store.dispatch(createDeleteTask(taskId));
}

function addTask(name) {
  store.dispatch(createAddTask(name));
}

function displayTasks() {
  const tasks = store.getState();
  
  const li = tasks.map(task => `<li>${task.name} 
    <input type="checkbox" ${ task.completed ? 'checked' : '' }
    onChange="toggleCompleted(${task.id})" />
    <button onClick="deleteTask(${task.id})">&#x1f5d1;</button></li>`).join('');
  
  const addtask = `<div>
    <input type="text" placeholder="name" id="newtask"></input>
    <button onClick="addTask(document.getElementById('newtask').value)">Create</button>
  </div>`;
  
  const ul = `${addtask}<ul> ${li}</ul>`; 
  
  const contents = `<div>
    <button onClick="disableStorage()">disable store</button>
    Number of completed tasks: ${tasks.filter(task => task.completed).length}
    ${ul}
  </div>`;
  
  document.getElementById('contents').innerHTML = contents;
}

store.subscribe(() => displayTasks());
const updateStorageUnsubcribe = store.subscribe(() => updateLocalStore());

function updateLocalStore() {
  localStorage.setItem(TASKS, JSON.stringify(store.getState()));
}

function disableStorage() {
  updateStorageUnsubcribe();
}
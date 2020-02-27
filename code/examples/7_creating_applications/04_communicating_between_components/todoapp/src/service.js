import 'whatwg-fetch';

export default class Service {
  static getTasks() {
    return fetch('/todo')
      .then(Service.checkResponse)
      .then(response => response.json());
  }
  
  static addTask(taskName) {
    return fetch('/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: taskName })
    })
    .then(Service.checkResponse)
    .then(response => response.text());
  }
  
  static toggleCompleted(taskId) {
    return fetch(`/todo/changestatus/${taskId}`, { 
        method: 'POST',
      })
      .then(Service.checkResponse) 
      .then(response => response.text());
  }
  
  static checkResponse(response) {
    if(!response.ok) {
      throw new Error(`Error getting response: ${response.status}`);
    }
    
    return response;
  }
}
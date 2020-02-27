import 'whatwg-fetch';

export default class Service {
  static getTasks() {
    return fetch('/todo')
      .then(Service.checkResponse)
      .then(response => response.json());
  }
  
  static checkResponse(response) {
    if(!response.ok) {
      throw new Error(`Error getting response: ${response.status}`);
    }
    
    return response;
  }
}
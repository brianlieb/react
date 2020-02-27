import 'whatwg-fetch';

export default class Service {
  static add(code) {
    return fetch('/airport',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({code: code})
      })
      .then(response => response.text());
  }

  static get() {
    return fetch('/airport')
      .then(response => response.json());
  }
 }
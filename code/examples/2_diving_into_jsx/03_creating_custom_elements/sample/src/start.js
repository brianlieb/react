import { createElement } from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(createElement(App, null, null),
  document.getElementById('contents'));
  
//ReactDOM.render(what, where);

//ReactDOM.render(virtualDom, realDom);
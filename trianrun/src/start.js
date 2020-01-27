import { createElement } from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
  createElement('div', null, 'Welcome to React'),
  document.getElementById('contents'));

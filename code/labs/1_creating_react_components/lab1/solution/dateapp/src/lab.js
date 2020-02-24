import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(`Today is ${new Date().toDateString()}`,
  document.getElementById('contents'));
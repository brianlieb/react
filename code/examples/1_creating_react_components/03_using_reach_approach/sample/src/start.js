import React, { createElement } from 'react';
//React is a default export from react so put it outside {}
//createElement is a normal export so put it inside {}

import ReactDOM from 'react-dom';

const MAX = 10000;
const cachedData = [];

function load() {
  for(let i = 0; i < MAX; i++) {
    cachedData.push(i);
  }
  
  updateView();
}

function updateView() {
  const lines = cachedData.map((line, index) =>
    createElement('li', {key: index }, line));
    
  const ul = createElement('ul', null, lines);
  //(virutual DOM element, properties/attributes, children)
  
  ReactDOM.render(ul, document.getElementById('contents'));
  
  //how.render(what, where);
}

function change() {
  cachedData[5] *= 10;
  
  updateView();
}

window.load = load;
window.change = change;

//take a look at the elements in the Chrome inspector and notice
//only the elements that is changed is redrawn.

//Much like the easy and simple approach
//But gives the performance of the hard approach (almost)

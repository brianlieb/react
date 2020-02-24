const MAX = 10000;

function load() {
  const cachedData = [];

  for(let i = 0; i < MAX; i++) {
    cachedData.push(i);
  }
  
  const li = cachedData.map(line => `<li>${line}</li>`).join('')
  const ul = `<ul>${li}</ul>`;
  
  const contents = document.getElementById('contents');
  contents.innerHTML = ul;
}

function change() {
  const element = document.getElementById('contents')
    .firstChild.children[5].firstChild;
    
  const value = parseInt(  document.getElementById('contents')
      .firstChild.children[5].innerHTML) * 10;
  document.getElementById('contents').firstChild.children[5].innerHTML = value;
}

//open the elements inspector in Chrome and notice how this time
//only the value that got changed is updated.

//Good news: It is faster
//Bad news: Deal with a lot of DOM
//it is very brittle


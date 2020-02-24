const MAX = 10000;
const cachedData = [];

function load() {
  for(let i = 0; i < MAX; i++) {
    cachedData.push(i);
  }
  
  updateView();
}

function updateView() {
  const li = cachedData.map(line => `<li>${line}</li>`).join('')
  const ul = `<ul>${li}</ul>`;
  
  const contents = document.getElementById('contents');
  contents.innerHTML = ul;
}

function change() {
  cachedData[5] *= 10;
  updateView();
}


//The approach is simple and really easy
//Quick coding and we did not have to dive into too much DOM

//The code becomes progressively slow as more updates have to done
//We will be forced to address performance soon
const express = require('express');
const router = express.Router();

const tasks = [
 {id: 0, name: 'Create server side code', completed: true},
 {id: 1, name: 'Create a landing page', completed: false},
 {id: 2, name: 'Connect landing page to a route', completed: false},
 {id: 3, name: 'Fetch data from server', completed: false},
 {id: 4, name: 'Store data in redux', completed: false},
 {id: 5, name: 'Take User Input', completed: false},
 {id: 6, name: 'Post data', completed: false},
];

router.get('/', function(req, res, next) {
  res.send(tasks);
});

router.post('/', function(req, res, next) {
  const name = req.body.name;
  
  if(name) {
    tasks.push({id: tasks.length, name: name, completed: false});
    res.send('added task');
  } else {
    res.send('error adding task');
  }
});

router.post('/changestatus/:id', function(req, res, next) {
  const id = parseInt(req.params.id);

  const task = tasks.find(task => task.id === id);
                                                  
  if(task) {
    task.completed = !task.completed;
    res.send("status changed");
  } else {
    res.send("task not found");
  }
});


module.exports = router;

const express = require('express');
const router = express.Router();
const request = require('request-promise');

const airports = [
];            

function extractF(temperature) {                
  return parseFloat(temperature.split(' ')[0]);
}

function addCode(code) {
  return new Promise(function(resolve) {
    const airport = airports.find(_ => _.code === code);
    
    if(airport) {                 
      resolve(`Monitoring ${code}: ${airport.name}`);
    } else {
      return request({uri: `https://soa.smext.faa.gov/asws/api/airport/status/${code}`,
         headers: { 'accept': 'application/json' }})
        .then(response => JSON.parse(response))
        .then(response => ({code: code, name: response.Name, temperature: extractF(response.Weather.Temp[0]), delay: response.Delay}))
        .then(airport => airports.push(airport))
        .then(() => airports[airports.length - 1])
        .then(airport => resolve(`Monitoring ${code}: ${airport.name}`))
        .catch(() => resolve(`${code}: Error getting airport information`));
    }
  });
}

router.get('/', function(req, res) {
  res.send(
    airports.map(airport => ({ ...airport, delay: Math.random() > 0.5 })));
});                

router.post('/', function(req, res) {
  const request = req.body;
  
  if(request && request.code) {
    const code = request.code;
    
    addCode(code)
      .then(response => res.send(response));
  } else {
    res.send('invalid request');
  }
});                

module.exports = router;

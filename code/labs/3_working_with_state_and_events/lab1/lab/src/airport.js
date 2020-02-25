import  {Component} from 'react';

export default class Airport extends Component {


  constructor(code, name, temperature, delay) {
    super({code, name, temperature, delay});
    this.code = code;
    this.name = name;
    this.temperature = temperature;
    this.delay = delay;
  }





}
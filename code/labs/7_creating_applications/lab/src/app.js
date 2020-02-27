import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import DisplayStatus from './display-status';
import AddAirport from './add-airport';
import { createAirportStore, createUpdate } from './store';
import Service from './service';
import PropTypes from 'prop-types';

export default class App extends Component {
  constructor(props) {
    super(props);
    
  } 
  
  componentDidMount() {               
  }  
  
  componentWillUnmount() {
  }                    
  
  fetchAirportsStatus() {                       
  }
  
  render() {
    return <div>
      <BrowserRouter>
        <span>
          <nav>
            <NavLink to="/add">Add Airport</NavLink> | <NavLink to="/display">Display Status</NavLink>
          </nav>                                                                                      
          <hr />
          <div>
            <Route exact path="/" component={DisplayStatus} />
            <Route path="/add" component={AddAirport} />
            <Route path="/display" component={DisplayStatus} />
          </div>
        </span>
      </BrowserRouter>
    </div>;
  }
}
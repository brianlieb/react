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
    this.store = createAirportStore();
  } 
  
  componentDidMount() {
    setInterval(() => this.fetchAirportsStatus(), 1000);
    this.unsubscribe = this.store.subscribe(() => this.setState({}));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  fetchAirportsStatus() {
    Service.get()
      .then(airports => this.store.dispatch(createUpdate(airports)));
  }

  getChildContext() {
    return {store: this.store};
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

App.childContextTypes =  {store: PropTypes.object.isRequired};
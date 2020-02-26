import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Airport from './airport';

export default class DisplayAirportStatus extends Component {
  extractAndSortAirport(airports, delayed) {
    const byCode = (airport1, airport2) => airport1.code.localeCompare(airport2.code);
    
    return airports.filter(airport => airport.delay === delayed)
      .sort(byCode);
  }
  
  render() {
    
    const airports = this.extractAndSortAirport(this.props.data, this.props.delayed);      
    
    return <div>
      <table>
        <tr><th>Code</th><th>Name</th><th>Temperature</th></tr>
        {
          airports.map(airport => <tr key={ airport.code }><td>{ airport.code }</td><td>{ airport.name }</td><td>{ airport.temperature }</td></tr>)
        }
      </table>
    </div>;
  }
}

DisplayAirportStatus.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Airport)),
  delayed: PropTypes.bool,
};
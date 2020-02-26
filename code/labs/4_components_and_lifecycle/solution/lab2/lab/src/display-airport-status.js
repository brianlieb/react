import React, { Component } from 'react';

export default class DisplayAirportStatus extends Component {
  extractAndSortAirport(airports, delay) {
    return airports.filter(airport => airport.delay === delay)
      .sort(
        (airport1, airport2) => airport1.code.localeCompare(airport2.code));
  }
  
  render() {
    const airports =
      this.extractAndSortAirport(this.props.data, this.props.delayed);
    
    return <table>
      <tbody>
        {
          airports.map(airport =>
            <tr key={ airport.code }><td>{ airport.code }</td><td>{ airport.name }</td><td>{ airport.temperature }</td></tr>              
          )
        }
      </tbody>
    </table>;
  }
}
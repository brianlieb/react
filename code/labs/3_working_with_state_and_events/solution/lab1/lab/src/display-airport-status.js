import React, { Component } from 'react';

export default class DisplayAirportStatus extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sortedAirportInfo: []
    };
  }
  
  static getDerivedStateFromProps(props/*, state */) {
    return { 
      sortedAirportInfo: [...props.data].sort(
        (airport1, airport2) => airport1.code.localeCompare(airport2.code))
    };
  }
  
  render() {
    return <table>
      <tbody>
        <tr><th>Code</th><th>Name</th><th>Temperature</th><th>Delay</th></tr>
        {
          this.state.sortedAirportInfo.map(airport =>
            <tr key={ `${airport.code}KEY` }><td>{ airport.code}</td><td>{ airport.name}</td><td>{ airport.temperature}</td><td>{ airport.delay}</td></tr>
          )
        }
      </tbody>
    </table>;
  }
}
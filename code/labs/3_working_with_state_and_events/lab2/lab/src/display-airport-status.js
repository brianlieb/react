import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Airport from './airport';

export default class DisplayAirportStatus extends Component {
  constructor(props) {
    super(props);
    
    this.state = { sortedAirportInfo: [] };
  }                                        
  
  static getDerivedStateFromProps(props /*, state */) { 
    const byCode = (airport1, airport2) => airport1.code.localeCompare(airport2.code);
    return { sortedAirportInfo: props.data.slice().sort(byCode) };
  }
  
  render() {
    const sortedAirportInfo = this.state.sortedAirportInfo;

    return <table>
      <tbody>
        <tr><th>Code</th><th>Name</th><th>Temperature</th><th>Delayed?</th></tr>
        {
          sortedAirportInfo.map(airport => <tr key={ `${airport.code}KEY` }><td>{ airport.code }</td><td>{ airport.name } </td><td>{ airport.temperature }</td><td>{ (airport.delay ? 'Yes' : 'No') }</td></tr>)
        }
      </tbody>
    </table>;
  }
}

DisplayAirportStatus.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Airport))
};
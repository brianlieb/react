import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Airport from './airport';

export default class DisplayAirportStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { sortedAirportInfo: [] };
  }                                        

  static getDerivedStateFromProps(props , state ) {
    const byCode = (airport1, airport2) => airport1.code.localeCompare(airport2.code);
    const highlight = (a, state) =>
      state.selected && state.selected.code === a.code ? Object.assign(new Airport(), a, {name: a.name.toUpperCase()}): a;
    return {
      sortedAirportInfo: props.data
        .slice()
        .sort(byCode)
        .map(a => highlight(a, state)) };
  }

  highlight(selected) {
    this.setState({selected});
  }
  render() {
    const sortedAirportInfo = this.state.sortedAirportInfo;

    return <table>
      <tbody>
        <tr><th>Code</th><th>Name</th><th>Temperature</th><th>Delayed?</th></tr>
        {
          sortedAirportInfo.map(airport => <tr
            onMouseEnter={() => this.highlight(airport)}
            onMouseLeave={() => this.highlight(null)}
            key={ `${airport.code}KEY` }><td>{ airport.code }</td><td>{ airport.name } </td><td>{ airport.temperature }</td><td>{ (airport.delay ? 'Yes' : 'No') }</td></tr>)
        }
      </tbody>
    </table>;
  }
}

DisplayAirportStatus.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Airport))
};
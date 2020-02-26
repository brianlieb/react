import React, {Component} from 'react';

export default class DisplayAirportStatus extends Component {

  constructor(props) {
    super(props);
  }

  extractAndSortAirport(airports, delayed) {
    return airports.sort((a,b) => a.code.localeCompare(b.code)).filter(a => a.delay === delayed);
  }

  render() {
    this.extractAndSortAirport(this.props.data, this.props.delayed);


    return <table>
      <tbody>
        <tr><th>Code</th><th>Name</th><th>Temperature</th><th>Delayed?</th></tr>
        {
          this.extractAndSortAirport(this.props.data, this.props.delayed).map(airport => <tr key={ `${airport.code}KEY` }  >
            <td>{ airport.code }</td><td>{ airport.name }</td><td>{ airport.temperature }</td><td>{ (airport.delay ? 'Yes' : 'No') }</td>
          </tr>)
        }
      </tbody>
    </table>;
  }
}
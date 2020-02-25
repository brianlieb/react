import React, {Component} from 'react';

export default class DisplayAirportStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {sortedAirportInfo: []};
  }

  static getDerivedStateFromProps(props /*, state */) {
    return {
      sortedAirportInfo: [...props.data].sort((a,b) =>  a.code.localeCompare(b.code))
    };
  }

  render() {
    return (<table>
      <tbody>
        <tr><th>Code</th><th>Name</th><th>Temperature</th><th>Delay</th></tr>
        {
          this.state.sortedAirportInfo
            .map(a => <tr key={`${a.code}KEY`}>
              <td>{a.code}</td>
              <td>{a.name}</td>
              <td>{a.temperature}</td>
              <td>{a.delay}</td>
            </tr>)
        }
      </tbody>
    </table>);
  }
}
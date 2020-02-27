import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DisplayStatus extends Component {
  render() {
    
    //const airports = this.context.store.getState().airports;   

    const { store } = this.context;
    
    const airports = store.getState().airports;

    return <div>
      <h2 className="main">Aiport Status Updates</h2>
      <table>
        <tbody>
          <tr><th>Code</th><th>Name</th><th>Temperature</th><th>Delay</th></tr>
          {
            airports.map(airport => <tr key={ `${ airport.code }KEY` }><td>{ airport.code }</td><td>{ airport.name }</td><td>{ airport.temperature }</td><td className="delay">{ airport.delay ? String.fromCharCode(9719)  : '' }</td></tr>)
          }
        </tbody>
      </table>
    </div>;
  }
}

DisplayStatus.contextTypes =  {store: PropTypes.object};



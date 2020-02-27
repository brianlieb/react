import { expect } from 'chai';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import App from '../src/app';
import Service from '../src/service';
import { UPDATE } from '../src/store';
import PropTypes from 'prop-types';



//Please work on display-airport-test before these tests



configure({ adapter: new Adapter() });

describe('app test', function() {
  let sandbox;
  let clock;

  beforeEach(() => { 
    sandbox = sinon.createSandbox(); 
    clock = sandbox.useFakeTimers();
  });
  
  afterEach(() => sandbox.restore());
  
  xit('component renders links to add airport and display status', () => {
    const wrapper = render(<App />);
               
    const html = wrapper.html();
    
    expect(html.includes('href="/add">Add Airport')).to.be.true;
    expect(html.includes('href="/display">Display Status')).to.be.true;
  });
  
  xit('component creates a store', () => {
    const component = new App();
    
    expect(component.store.getState()).to.be.eql({ airports: [] });
  });
  
  xit('component subscribes to the store in the componentDidMount method', () => {
    const unsubscribeFunction = function() {};
    let registeredCallback;
    
    const component = new App();
    
    const setStateStub = sandbox.stub(component, 'setState')
      .withArgs({});
    
    component.store = { 
      subscribe: function(callback) {
        registeredCallback = callback;
        return unsubscribeFunction;
      }
    };
    
    component.componentDidMount();
    
    expect(component.unsubscribe).to.be.eql(unsubscribeFunction);
    
    registeredCallback();
    
    expect(setStateStub.called).to.be.true;
  });                                      
  
  xit('component unsubscribes in the componentWillUnmount method', () => {
    const component = new App();
    
    component.unsubscribe = sandbox.stub();
    
    component.componentWillUnmount();
    
    expect(component.unsubscribe.called).to.be.true;
  });
  
  xit('component triggers fetchAirportsStatus every second', () => {
    const component = new App();
    
    component.fetchAirportsStatus = sandbox.stub();
    
    component.componentDidMount();
    
    expect(component.fetchAirportsStatus.called).to.be.false;
    
    clock.tick(1000);
    expect(component.fetchAirportsStatus.called).to.be.true;
    component.fetchAirportsStatus.reset();

    clock.tick(1000);
    expect(component.fetchAirportsStatus.called).to.be.true;
  });
  
  xit('fetchAirportsStatus calls get on the Service', () => {
    const stub = sandbox.stub(Service, 'get')
      .returns({ then: func => func([{a: 1, b: 2}]) });
    
    const component = new App();
    
    component.fetchAirportsStatus();
    
    expect(stub.called).to.be.true;
  });
  
  xit('update store with received airport status', () => {
    sandbox.stub(Service, 'get')
      .returns({ then: func => func([{a: 1, b: 2}]) });
      
    let requestedAction = {};
    
    const component = new App();
    component.store = { dispatch: function(action) {
      requestedAction = action;
    }};
    
    component.fetchAirportsStatus();
    
    expect(requestedAction.type).to.be.eql(UPDATE);
  });
  
  xit('component provides childContext', () => {
    const component = new App();
                
    expect(component.getChildContext().store).to.be.eql(component.store);
  });
  
  xit('need to setup context property for store', () => {
    expect(App.childContextTypes).to.be.eql({ store: PropTypes.object.isRequired });
  });
});
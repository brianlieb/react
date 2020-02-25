import { expect } from 'chai';
import React from 'react';
import { configure, shallow } from 'enzyme';
import App from '../src/app';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('app test', function() {
  let sandbox;
  let clock;
  
  beforeEach(() => { 
    sandbox = sinon.createSandbox(); 
    clock = sandbox.useFakeTimers();
  });
  
  afterEach(() => sandbox.restore());
  
  xit('canary test', () => {
    expect(true).to.be.true;
  });

  xit('App renders div', () => {
    expect(shallow(<App />).html().includes('<div>')).to.be.true;
  });

  xit("App renders today's date", () => {
    const today = new Date().toDateString(); 
    expect(shallow(<App />).text().includes(today)).to.be.true;
  });
  
  xit('App renders current time', () => {
    const methodStub = sandbox.stub(Date.prototype, 'toLocaleTimeString')
      .returns('whatever');

    const today = new Date().toDateString();
    expect(shallow(<App />).text().includes(`${today} whatever`)).to.be.true;
    expect(methodStub.called).to.be.true;    
  });
  
  xit("App's componentDidMount calls setInterval", () => {
    const app = new App();
    const setStateStub = sinon.stub(app, 'setState')
      .withArgs({});
                          
    app.componentDidMount();
    expect(setStateStub.called).to.be.false;
    clock.tick(1000);
    
    expect(setStateStub.called).to.be.true;
  });
});

import { expect } from 'chai';
import { configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import AddAirport from '../src/add-airport';
import sinon from 'sinon';
import Service from '../src/service';

configure({ adapter: new Adapter() });


//Please work on service-test before these tests


describe('add airport test', function() {
  let sandbox;
  
  beforeEach(() => { 
    sandbox = sinon.createSandbox(); 
  });
  
  afterEach(() => sandbox.restore());

  it('component displays form', () => {
    const wrapper = render(<AddAirport />);
    
    const html = wrapper.html();
    
    expect(html.includes('Please enter airport code')).to.be.true;
    expect(html.includes('<input')).to.be.true;
    expect(html.includes('<button')).to.be.true;
  });

  it('clicking button calls addAirport with airport code', () => {
    const someinput = Math.random().toString();
    const stub = sandbox.stub(AddAirport.prototype, 'addAirport')
      .withArgs(someinput);
    
    const wrapper = mount(<AddAirport />);
    
    const input = wrapper.find('input'); 
                        
    input.instance().value = someinput;
    
    const button = wrapper.find('button');
    button.simulate('click');
    
    expect(stub.called).to.be.true;
  });
  
  it('addAirport sends airport code to the service', () => {
    const stub = sandbox.stub(Service, 'add')
      .withArgs('DEN')
      .returns(Promise.resolve(''));
      
    const component = new AddAirport();
    component.setState = sandbox.stub();
    
    component.addAirport('DEN');
    
    expect(stub.called).to.be.true;
  });

  it('addAirport sets return message from service to state', () => {
    sandbox.stub(Service, 'add')
      .withArgs('DEN')
      .returns({then: func => func('Added Denver International')});
      
    const component = new AddAirport();
    component.setState = sandbox.stub();
    
    component.addAirport('DEN');
    
    expect(component.setState.getCalls()[0].args[0]).to.be.eql({ message: 'Added Denver International'});
  });

  it('component renders message from the server', () => {
    const wrapper = mount(<AddAirport />);

    const message = `some message ${Math.random()}`;
    wrapper.setState({ message });
    
    expect(wrapper.html().includes(`<p>${message}</p>`)).to.be.true;
  });
});
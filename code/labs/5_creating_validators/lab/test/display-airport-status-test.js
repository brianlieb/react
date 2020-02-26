import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import React from 'react';
import DisplayAirportStatus from '../src/display-airport-status';
import Airport from '../src/airport';

configure({ adapter: new Adapter() });

describe('DisplayAirportStatus test', function() {
  let sandbox;
  let component;

  const airports = [
    new Airport('ONE', 'one', 12.12, true),
    new Airport('TWO', 'two', 22.12, false),
    new Airport('THREE', 'three', 32.12, false),
    new Airport('FOUR', 'four', 42.12, true),
  ];
  
  beforeEach(() => { 
    sandbox = sinon.createSandbox(); 
    component = new DisplayAirportStatus({});
  });
  
  afterEach(() => sandbox.restore());
  
  it('extractAndSortAirport for delayed', () => {
    const result = component.extractAndSortAirport(airports, true);
    
    expect(result.length).to.be.eql(2);
    expect(result[0].code).to.be.eql('FOUR');
    expect(result[1].code).to.be.eql('ONE');
  });

  it('extractAndSortAirport for not delayed', () => {
    const result = component.extractAndSortAirport(airports, false);
    
    expect(result.length).to.be.eql(2);
    expect(result[0].code).to.be.eql('THREE');
    expect(result[1].code).to.be.eql('TWO');
  });
  
  it('render calls extractAndSortAirport for delayed', () => {
    const extractAndSortAirportStub = sandbox.stub(DisplayAirportStatus.prototype, 'extractAndSortAirport')
      .withArgs(airports, true)
      .returns(airports);
      
    shallow(<DisplayAirportStatus data={ airports } delayed={ true }/>);
    
    expect(extractAndSortAirportStub.called).to.be.true;
  });

  it('render calls extractAndSortAirport for not delayed', () => {
    const extractAndSortAirportStub = sandbox.stub(DisplayAirportStatus.prototype, 'extractAndSortAirport')
      .withArgs(airports, false)
      .returns(airports);
      
    shallow(<DisplayAirportStatus data={ airports } delayed={ false }/>);
    
    expect(extractAndSortAirportStub.called).to.be.true;
  });

  it('render renders result from extractAndSortAirport', () => {
    sandbox.stub(DisplayAirportStatus.prototype, 'extractAndSortAirport')
      .withArgs(airports, true)
      .returns([
        new Airport('A', 'a', 12.12, true),
        new Airport('B', 'b', 22.12, true),
      ]);
      
    const wrapper = shallow(<DisplayAirportStatus data={ airports } delayed={ true }/>);
    
    const html = wrapper.html();
    
    expect(html.includes('<td>A</td><td>a</td><td>12.12</td>')).to.be.true;
  });
  
  xit('render title', () => {
    const wrapper = shallow(<DisplayAirportStatus data={ airports } delayed={ true } title="Some Title"/>);
    
    expect(wrapper.html().includes('<h2>Some Title</h2>')).to.be.true;
  });
  
  xit('title has no errors', () => {
    const result = DisplayAirportStatus.propTypes.title({title: 'Some Thing'}, 'title', 'DisplayAirportStatus');
    
    expect(result).to.be.null;
  });

  xit('title words should be in uppercase', () => {
    const result = DisplayAirportStatus.propTypes.title({title: 'Some title value'}, 'title', 'DisplayAirportStatus');
    
    expect(result.message).to.be.eql('Each word of title for DisplayAirportStatus should be capitalized');
  });

  xit('title has default', () => {
    expect(DisplayAirportStatus.defaultProps.title).to.be.eql('Please Set A Title');
  });
});
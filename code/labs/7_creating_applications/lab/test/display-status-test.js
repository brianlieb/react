import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import DisplayStatus from '../src/display-status';
import sinon from 'sinon';
import Airport from '../src/airport';
import PropTypes from 'prop-types';

configure({ adapter: new Adapter() });
                                            

//Please work on add-airport-test before these tests

describe('display status test', function() {
  let sandbox;
  const context = { store: {
    getState: function() {
      return {
        airports: [
          new Airport('IAD', 'I am Delayed', 90, true),
          new Airport('IAH', 'I am Here', 99, false),
        ]};
    }
  } };

  beforeEach(() => { 
    sandbox = sinon.createSandbox(); 
  });
  
  afterEach(() => sandbox.restore());
  
  it('component class sets contextTypes', () => {
    expect(DisplayStatus.contextTypes).to.be.eql({ store: PropTypes.object });
  });
  
  it('component gets store from context and renders', () => {
    const wrapper = shallow(<DisplayStatus />, { context });
    const html = wrapper.html();
                                   
    expect(html.includes('<h2 class="main">Aiport Status Updates</h2>')).to.be.true;
    expect(html.includes('<tr><td>IAD</td><td>I am Delayed</td><td>90</td><td class="delay">◷</td></tr>')).to.be.true;
    expect(wrapper.find('tr').at(1).key()).to.be.eql('IADKEY');
  });
});
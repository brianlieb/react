import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/app';
import sinon from 'sinon';                   


//Please work on app-test before these tests


describe('lab test', function() {
  let sandbox;
  
  beforeEach(() => { 
    sandbox = sinon.createSandbox(); 

    global.document = { getElementById: function() {} };
  });
  
  afterEach(() => sandbox.restore());
  
  it('Lab renders App into contents', () => {
    const getElementByIdStub = sandbox.stub(document, 'getElementById')
      .withArgs('contents');
    
    const renderStub = sandbox.stub(ReactDOM, 'render')
      .withArgs(<App/>);
                                            
    require('../src/lab');
      
    expect(getElementByIdStub.called).to.be.true;
    expect(renderStub.called).to.be.true;
  });
});
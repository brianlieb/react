import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/app';
import sinon from 'sinon';

describe('lab test', function() {
  let sandbox;
  
  beforeEach(() => { 
    sandbox = sinon.createSandbox(); 

    global.document = { getElementById: function() {} };
  });
  
  afterEach(() => sandbox.restore());
  
  xit('Lab renders App into contents', () => {
    const getElementByIdStub = sandbox.stub(document, 'getElementById')
      .withArgs('contents');
    
    const app = React.createElement(App, null, null);                        
    
    const renderStub = sandbox.stub(ReactDOM, 'render')
      .withArgs(app);
                                            
    require('../src/lab');
      
    expect(getElementByIdStub.called).to.be.true;
    expect(renderStub.called).to.be.true;
  });
});
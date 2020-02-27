import { expect } from 'chai';
require('chai').use(require('chai-as-promised'));
import Service from '../src/service';
import sinon from 'sinon';
import 'whatwg-fetch';


//Please work on store-test before these tests


describe('service test', function() {
  let sandbox;  
  const response = { 
    text: () => 'message from server',
    json: () => [{a: 1, b: 2}]
  };
  let fetchStub;
  
  beforeEach(() => { 
    sandbox = sinon.createSandbox(); 
    fetchStub = sandbox.stub(window, 'fetch')
      .returns(Promise.resolve(response));
      
    global.fetch = fetchStub;  
  });
  
  afterEach(() => sandbox.restore());

  it('add sends request to the server', () => {
    Service.add('ORD');
                                    
    const call = fetchStub.getCalls()[0];
    expect(call.args[0]).to.be.eql('/airport');
    expect(call.args[1]).to.be.eql({ method: 'POST', headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ code: 'ORD' }) });
  });
  
  it('add returns promise with response from fetch', () => {
    expect(Service.add('ORD')).to.eventually.eql('message from server');
  });
  
  it('get sends request to the server', () => {
    Service.get();
    
    const call = fetchStub.getCalls()[0];
    expect(call.args[0]).to.be.eql('/airport');
  });

  it('get extracts JSON from response', () => {
    expect(Service.get()).to.eventually.eql([{a: 1, b: 2}]);    
  });
});
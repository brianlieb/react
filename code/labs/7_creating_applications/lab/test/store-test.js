import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import Airport from '../src/airport';
import * as airportStore from '../src/store';


//Please work on these tests first


describe('store test', function() {
  const sampleStore = deepFreeze({
    airports: [
      new Airport('IAH', 'Houston', 99, true)
    ]
  });
  
  xit('canary test', () => {
    expect(true).to.be.true;
  });             
  
  xit('create store with reducer that returns given store', () => {
    const store = airportStore.createAirportStore();
   
    const state = store.getState();
    
    expect(state.airports).to.be.eql([]);
  });
  
  xit('create update action', () => {
    const action = airportStore.createUpdate(['whatever']);
    
    expect(action.type).to.be.eql(airportStore.UPDATE);
    expect(action.airports).to.be.eql(['whatever']);
  });                                    
  
  xit('reducer update data for an airport', () => {
    const store = airportStore.reducers(sampleStore, airportStore.createUpdate(
      deepFreeze([new Airport('IAH', 'Houton Bush', 90, false)])));
    
    const airport = store.airports[0];
    
    expect(airport.code).to.be.eql('IAH');
    expect(airport.name).to.be.eql('Houton Bush');
    expect(airport.temperature).to.be.eql(90);
    expect(airport.delay).to.be.eql(false);
  });

  xit('reducer update data with new airport', () => {
    const store = airportStore.reducers(sampleStore, airportStore.createUpdate(deepFreeze([new Airport('IAD', 'Dulles', 80, false)])));
    
    const houston = store.airports.find(airport => airport.code === 'IAH');
    expect(houston.code).to.be.eql('IAH');
    expect(houston.temperature).to.be.eql(99);

    const dulles = store.airports.find(airport => airport.code === 'IAD');
    expect(dulles.code).to.be.eql('IAD');
    expect(dulles.name).to.be.eql('Dulles');
  });
});
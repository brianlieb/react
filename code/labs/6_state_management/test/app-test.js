import { expect } from 'chai';
import React from 'react';
import { configure, shallow } from 'enzyme';
import App from '../src/app';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('app test', function() {
  let sandbox;
  let app;
  let clock;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    clock = sinon.useFakeTimers();

    app = new App({});
  });

  afterEach(() => sandbox.restore());

  it('canary test', () => {
    expect(true).to.be.true;
  });


});
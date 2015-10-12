'use strict';

var lc = require('./helpers/livecycle.helper');
var expect = require('chai').expect;

describe('Basic :: ', function () {

  before(lc.setup);
  after(lc.teardown);

  it('Sails.js should run', function () {
    expect(sails).to.be.ok;
  });

  it('agenda hook should load', function () {
    expect(sails.hooks.agenda).to.be.ok;
    expect(sails.agenda).to.be.ok;
  });

  it('agenda should has all methods', function () {
    expect(sails.agenda).to.have.property('every')
      .and.to.be.a('function');
    expect(sails.agenda).to.have.property('define')
      .and.to.be.a('function');
    expect(sails.agenda).to.have.property('schedule')
      .and.to.be.a('function');
  });
});

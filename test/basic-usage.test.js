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
});

'use strict';

var _ = require('lodash');
var Agenda = require('agenda');

module.exports = function ToDefineAgenda(app, cb) {
  cb = cb || _.noop;

  /**
   * Create a new Agenda instance
   */
  var agenda = new Agenda(app.config.agenda.connection);

  // Start agenda daemon
  agenda.start();
  // Bind agenda to global sails
  app.agenda = agenda;

  return cb();
};

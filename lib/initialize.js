'use strict';

var agendaInit = require('./agenda-init');

/**
 * Initialization of hook
 *
 * @param {Sails} app
 * @returns {Function}
 */
module.exports = function ToInitialize(app) {

  return function(cb) {
    agendaInit(app, cb);
  };

};

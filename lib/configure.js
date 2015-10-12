'use strict';

var _ = require('lodash');
var defaults = require('./defaults');

/**
 * Configuration handler
 *
 * @param {Sails} app
 * @returns {Function}
 */
module.exports = function ToConfigure(app) {

  return function() {
    app.config.agenda = _.defaults(defaults, app.config.agenda);
  };
};

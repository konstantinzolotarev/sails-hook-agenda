'use strict';

module.exports = function(app) {

  return {
    defaults: require('./lib/defaults'),

    configure: require('./lib/configure')(app),

    initialize: require('./lib/initialize')(app)
  };
};

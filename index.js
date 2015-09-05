'use strict';

module.exports = {

  defaults: require('./lib/defaults'),

  configure: require('./lib/configure')(sails),

  initialize: require('./lib/initialize')(sails)
};

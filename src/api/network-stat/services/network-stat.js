'use strict';

/**
 * network-stat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::network-stat.network-stat');

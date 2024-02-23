'use strict';

/**
 * network-stat router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::network-stat.network-stat');

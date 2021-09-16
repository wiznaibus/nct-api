'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.member.search(ctx.query, [
                'cover_image',
                'performing_artists',
                'performing_artists.artist',
                'performing_artists.artist.unit',
                'performing_artists.artist.unit.discography_types'
            ]);
        } else {
            entities = await strapi.services.member.find(ctx.query, [
                'cover_image',
                'performing_artists',
                'performing_artists.artist',
                'performing_artists.artist.unit',
                'performing_artists.artist.unit.discography_types'
            ]);
        }

        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.member }));
    },
};
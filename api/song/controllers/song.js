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
            entities = await strapi.services.song.search(ctx.query, [
                'album',
                'artists',
                'performing_artists',
                'performing_artists.artist',
                'performing_artists.member',
                'languages',
                'links',
                'links.link_type'
            ]);
        } else {
            entities = await strapi.services.song.find(ctx.query, [
                'album',
                'artists',
                'performing_artists',
                'performing_artists.artist',
                'performing_artists.member',
                'languages',
                'links',
                'links.link_type'
            ]);
        }

        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.song }));
    },
};

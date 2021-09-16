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
            entities = await strapi.services.album.search(ctx.query, [
                'release_type',
                'cover_image',
                'artists',
                'performing_artists',
                'performing_artists.artist',
                'performing_artists.member',
                'songs',
                'songs.artists',
                'songs.performing_artists',
                'songs.performing_artists.artist',
                'songs.languages',
                'songs.links',
                'songs.links.link_type',
                'languages',
                'links',
                'links.link_type'
            ]);
        } else {
            entities = await strapi.services.album.find(ctx.query, [
                'release_type',
                'cover_image',
                'artists',
                'performing_artists',
                'performing_artists.artist',
                'performing_artists.member',
                'songs',
                'songs.artists',
                'songs.performing_artists',
                'songs.performing_artists.artist',
                'songs.languages',
                'songs.links',
                'songs.links.link_type',
                'languages',
                'links',
                'links.link_type'
            ]);
        }

        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.album }));
    },
};

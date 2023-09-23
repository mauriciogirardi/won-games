/**
 * game controller
 */

import { factories } from '@strapi/strapi'
import { API_GAME } from '../../utils/entries';

export default factories.createCoreController(API_GAME, ({ strapi }) => ({
  async populate(ctx) {
    const options = {
      limit: 48,
      order: "desc:trending",
      ...ctx.query,
    }

    await strapi.service(API_GAME).populate(options)

    ctx.send('Finished populating games!')
  }
}));

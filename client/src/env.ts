import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    BASE_URL_STRAPI: z.string().url()
  },

  client: {},

  runtimeEnv: {
    BASE_URL_STRAPI: process.env.BASE_URL_STRAPI
  }
})

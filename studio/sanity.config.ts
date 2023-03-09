import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

import authorType from './schemas/author'
import postType from './schemas/post'
import recipeType from './schemas/recipe'

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-11-15'
export default defineConfig({
  name: 'default',
  title: 'bolle',

  projectId: 'dydq3bus',
  dataset: 'production',

  plugins: [deskTool(), visionTool({defaultApiVersion: apiVersion})],

  schema: {
    types: [authorType, postType, recipeType],
  },
})

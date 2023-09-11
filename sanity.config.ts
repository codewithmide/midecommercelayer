/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\pages\pages\[[...index]].tsx` route
 */

// import {visionTool} from '@sanity/vision'
// import {defineConfig} from 'sanity'
// import {deskTool} from 'sanity/desk'

// // Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import {apiVersion, dataset, projectId} from './sanity/env'
// import {schema} from './sanity/schema'

// export default defineConfig({
//   basePath: '/pages',
//   projectId,
//   dataset,
//   // Add and edit the content schema in the './sanity/schema' folder
//   schema,
//   plugins: [
//     deskTool(),
//     // Vision is a tool that lets you query your content with GROQ in the studio
//     // https://www.sanity.io/docs/the-vision-plugin
//     visionTool({defaultApiVersion: apiVersion}),
//   ],
// })

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas/schemaTypes";
import { Logo } from "./plugins/studioLogo";

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "[Studio] Commerce Layer Sanity Starter";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export default defineConfig({
  title,
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemas
  },
  studio: {
    components: {
      logo: Logo
    }
  }
});
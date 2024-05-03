import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import analogjsangular from "@analogjs/astro-angular";

// https://astro.build/config
export default defineConfig({
  site: 'https://lizethcas.github.io',
  integrations: [tailwind(), analogjsangular()]
});
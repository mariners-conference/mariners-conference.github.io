// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://mariners-conference.github.io',
  integrations: [
    icon({
      include: {
        "simple-icons": ["x", "github", "discord", "calendar"],
      },
    }),
  ],
});

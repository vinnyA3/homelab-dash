import adapter from '@sveltejs/adapter-static';

const buildOutputDir = 'dist';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: buildOutputDir,
      assets: buildOutputDir,
      fallback: null,
      precompress: false
    }),
    headers: {
      host: 'X-Forwarded-Host',
      protocol: 'X-Forwarded-Proto'
    },
    target: '#svelte'
  }
};

export default config;


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://matheusdalbone.github.io/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://matheusdalbone.github.io/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 548, hash: '96aabf3ed1b5e650c83c708e8df8f67c998ad757712331a8c467a7fb7c6999fb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1061, hash: 'ae0ecf885d66f7ce4e7affa27133f16a04528e2dafb76ae555cab1fc395434bd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 768, hash: 'bfde2494d3522dad5721ca300f8658f9e69354fa8c73142b1c189bcb6bfb0a60', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

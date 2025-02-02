
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
    'index.csr.html': {size: 692, hash: 'f4fa9891fc19120ad57c8bc237f81e02def0834daf73d52d79447feeb1223408', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 514, hash: '5a6fdedb2b426fde376b892ccf3b4106042bb41ab03128268de0542893e86504', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 48494, hash: '869d814d77955787a4ca8490aabe9d468df27e81acdc81abdb782f67928b9cac', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-W4OEKQXN.css': {size: 2252, hash: '2SboPaujUlY', text: () => import('./assets-chunks/styles-W4OEKQXN_css.mjs').then(m => m.default)}
  },
};

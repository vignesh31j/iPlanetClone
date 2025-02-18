
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://vignesh31j.github.io/iPlanetClone/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/iPlanetClone"
  },
  {
    "renderMode": 2,
    "route": "/iPlanetClone/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/iPlanetClone/mac"
  },
  {
    "renderMode": 2,
    "route": "/iPlanetClone/phone"
  },
  {
    "renderMode": 2,
    "route": "/iPlanetClone/ipad"
  },
  {
    "renderMode": 2,
    "route": "/iPlanetClone/music"
  },
  {
    "renderMode": 2,
    "route": "/iPlanetClone/watch"
  },
  {
    "renderMode": 2,
    "route": "/iPlanetClone/login"
  },
  {
    "renderMode": 2,
    "route": "/iPlanetClone/home"
  },
  {
    "renderMode": 2,
    "route": "/iPlanetClone/register"
  },
  {
    "renderMode": 2,
    "route": "/iPlanetClone/profile"
  },
  {
    "renderMode": 2,
    "route": "/iPlanetClone/accessories"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 537, hash: '533ae498fb41fb8e63bb51990bde648d725de6ecd19150c4ecdbd46b02e0c576', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: '23d0dfc6f2b9417e715bad448b48db861251b642190fca22de3201a36bcfac57', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 10455, hash: '76b5b25458f98e75b7478893785b33088c8629bff4ac7fecaf265c2d4b104af0', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10455, hash: '76b5b25458f98e75b7478893785b33088c8629bff4ac7fecaf265c2d4b104af0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'mac/index.html': {size: 10783, hash: 'cec94c0e276b928b14c954afe42049ab642eeffde53d287d63eae8690179f174', text: () => import('./assets-chunks/mac_index_html.mjs').then(m => m.default)},
    'phone/index.html': {size: 10330, hash: 'c866939af62d5d42f1afec05d4db52378772f36e539dea14d5237f889cb5270a', text: () => import('./assets-chunks/phone_index_html.mjs').then(m => m.default)},
    'ipad/index.html': {size: 10533, hash: 'd75fd0a1fa224f8525be2e395ff39f4ea2538fff42ee7d6c103d24bc6ef4ed4f', text: () => import('./assets-chunks/ipad_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 9445, hash: '2aee3ef7a98f3da4a002cad002a4b24d9a2d035d68b1019ff4cfee12ab29f350', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 9750, hash: 'f95d1caf04a14c7631149b1c84de44fb6fd8a4e45e4392ec46b34246b2d1587e', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'watch/index.html': {size: 10813, hash: 'ade4791920a579ab4bf0670cd269300b35cec26c06f2c90c647331d285e9e61d', text: () => import('./assets-chunks/watch_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 24220, hash: 'f5866875cca1f291ea9edcf47b6c608d3f9dabd1052531e1cd8bf93ec6ded3a8', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 8493, hash: 'a487d2d1cabc560845784642c9a60762775f756efc4e5f023bb6839817d0d961', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'accessories/index.html': {size: 11043, hash: 'da37b2b077519fdc2f8d56db8db00bdfa785c179cf08322cb36d19677988f539', text: () => import('./assets-chunks/accessories_index_html.mjs').then(m => m.default)},
    'music/index.html': {size: 10554, hash: '7b013d5780a3f2127d97e65f7ee3e695565072ca6941bfa1700580a32d3132d9', text: () => import('./assets-chunks/music_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

export default {
  name: 'search-landingpage',
  attributes: {
    slug: '',
    name: '',
    page_title: '',
    link_title: '',
    headline: '',
    breadcrumb: '',
    directory: '',
    sitemap_category: '',
    search_params: {},
    meta: {},
    'related-landingpages': {
      jsonApi: 'hasMany',
      type: 'search-landingpage',
    },
    'child-landingpages': {
      jsonApi: 'hasMany',
      type: 'search-landingpage',
    },
    'parent-landingpages': {
      jsonApi: 'hasOne',
      type: 'search-landingpage',
    },
  },
};

export default {
  name: 'region-landingpage',
  attributes: {
    domain_id: '',
    page_title: '',
    slug: '',
    city: '',
    search_params: {},
    welcome_title: '',
    subtitle: '',
    content: '',
    is_in_footer: false,
    link_title: '',
    file: '',
    header_uuid: '',
    meta_description: '',
    'related-landingpages': {
      jsonApi: 'hasMany',
      type: 'region-landingpage',
    },
  },
};

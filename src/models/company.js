export default {
  name: 'company',
  attributes: {
    name: '',
    description: '',
    publication_count: 0,
    address: {
      street: '',
      zipcode: '',
      city: '',
      state: '',
      country: '',
      lat: 0,
      lng: 0,
    },
    contact: {},
    logo_list_url: null,
    logo_profile_url: null,
    logo_profile_fb_url: null,
    employer_branding_profile_url: null,
    header_url: null,
    header_image_id: null,
    banner_exclusive_url: null,
    banner_region_url: null,
    banner_instructor_url: null,
    phone: '',
    fax: '',
    website_url: '',
    facebook_url: '',
    staffing_services: '',
    external_hrtool: false,
    collective_account: false,
    employees: 0,
    company_is_public: true,
    use_new_jobmanagement: false,
    contacts: {
      jsonApi: 'hasMany',
      type: 'contact',
    },
    'main-contact': {
      jsonApi: 'hasOne',
      type: 'contact',
    },
    industry: {
      jsonApi: 'hasOne',
      type: 'industry',
    },
    benefits: {
      jsonApi: 'hasMany',
      type: 'benefit',
    },
    subscriptions: {
      jsonApi: 'hasMany',
      type: 'subscription',
    },
    'child-companies': {
      jsonApi: 'hasMany',
      type: 'company',
    },
    'parent-company': {
      jsonApi: 'hasOne',
      type: 'company',
    },
    'primary-domain': {
      jsonApi: 'hasOne',
      type: 'domain',
    },
    'social-media-links': {
      jsonApi: 'hasMany',
      type: 'social-media-link',
    },
  }
};


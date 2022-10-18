export default {
  name: 'contact',
  attributes: {
    salutation: null,
    title: null,
    firstname: null,
    lastname: null,
    department: null,
    responsibility: null,
    occupation: null,
    email: null,
    phone: null,
    mobile: null,
    show_in_company_profile: false,
    street: '',
    city: '',
    zipcode: '',
    country: '',
    company: {
      jsonApi: 'hasOne',
      type: 'company',
    },
    media: {
      jsonApi: 'hasOne',
      type: 'media',
    },
  },
};

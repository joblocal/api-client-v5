export default {
  name: 'active-flatrate',
  attributes: {
    domain_id: '',
    activation_time: '',
    expiration_time: '',
    runtime: 0,
    active: false,
    subscriptions: {
      jsonApi: 'hasMany',
      type: 'subscription',
    },
  },
};

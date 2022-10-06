export default {
  name: 'role',
  attributes: {
    name: '',
    'permissions': {
      jsonApi: 'hasMany',
      type: 'permission',
    },
  },
  options: {
    collectionPath: 'auth/roles',
  },
};

import DevourClient from 'devour-client';
import createClient from '.';

import models from '../models';

describe('api client', () => {
  test('to be a devour client', () => {
    expect(createClient()).toBeInstanceOf(DevourClient);
  });

  test('to set the api url correctly', () => {
    const url = 'localhost';
    const apiClient = createClient({ url });
    expect(apiClient.apiUrl).toEqual(url);
  });
});

describe('middleware registration', () => {
  const client = createClient();

  test('to register error middleware', () => {
    const middleware = client.middleware
      .find((mw) => mw.name === 'errors');

    expect(middleware).not.toBeNull();
  });

  test('to register auth middleware', () => {
    const middleware = client.middleware
      .find((mw) => mw.name === 'token-authentication');

    expect(middleware).not.toBeNull();
  });

  test('to register api gateway middleware', () => {
    const middleware = client.middleware
      .find((mw) => mw.name === 'aws-api-gateway-param-flatten');

    expect(middleware).not.toBeNull();
  });
});

describe('api client definition', () => {
  const apiClient = createClient();

  test('to define contact model', () => {
    expect(apiClient.models.contact.attributes)
      .toEqual(models.filter((model) => model.name === 'contact')[0].attributes);
  });
});

import DevourClient from 'devour-client';

import models from '../models';

import errorMiddleware from '../middlewares/errors';
import awsApiGatewayMiddleware from '../middlewares/awsApiGateway';
import tokenAuthenticationMiddleware from '../middlewares/tokenAuthentication';

export default function createClient({
  url = 'localhost',
  token = null,
  logger = true,
} = {}) {
  const client = new DevourClient({
    apiUrl: url,
    logger,
  });

  client.insertMiddlewareBefore('axios-request', awsApiGatewayMiddleware);
  client.insertMiddlewareBefore('axios-request', tokenAuthenticationMiddleware({ token }));
  client.replaceMiddleware('errors', errorMiddleware);

  models.forEach((model) => client.define(
    model.name,
    model.attributes,
    model.options,
  ));

  return client;
}

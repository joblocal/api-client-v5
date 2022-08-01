# Joblocal Api-Client

![Downloads](https://img.shields.io/npm/dt/@joblocal\/api-client-v5.svg)
![Size](https://img.shields.io/bundlephobia/min/@joblocal\/api-client-v5.svg)
![Zipped Size](https://img.shields.io/bundlephobia/minzip/@joblocal\/api-client-v5.svg)

This package contains a pre-configured devour-client for the Joblocal api
[Devour](https://github.com/twg/devour) - Api client for JSON-Api-Specification compliant resource handling
[Documentation]('https://joblocal.api-docs.io/') - Api Documentation

## Requirements
- Yarn or npm

## Installation
Using npm:
```sh
$ npm install --save @joblocal/api-client-v5
```

Using yarn:
```sh
$ yarn add @joblocal/api-client-v5
```

## Usage
After installing the package you can use it as follows.

```javascript
import createClient from '@joblocal/api-client';

const client = createClient({
  url: 'https://api.joblocal.de/v5',
  token: 'user_id_token' || () => 'id_token' || null,
});
```

## Development

**Installing dependencies:**
```sh
$ npm install
```

**Verify by running tests:**
```sh
$ npm test
```

## Built with
* [Devour](https://github.com/twg/devour) - Api client for JSON-Api-Specification compliant resource handling
* [Webpack](https://webpack.js.org/) - Application Bundler
* [Jest](https://jestjs.io/) - Test Runner

### Also see
* [Jest Api](https://jestjs.io/docs/api)

## Contributing
Please read through our [contributing guidelines](https://github.com/joblocal/api-client-v5/blob/master/contributing.md). Included are directions for opening issues, coding standards, and feature requests.

## Authors
* **Joblocal GmbH** - *Initial work* - [Joblocal](https://github.com/joblocal)

See also the list of [contributors](https://github.com/joblocal/api-client-v5/contributors) who participated in this project.

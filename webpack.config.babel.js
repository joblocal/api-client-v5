import path from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';

const resolve = (file) => path.resolve(__dirname, file);

const config = {

  entry: resolve('src/index.js'),

  plugins: [new ESLintPlugin({})],

  output: {
    path: resolve('dist'),
    filename: 'index.js',
    library: {
      name: 'api-client-v5',
      type: 'umd',
    },
    globalObject: 'this',
  },

  externals: {
    'devour-client': 'devour-client',
  },

  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      src: resolve('src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};

export default config;

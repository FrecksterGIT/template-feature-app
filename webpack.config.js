/* eslint-env node */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const demo = require('@das-buro-am-draht/feature-app-demo-integrator/webpack');

const demoConfig = env => demo({
  env,
  srcdir: path.resolve('./src'),
  outdir: path.resolve('./dist'),
});

const umdConfig = env => ({
  name: 'build',
  mode: 'none',
  devtool: "source-map",
  entry: {
    app: path.resolve(__dirname, './src/app.tsx'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    module: 'empty',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components',
    '@feature-hub/react': '@feature-hub/react',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
});

const moduleConfig = (env) => ({
  ...umdConfig(env),
  output: {
    filename: 'app.commonjs.js',
    path: path.resolve(__dirname, './dist'),
  },
  target: 'node',
});

module.exports = env => {
  return [
    umdConfig(env),
    moduleConfig(env),
    demoConfig(env),
  ]
};

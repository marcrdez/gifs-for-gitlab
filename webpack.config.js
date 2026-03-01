import { readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import CopyPlugin from 'copy-webpack-plugin';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

export default {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    main: './src/main.js',
    background: './src/background.js',
  },
  output: {
    path: path.resolve(__dirname, 'distribution'),
    filename: '[name].js',
    clean: true,
  },
  plugins: [
    new webpack.ProvidePlugin({
      h: ['dom-chef', 'h'],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/manifest.json',
          to: 'manifest.json',
          transform(content) {
            const manifest = JSON.parse(content.toString());
            manifest.version = pkg.version;
            return JSON.stringify(manifest, undefined, 2);
          },
        },
        {
          from: 'src/images',
          to: 'images',
        },
        {
          from: 'src/*.css',
          to: '[name][ext]',
        },
      ],
    }),
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(process.env.DEBUG === 'true'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'classic',
                  pragma: 'h',
                  pragmaFrag: 'h.Fragment',
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

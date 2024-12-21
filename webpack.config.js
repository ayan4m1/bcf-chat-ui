import 'dotenv/config';

import { fileURLToPath } from 'url';
import webpack from 'webpack';
import { dirname, resolve } from 'path';
import autoprefixer from 'autoprefixer';
import HtmlPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { CleanWebpackPlugin as CleanPlugin } from 'clean-webpack-plugin';

const { DefinePlugin } = webpack;
const dev = process.env.NODE_ENV === 'development';
const __dirname = dirname(fileURLToPath(import.meta.url));

const plugins = [
  new CleanPlugin(),
  new MiniCSSExtractPlugin({
    filename: '[name].css'
  }),
  new DefinePlugin({
    BCF_CHAT_API_URL: JSON.stringify(process.env.BCF_CHAT_API_URL)
  }),
  new HtmlPlugin({
    template: './src/index.html'
  })
];

if (dev) {
  plugins.push(
    new ESLintWebpackPlugin({
      configType: 'flat',
      eslintPath: 'eslint/use-at-your-own-risk'
    }),
    new StylelintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.scss',
      failOnError: true,
      quiet: false
    })
  );
}

export default {
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'eval-cheap-module-source-map' : false,
  entry: './src/index.js',
  devServer: {
    open: true,
    port: 9000
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [autoprefixer, postcssFlexbugsFixes],
                sourceMap: dev
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true
              }
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.png$/,
        type: 'asset/resource'
      }
    ]
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  plugins,
  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules', 'src']
  },
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
  }
};

import js from '@eslint/js';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import-x';

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.react,
  {
    languageOptions: {
      globals: globals.browser,
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [
            '@babel/preset-env',
            ['@babel/preset-react', { runtime: 'automatic' }]
          ]
        }
      }
    },
    settings: {
      'import-x/resolver': {
        node: {
          paths: ['./src/']
        }
      }
    }
  },
  {
    files: ['webpack.config.js'],
    languageOptions: {
      globals: globals.node
    }
  },
  prettierPlugin
];

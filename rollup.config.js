import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify-es';
import progress from 'rollup-plugin-progress';
import flow from 'rollup-plugin-flow';
import pkg from './package.json';

export default {
  input: 'index.js',

  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
    progress({
      clearLine: false,
    }),
    flow({
      all: true,
    }),
    buble({
      exclude: ['node_modules/**'],
    }),
    uglify(),
  ],
};

import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

const dev = process.env.ROLLUP_WATCH;

const plugins = [
  nodeResolve(),
  commonjs(),
  typescript(),
  json(),
  !dev &&
    terser({
      output: {
        comments: false,
      },
    }),
];

const onwarn = (warning, warn) => {
  if (warning.code === 'THIS_IS_UNDEFINED' && warning.id?.includes('/node_modules/')) {
    return;
  }
  warn(warning);
};

export default [
  {
    input: 'src/air-visual-card.ts',
    output: {
      file: 'dist/air-visual-card.js',
      format: 'es',
      inlineDynamicImports: true,
    },
    plugins: [...plugins.filter(Boolean)],
    onwarn,
  },
];

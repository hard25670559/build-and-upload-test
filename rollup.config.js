import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/index.global.min.js',
      format: 'iife',
      sourcemap: true,
      name: 'test',
    }
  ],
  plugins: [
    terser({
      mangle: true,
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      output: {
        comments: false,
        beautify: false
      }
    }),
    nodeResolve(), // 解析第三方模块
    typescript(), // 支持 TypeScript
    commonjs(), // 支持 CommonJS
  ],
}

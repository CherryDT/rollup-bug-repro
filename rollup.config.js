import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    inlineDynamicImports: true,
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs({ sourceMap: false }) // Disable source maps to speed up bundling
  ],
  watch: {
    clearScreen: false
  }
}

console.log('To trigger the problem, go to src/main.js and press save so a rebuild is triggered!')
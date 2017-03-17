const pluginTypescript = require('rollup-plugin-typescript');
const typescript = require('typescript');

module.exports = {
  entry: 'src/index.ts',
  dest: 'bundles/angular-jqp.umd.js',
  format: 'umd',
  sourceMap: true,
  moduleName: 'ng.jqp',
  plugins: [
    pluginTypescript({
      typescript: typescript
    })
  ],
  globals: {
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms'
  }
};

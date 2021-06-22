const  path=require('path')

module.exports = {
    entry: './src/js/iziToast.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'iziToast.js',
      // export to AMD, CommonJS, or window
    libraryTarget: 'umd',
    // the name exported to window
    library: 'iziToast'

    },
    mode: 'development' // 设置mode
}

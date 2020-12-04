import path from 'path'

module.exports = {
  module: {
  rules: [
    {
       test: /\.tsx?$/,
       loader: 'ts-loader'
    }
  ]
},
resolve: {
  modules: [path.join(__dirname, 'src'), 'node_modules'],
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.json'],
},
}
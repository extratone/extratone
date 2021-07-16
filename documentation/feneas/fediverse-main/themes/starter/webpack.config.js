
module.exports = {
  mode: 'production',
  entry: {
        main: './source/assets/scripts/crystalball'
  },
  output: {
    filename: 'ball.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/
      },
    ],
  }
};

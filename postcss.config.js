module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 62,
      propWhiteList: ["*"],
      minPixelValue: 2
    }
  }
}

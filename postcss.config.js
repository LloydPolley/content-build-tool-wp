const paddingBottom = require('./src/config/postCss/paddingBottom.js');

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    paddingBottom()
  ]
}
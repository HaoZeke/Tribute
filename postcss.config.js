module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%', 'Explorer >= 10', 'Android >= 4'],
    }
  },
};
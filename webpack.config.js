module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Gumagamit ng style-loader para sa pag-inject ng CSS sa DOM
          'css-loader',   // Gumagamit ng css-loader para i-process ang CSS
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'), // Gumagamit ng Dart Sass
              sassOptions: {
                // Idagdag ang mga bagong options dito kung kinakailangan
              },
            },
          },
        ],
      },
    ],
  },
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    sliders: path.resolve(__dirname, './src/js/sliders.js'),
    menu: path.resolve(__dirname, './src/js/menu.js'),
  },
  performance: {
    hints: false
  },
  output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },

  plugins: [
        new HtmlWebpackPlugin({
            title: "Main HTML",
            template: "src/index.html"
          }),
  ],

    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        port: 9000,
        compress: true,
        open: true,
        hot: true
      }
};
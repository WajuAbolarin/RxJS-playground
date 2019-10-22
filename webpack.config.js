const path = require("path");

let isDev = process.env.NODE_ENV === "development";
let siteName = path.basename(__dirname);

module.exports = {
  entry: {
    main: "./src/index.js"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },

  devtool: "source-map",
  devServer: {
    contentBase: "./",
    compress: true,
    port: 3434
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};

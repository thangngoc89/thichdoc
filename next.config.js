const webpack = require("webpack");

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins = [
      ...config.plugins,
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(dev ? "dev" : "production")
      })
    ];
    return config;
  }
};

const { merge } = require("webpack-merge");
const { resolve } = require("path");
const absolutePath = resolve("");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "a365",
    projectName: "landing-br-ar",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    output: {
      path: `${absolutePath}/a365/a365-builds/landings/pages/landing-br-ar`,
      clean: true,
    },
    performance: {
      hints: false,
      maxEntrypointSize: 900000,
      maxAssetSize: 900000,
    },
  });
};

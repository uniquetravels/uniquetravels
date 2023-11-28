const { path } = require("node:path");

module.exports = {
  resolver: {
    assetExts: ["db", "cls", "css", "jpg", "mjs"],
    sourceExts: ["js", "json", "ts", "tsx", "css", "jpg", "mjs"],
    // extraNodeModules: {
    //   "app-css": path.resolve(__dirname, "App.css"),
    // },
  },
};

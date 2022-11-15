const path = require("path");

module.exports = {
  webpack: {
    alias: {
      components: path.join(__dirname, "components"),
    },
  },
};

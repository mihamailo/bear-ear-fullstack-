const webpackConfig = {
  context: resolve(__dirname),
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": resolve(__dirname),
      types: resolve(__dirname, "types"),
    },
  },
};
export default webpackConfig;

module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          cleanupAttrs: false,
          removeUselessDefs: false,
          removeUnknownsAndDefaults: false,
          removeNonInheritableGroupAttrs: false,
          removeHiddenElems: false,
          removeEmptyText: false,
          removeEmptyAttrs: false,
          removeEmptyContainers: false,
          removeUnusedNS: false,
        },
      },
    },
  ],
};

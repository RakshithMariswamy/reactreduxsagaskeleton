module.exports = api => {
  api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/react"
  ];
  const plugins = [
    "add-module-exports",
    "transform-es2015-modules-commonjs",
    "babel-plugin-dynamic-import-node",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-syntax-dynamic-import"
  ];
  return {
    presets,
    plugins
  };
};

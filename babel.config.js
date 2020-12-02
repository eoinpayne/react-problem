module.exports = (api) => {
  api.cache(false);

  const presets = [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ];

  return {
    presets,
  };
};

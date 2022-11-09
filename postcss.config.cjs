module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-preset-env"),
    // warning: "@charset" must be the first rule in the file
    {
      postcssPlugin: "internal:charset-removal",
      AtRule: {
        charset: (atRule) => {
          if (atRule.name === "charset") {
            atRule.remove();
          }
        }
      }
    }
  ]
};

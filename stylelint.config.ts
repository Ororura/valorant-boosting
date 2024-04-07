const config = {
  extends: ["stylelint-config-standard", "stylelint-config-css-modules"],
  plugins: ["stylelint-order"],
  rules: {
    "order/order": ["custom-properties", "declarations"],
    "order/properties-order": ["width", "height"],
    "selector-class-pattern": null,
  },
};

export default config;

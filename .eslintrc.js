module.exports = {
  root: true,
  "parserOptions": {
    "parser": "babel-eslint"
  },
  env: {
    browser: true,
  },
  plugins: [
    'vue'
  ],
  "extends": ["plugin:vue/essential", "airbnb-base"]
};
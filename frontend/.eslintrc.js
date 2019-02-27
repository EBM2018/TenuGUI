module.exports = {
  "extends": "airbnb",
  "env": {
    "node": true,
    "browser": true
  },
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
  "overrides": [
    {
      "files": ["*.test.js"],
      "env": {
        "jest": true,
      }
    }
  ]
};

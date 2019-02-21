module.exports = {
    "extends": "airbnb-base",
    "env": {
      "node": true
    },
    "rules": {
      "no-console": 0
    },
  "overrides": [
    {
      "files": ["*.test.js"],
      "env": {
        "jest": true,
      },
      "rules": {
        "global-require": "off", // Stubs have to happen before require statements
      }
    }
  ]
};

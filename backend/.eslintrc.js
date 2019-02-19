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
      "rules": {
        "no-undef": "off"
      }
    }
  ]
};

module.exports = {
  root : true,
  extends : [
    "@react-native-community",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser : "@typescript-eslint/parser",
  plugins : ["@typescript-eslint"],
  rules : {
    "prettier/prettier" : 0,
    "@typescript-eslint/no-shadow" : ["error"],
    "@typescript-eslint/no-unused-vars" : ["error"],
    "no-shadow" : "off",
    "no-undef" : "off",
    "quotes" : [
      "error",
      "double"
    ],
    "comma-dangle" : [
      "error",
      "never"
    ],
    "key-spacing" : [
      "error",
      {
        "beforeColon" : true
      }
    ],
    "no-trailing-spaces" : 0,
    "react-hooks/exhaustive-deps" : "error",
    "react/jsx-no-duplicate-props" : "error",
    "react/jsx-closing-bracket-location" : [
      "error",
      "after-props"
    ],
    "dot-notation" : "off",
    "react/no-unstable-nested-components" : "off"
  }
};

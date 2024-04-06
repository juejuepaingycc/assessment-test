module.exports = {
  presets : [
    "module:metro-react-native-babel-preset"
  ],
  plugins : [
    [
      "babel-plugin-module-resolver",
      {
        root : ["./src"],
        alias : {
          "assets" : "./src/assets",
          "components" : "./src/components",
          "screens" : "./src/screens",
          "utils" : "./src/utils",
          "configs" : "./src/configs",
          "data" : "./src/data",
          "stores" : "./src/stores"
        }
      }
    ],
    "react-native-paper/babel",
    "react-native-reanimated/plugin"
  ]
};

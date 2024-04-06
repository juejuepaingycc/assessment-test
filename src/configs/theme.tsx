import { DefaultTheme } from "react-native-paper";

const CustomTheme = {
    ...DefaultTheme,
    colors : {
      ...DefaultTheme.colors,
      background : "purple",
      primary : "#173b65",
      secondary : "#d7c340",
      tertiary : "#99870f"
    }
  };

export default CustomTheme;

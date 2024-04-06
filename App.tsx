import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { LogBox, StatusBar } from "react-native";
import { Provider } from 'react-redux';

import CustomTheme from './src/configs/theme';
import store from './src/stores';
import NavigationScreen from "./Navigation";

function App(): JSX.Element {

  useEffect(() =>{
    LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
  }, []);

  return (
    <PaperProvider theme={CustomTheme}>
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer>
            <StatusBar backgroundColor={CustomTheme.colors.primary} />
            <NavigationScreen />
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
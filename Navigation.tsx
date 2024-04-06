import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { UserDataItem } from "./src/stores/types";
import HomeScreen from "./src/screens/HomeScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

type RootStackParamList = {
  HomeScreen: undefined;
  WelcomeScreen: undefined;
  ProfileScreen: { user: UserDataItem };
};

const Stack = createStackNavigator<RootStackParamList>();

function NavigationScreen(): JSX.Element {

  return <Stack.Navigator screenOptions={{ headerShown : false }}>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
  </Stack.Navigator>;

}

export default NavigationScreen;

import { StackNavigationProp } from "@react-navigation/stack";

type WelcomeScreenNavigationProp = StackNavigationProp<
  {WelcomeScreen : undefined; HomeScreen : undefined},
  "WelcomeScreen"
>;

export type WelcomeScreenProps = {
  navigation: WelcomeScreenNavigationProp;
};

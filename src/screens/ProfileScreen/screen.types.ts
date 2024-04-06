import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import { UserDataItem } from "stores/types";

type ProfileScreenNavigationProp = StackNavigationProp<
  {ProfileScreen : undefined},
  "ProfileScreen"
>;

type ProfileScreenRouteProp = RouteProp<
  { ProfileScreen: { user: UserDataItem } },
  'ProfileScreen'
>;

export type ProfileScreenProps = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

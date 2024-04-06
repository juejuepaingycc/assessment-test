import { StackNavigationProp } from "@react-navigation/stack";
import { UserDataItem } from "stores/types";

type HomeScreenNavigationProp = StackNavigationProp<
  {
    HomeScreen : undefined;
    ProfileScreen: { user: UserDataItem }
  },
  "HomeScreen"
>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  users : UserDataItem[],
  matchingUser : UserDataItem,
  updateUsers: (users: UserDataItem[]) => void;
  searchByName: (name : string) => void;
  fuzzySearchByName: (name : string) => void;
  sortUsers: (order : string) => void;
};

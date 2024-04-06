import React, {useState, useEffect} from "react";
import {
  Image,
  View,
  TextInput,
  ScrollView
} from "react-native";
import { 
  Text, 
  useTheme,
  DataTable,
  IconButton
} from "react-native-paper";
import {
  heightPercentageToDP as hp, 
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { connect } from 'react-redux';

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";

import { sortByRankDescending } from "utils/funcs";
import { USER_DATA } from "data";
import { UserDataItem } from "stores/types";
import { 
  searchByName,
  fuzzySearchByName,
  updateUsers,
  sortUsers
} from "stores/actions";

import Loading from "components/Loading";
import SortModal from "components/SortModal";
import ErrorModal from "components/ErrorModal";
import styles from "./Style";
import { HomeScreenProps } from "./screen.types";

const dataArray = Object.values(USER_DATA);

const HomeScreen: React.FC<HomeScreenProps> = (props) => {

  const theme = useTheme();

  const [
    searchQuery, 
    setSearchQuery
  ] = React.useState("");
  const [
    loading,
    setLoading
  ] = useState<boolean>(false);
  const [
    showSortingModal,
    setShowSortingModal
  ] = useState<boolean>(false);
  const [
    fuzzySearchEnabled,
    setfuzzySearchEnabled
  ] = useState<boolean>(false);

  const ITEMS_PER_PAGE = 10

  const [
    page,
    setPage
  ] = React.useState<number>(0);
  const [
    rankSortDirection, 
    setRankSortDirection
  ] = useState<string>("");
  const [
    nameSortDirection, 
    setNameSortDirection
  ] = useState<string>("");
  const [
    sortBy,
    setSortBy
  ] = useState<string>("RANK_DESCENDING");
  const [
    notFoundError,
    setNotFoundError
  ] = useState<boolean>(false);
  const [
    searchingStatus,
    setSearchingStatus
  ] = useState<boolean>(false);

  const userItems : UserDataItem[] = Object.values(props.users);

  const from = page * ITEMS_PER_PAGE;
  const to = Math.min((page + 1) * ITEMS_PER_PAGE, userItems.length);

  useEffect(() => {
    // Searching Status & 
    // Fuzzy Search => if search is successful, users array must be some data, if not show Error
    // Full Name Search => if search is successful (means found matching name), then matchingUser must have data, if not show Error
    if (searchingStatus && ((fuzzySearchEnabled && props.users?.length === 0) || (!fuzzySearchEnabled && !props.matchingUser))) {
      setLoading(false)
      setNotFoundError(true);
    } 
  }, [searchingStatus, props.matchingUser, props.users, fuzzySearchEnabled]);

  useEffect(() => {
    if (props.matchingUser) {
      setSearchingStatus(false);
    }
  }, [props.matchingUser])

  useEffect(() => {
    if (sortBy === "RANK_DESCENDING") {
      setRankSortDirection("descending");
      setNameSortDirection("");
    } else if (sortBy === "RANK_ASCENDING") {
      setRankSortDirection("ascending");
      setNameSortDirection("");
    } else if (sortBy === "NAME_DESCENDING") {
      setNameSortDirection("descending");
      setRankSortDirection("");
    }
  }, [sortBy]);

  const submitFilter = (order : string) : void => {
    setShowSortingModal(false);
    setLoading(true);
    setSortBy(order);

    props.sortUsers(order);

    // setTimeout just to show Loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  const submitSearch = () : void => {

    setPage(0);

    // reset to default order
    setSortBy("RANK_DESCENDING");

    if (!searchQuery) {
      // no search query ?? just set original user data
      const sortedArray = dataArray.sort(sortByRankDescending);
      props.updateUsers(sortedArray);
      return;
    }

    setLoading(true);

    if (fuzzySearchEnabled) {
      props.fuzzySearchByName(searchQuery);
    } else {
      props.searchByName(searchQuery);
    }

    setTimeout(() => {
      // timeout just to show Loading for 1s
      setLoading(false);
      setSearchingStatus(true);
    }, 1000);
  }

  const onToggleSwitch = () : void => {
    setfuzzySearchEnabled(!fuzzySearchEnabled);
    setShowSortingModal(false);
  }

  const userHandler = (user : UserDataItem) : void => {
    props.navigation.navigate("ProfileScreen", {user});
  }

  return (
      <View style={styles.container}>
        
        <View style={[
          styles.headerContainer, {
            backgroundColor : theme.colors.primary
          }
        ]}>

          <View style={styles.headerRow}>
            <Image
              source={require("assets/images/test1.png")}
              style={styles.logo} />
            <Text style={{ color: "#fff" }}>WELCOME</Text>
           
            <IconButton
                icon={() => (
                  <Ionicons 
                    name="filter"
                    size={ hp(2.6) }
                    color="#fff" />
              )}
             onPress={() => setShowSortingModal(true)} />
          </View>

          <View style={styles.searchContent}>
            <TextInput
               value={searchQuery}
               onChangeText={setSearchQuery}
               autoCapitalize="none"
               placeholder="Search Name..."
               style={styles.searchInput} />
              <View style={styles.verline} />
              <IconButton
                icon={() => (
                <Fontisto 
                  name="search"
                  size={ hp(2.4) }
                  color={theme.colors.primary} />
              )}
              onPress={submitSearch}
            />
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <DataTable>
            <DataTable.Header>
              <View style={{width: wp(50)}}>
                <DataTable.Title 
                  textStyle={{ color : theme.colors.tertiary }} 
                  sortDirection={nameSortDirection as "ascending" | "descending" | undefined}>Name</DataTable.Title>
              </View>
              <View style={{width: wp(12)}}>
              <DataTable.Title 
                textStyle={{ color : theme.colors.tertiary }} 
                sortDirection={rankSortDirection as "ascending" | "descending" | undefined} 
                numeric>Rank</DataTable.Title>
                </View>
                <View style={{width: wp(30)}}>
              <DataTable.Title textStyle={{ color : theme.colors.tertiary }} numeric>No of Bananas</DataTable.Title>
              </View>
            </DataTable.Header>

            {userItems.slice(from, to).map((item : UserDataItem, index : number) => (
              <DataTable.Row 
                onPress={() => userHandler(item)}
                style={{backgroundColor: props?.matchingUser?.uid === item.uid ? theme.colors.secondary : "#fff"}} 
                key={item.uid}>
                <View style={{ width: wp(50) }}>
                  <DataTable.Cell textStyle={{ color : props?.matchingUser?.uid === item.uid ? "#fff" : theme.colors.primary }}>
                    {item.name ? item.name : "-"}
                  </DataTable.Cell>
                </View>
                <View style={{ width: wp(12) }}>
                  <DataTable.Cell numeric textStyle={{ color : props?.matchingUser?.uid === item.uid ? "#fff" : theme.colors.primary }}>
                    {rankSortDirection === "descending" ? ((page * 10) + index + 1) : (userItems.length - index - (page * 10))}
                  </DataTable.Cell>
                </View>
                <View style={{ width: wp(30) }}>
                  <DataTable.Cell textStyle={{ color : props?.matchingUser?.uid === item.uid ? "#fff" : theme.colors.primary }} numeric>
                    {item.bananas}
                  </DataTable.Cell>
                </View>
              </DataTable.Row>
            ))}

            {props.users?.length > 10 && <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(userItems.length / ITEMS_PER_PAGE)}
              onPageChange={(page) => setPage(page)}
              label={`${from + 1}-${to} of ${userItems.length}`}
              showFastPaginationControls
            />}

          </DataTable>
        </ScrollView>

        <Loading visible={loading} />

        {showSortingModal && <SortModal
          onClose={()=> setShowSortingModal(false)}
          onFilter={submitFilter}
          filter={sortBy}
          fuzzySearchEnabled={fuzzySearchEnabled}
          onToggleSwitch={onToggleSwitch} />}

        {notFoundError && <ErrorModal onClose={()=> {
          setNotFoundError(false);
          setSearchingStatus(false);
        }} />}

      </View>
  );
};


const mapstateToProps = (state : any) => {
  return {
      users : state.users,
      matchingUser : state.matchingUser
  }
};

const mapDispatchToProps = (dispatch : any) => {
  return {
      searchByName: (name : string) => {
          dispatch(searchByName(name))
        },
      fuzzySearchByName: (name : string) => {
        dispatch(fuzzySearchByName(name))
      },
      updateUsers: (users : UserDataItem[]) => {
        dispatch(updateUsers(users))
      },
      sortUsers: (order : string) => {
        dispatch(sortUsers(order))
      }
  };
};

export default connect(mapstateToProps,mapDispatchToProps)(HomeScreen);
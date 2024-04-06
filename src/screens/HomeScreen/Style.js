import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#fff"
  },
  headerContainer : {
    paddingLeft : wp(3),
    paddingTop : hp(1),
    paddingBottom : hp(2.5),
    borderBottomLeftRadius : hp(2),
    borderBottomRightRadius: hp(2),
    marginBottom : hp(1)
  },
  headerRow : {
    flexDirection : "row",
    justifyContent: 'space-between',
    alignItems : "center"
  },
  searchContent : {
    flexDirection : "row",
    justifyContent: 'space-between',
    alignItems : "center",
    backgroundColor:"#fff",
    width : wp(94),
    height : hp(5),
    borderRadius : hp(1),
    marginTop: hp(2)
  },
  searchInput : {
    color : "#000", 
    fontSize : hp(1.8),
    width : wp(80),
    height : hp(5),
    paddingHorizontal : wp(3),
    paddingLeft : wp(5),
    textAlignVertical: 'center',
    paddingVertical: 0
  },
  verline : {
    height : hp(2.8),
    width : 1,
    backgroundColor: "gray"
  },
  logo : {
    height : 40,
    width : 40
  }
  });
  
  export default styles;
  

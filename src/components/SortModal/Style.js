import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container : {
    backgroundColor : "rgba(0,0,0,0.6)",
    flex : 1,
    justifyContent : "center"
  },
  modalBox : {
    width : "100%",
    backgroundColor : "#fff",
    // borderRadius : 4,
    overflow : "hidden",
    borderRadius : 10,
    padding : 20,
    paddingTop : 15,
    alignItems : "center"
  },
  bottomSheet : {
    position : "absolute",
    bottom : 0,
    width : "100%"
  },
  closeIcon : {
    alignSelf : "center",
    marginBottom : 10
  },
  searchrow: {
    paddingBottom : hp(2.5), paddingTop : hp(1),
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems : "center",
    width : wp(100),
    paddingLeft : wp(8),
    paddingRight : wp(4)
  },
  titleContent : {
    paddingBottom : hp(1),
    flexDirection : "row",
    alignItems : "center",
    width : wp(100),
    borderTopWidth : 0.5,
    borderColor : 'lightgray',
    paddingLeft : wp(8),
    paddingTop : hp(2.5)
  },
  title : {
    fontSize : hp(1.9),
    textAlign : "center",
    paddingRight : wp(2),
    fontFamily : "Poppins-Medium"
  },
  footer : {
    flexDirection : "row",
    justifyContent : "space-around",
    width : wp(7),
    marginVertical : 20
  },
  filterItem : {
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-between",
    paddingLeft : wp(2),
    width : "100%",
    marginTop : hp(.7)
  },
  label : {
    color : "#000",
    fontSize : hp(1.8),
    fontFamily : "Poppins-Regular"
  },
  value : {
    color : "darkgray",
    fontSize : 14
  },
  });
  
  export default styles;
  

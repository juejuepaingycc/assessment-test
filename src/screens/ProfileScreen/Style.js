import {StyleSheet} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container : {
      flex : 1,
      backgroundColor : "rgba(0,0,0,1)"
    },
    profile : {
      position : "absolute",
      width : wp(100),
      height : hp(120),
      opacity : 0.6
    },
    bottomContent : {
      position : "absolute",
      bottom : hp(4),
      marginLeft : wp(5)
    },
    name : {
      fontSize : hp(2.7),
      color : "#fff",
      fontFamily : "Poppins-Medium",
      textTransform : "uppercase",
      paddingBottom : hp(1)
    },
    contentBg : {
      width : wp(90),
      // height : hp(30),
      backgroundColor: 'rgba(23, 59, 101, 0.88)',
      borderRadius : hp(2),
      paddingHorizontal : wp(7),
      paddingVertical : hp(3.5)
    },
    backBtn: {
      top : hp(7),
      left : wp(5),
      zIndex : 5
    },
    row: {
      flexDirection: 'row',
      justifyContent : "space-between"
    },
    block : {
     width:wp(37)
    },
    icon : {
      width : wp(8),
      height : hp(3),
      resizeMode : "contain"
    },
    label : {
      color : '#ccccc4',
      fontSize : hp(1.5),
      fontFamily : "Poppins-Regular"
    },
    value : {
      color : '#fff',
      fontSize : hp(3.1),
      fontFamily : "Poppins-Medium",
      marginBottom : hp(-0.6)
    }
  });

export default styles;

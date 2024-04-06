import {StyleSheet} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  landingImg : {
    height : '100%',
    width : wp(100),
    resizeMode : "cover"
},
content : {
  position : "absolute",
  paddingTop : hp(9),
  paddingBottom : hp(4.3),
  justifyContent : "space-between",
  width : wp(100),
  height : hp(100)
},
title : {
  fontFamily : "Zuume Soft Bold", 
   fontSize : hp(5.5),
   letterSpacing : 1,
   textShadowOffset : {width : 0, height : 0},
   textShadowRadius : 18,
   textAlign : "center",
   opacity : 0.8
     
},
message : {
  fontFamily : "Zuume Soft Bold", 
  textTransform : "uppercase",
  fontSize : hp(3.5),
  textShadowOffset : {width : 0, height : 0},
  textShadowRadius : 18,
  width : wp(70),
  paddingLeft : wp(4),
  opacity : 0.8
},
arrows : {
  flexDirection : "row",
  alignSelf : "center"
}
  });

export default styles;

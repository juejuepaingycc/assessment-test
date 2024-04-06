import React from "react";
import {
  View, Modal 
} from "react-native";
import { UIActivityIndicator } from "react-native-indicators";
import { useTheme } from "react-native-paper";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Loading = (props: {visible : boolean}) => {

  const theme = useTheme();

  if (props.visible) {
    return (
      <Modal visible={true} transparent={true}>
        <View style={{
          backgroundColor : "rgba(0,0,0,0.01)",
          flex : 1,
          alignItems : "center",
          justifyContent : "center"
        }}>
          <UIActivityIndicator color={theme.colors.secondary} size={hp(6.5)} />
        </View>
      </Modal>
    );
  } else {
    return null;
  }
};

export default Loading;

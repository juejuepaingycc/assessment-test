import React from "react";
import {
  View, 
  Modal, 
  TouchableOpacity 
} from "react-native";
import {
  Button, 
  Text
} from "react-native-paper";
import { heightPercentageToDP as hp} from "react-native-responsive-screen";

import styles from "./Style";

const ErrorModal = (props: { onClose: () => void; }) => {
  const { onClose } = props;

  return (
    <Modal
      transparent={true}
      visible={true}
      animationType="fade"
      onRequestClose={onClose}>
        <TouchableOpacity 
          activeOpacity={1} 
          onPress={onClose} 
          style={styles.modalView}>
            <View style={styles.modalBg}>
                <Text style={ styles.title }>
                  SORRY!
                </Text>
                <Text style={ styles.descrition }>
                  This user name does not exist! Please specify an existing user name!
                </Text>
                <Button 
                  mode="contained" 
                  onPress={onClose} 
                  style={{
                      marginVertical : hp(2)
                  }}>
                  OK
                </Button>
            </View>
        </TouchableOpacity>
    </Modal>
  );
};

export default ErrorModal;

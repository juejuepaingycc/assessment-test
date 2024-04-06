import React from "react";
import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Text
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "./Style"
import { ProfileScreenProps } from "./screen.types";

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {

  const {user} = route.params;

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <TouchableOpacity 
        activeOpacity={0.7} 
        onPress={()=> navigation.goBack()}>
        <Ionicons 
          name="chevron-back"
          size={ hp(4.5) }
          color="#fff"
          style={styles.backBtn} />
      </TouchableOpacity>

      <Image
        source={require("assets/images/characters.jpg")}
        style={styles.profile} />
      
      <View style={styles.bottomContent}>
        <Text style={styles.name}>{`#${user.name}`}</Text>

        <View style={styles.contentBg}>

          <View style={styles.row}>
            <View style={styles.block}>
              <Text style={styles.value}>{user.bananas}</Text>
              <Image
                source={require("assets/images/banana.png")}
                style={styles.icon} />
            </View>
            <View style={styles.block}>
              <Text style={styles.value}>{user.stars}</Text>
              <Image
                source={require("assets/images/star.png")}
                style={styles.icon} />
            </View>
          </View>

          <View style={[styles.row, {marginTop : hp(2.5)}]}>
            <View style={styles.block}>
              <Text style={styles.value}>{user.longestStreak}</Text>
              <Text style={styles.label}>Longest Streak</Text>
            </View>
            <View style={styles.block}>
              <Text style={[styles.value]}>120</Text>
              <Text style={styles.label}>Playtime h</Text>
            </View>
          </View>

          <View style={[styles.row, {marginTop : hp(2.5)}]}>
            <View style={styles.block}>
              <Text style={styles.value}>22</Text>
              <Text style={styles.label}>Age</Text>
            </View>
            <View style={styles.block}>
              <Text style={[styles.value]}>Diamond</Text>
              <Text style={styles.label}>Membership</Text>
            </View>
          </View>

        </View>

      </View>
    </View>
  );
};

export default ProfileScreen;

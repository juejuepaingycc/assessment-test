import React, { useEffect } from "react";
import {
  View,
  Image,
  StatusBar,
  Text
} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming
} from "react-native-reanimated";
import AntDesign from "react-native-vector-icons/AntDesign";

import { getCurrentTime } from "utils/funcs";
import styles from "./Style"
import { WelcomeScreenProps } from "./screen.types";

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {

  const time = getCurrentTime();
  const SHADOW_RADIUS = 18;
  const GESTURE_CONFIG = {
    velocityThreshold : 0.3,
    directionalOffsetThreshold : 80
  };

  const opacity1 = useSharedValue(0.2);
  const opacity2 = useSharedValue(1);
  const opacity3 = useSharedValue(1);

  const animatedArrow1 = useAnimatedStyle(() => {
    return {
      opacity : opacity1.value
    };
  });

  const animatedArrow2 = useAnimatedStyle(() => {
    return {
        opacity : opacity2.value
    };
  });

  const animatedArrow3 = useAnimatedStyle(() => {
    return {
        opacity : opacity3.value
    };
  });

  useEffect(()=> {
    const timeout1 = setTimeout(() => {
        setOpacity2();
    }, 400);
    const timeout2 = setTimeout(() => {
        setOpacity3();
    }, 800);
    
    const interval = setInterval(() => {
        setOpacity1();
        setTimeout(() => {
            setOpacity2();
        }, 400);
        setTimeout(() => {
            setOpacity3();
        }, 800);
    }, 1200);
    return () => { 
        clearInterval(interval);
        clearTimeout(timeout1);
        clearTimeout(timeout2);
    };
  }, []);

  const setOpacity1 = () => {
    opacity1.value = withTiming(0.2);
    opacity3.value = withTiming(1);
  };

  const setOpacity2 = () => {
    opacity1.value = withTiming(1);
    opacity2.value = withTiming(0.2);
  };

  const setOpacity3 = () => {
    opacity2.value = withTiming(1);
    opacity3.value = withTiming(0.2);
  };

  const titleColor = time === "morning" ? "#f5b264" :
      time === "afternoon" ? "#000" :
      "#fff";
  const shadowColor = time === "morning" ? "#f5b264" :
      time === "afternoon" ? "#000" :
      "#fff";
      
  const  onSwipeRight = () => {
    navigation.replace("HomeScreen");
  };

  const SwipeIcon = () => <AntDesign
    name="right"
    size={40}
    color={
      time === "morning" ? "#f59c32" :
      time === "afternoon" ? "#fff" :
      "#fff"
    }
    style={{
      marginRight : wp(-3)
    }}
    />

  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <GestureRecognizer
        onSwipeRight={() => onSwipeRight()}
        config={GESTURE_CONFIG}>
        <Image 
            style={styles.landingImg} 
            source={
              time === "morning" ?
                  require("assets/images/morning.jpg") :
              time === "afternoon" ? 
                  require("assets/images/afternoon.jpeg") :
              require("assets/images/night.jpg")
            } />
        <View style={styles.content}>
          <Text 
            style={[
                styles.title, 
                {
                  color : titleColor,
                  textShadowColor : shadowColor,
                  textShadowRadius : SHADOW_RADIUS
                }
            ]}>
            WELCOME
          </Text>
            
          <View style={styles.arrows}>
            <Animated.View style={animatedArrow1}>
              <SwipeIcon />
            </Animated.View>
            <Animated.View style={animatedArrow2}>
              <SwipeIcon />
            </Animated.View>
            <Animated.View style={animatedArrow3}>
              <SwipeIcon />
            </Animated.View>
          </View>
        </View>
      </GestureRecognizer>
  </View>
  );
};

export default WelcomeScreen;

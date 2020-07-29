import React, { ReactElement, cloneElement } from "react";
import { StyleSheet } from "react-native";
import Animated, { eq, interpolate } from "react-native-reanimated";
import { ICON_SIZE, DURATION } from "../../../src/Constants";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { withTransition } from "react-native-redash";
const { View } = Animated;

interface TabProps {
  children: ReactElement;
  index: number;
  text: string;
  onPress: () => void;
  transition: Animated.Node<number>;
  active: Animated.Node<number>;
}

const Tab = ({ children, onPress, transition, active, index }: TabProps) => {
  const isActive = eq(active, index);
  const activeTransition = withTransition(isActive, { duration: DURATION });

  /* Interpolate with active transition*/
  const translateIY = interpolate(activeTransition, {
    inputRange: [0, 1],
    outputRange: [0, -3],
  });

  const width = interpolate(activeTransition, {
    inputRange: [0, 1],
    outputRange: [0, ICON_SIZE * 2],
  });

  const hide = interpolate(activeTransition, {
    inputRange: [0, 0.1, 0.5, 1],
    outputRange: [1, 0, 0, 0],
  });

  return (
    <TouchableWithoutFeedback {...{ onPress, index }}>
      <View
        style={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              opacity: hide,
            },
          ]}
        >
          {children}
        </View>

        <View
          style={{
            ...styles.icon,
            position: "absolute",
            width,
            height: 64,
            transform: [{ translateY: translateIY }],
          }}
        >
          {cloneElement(children, { active: true })}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  icon: {
    overflow: "hidden",
  },
});

export default Tab;

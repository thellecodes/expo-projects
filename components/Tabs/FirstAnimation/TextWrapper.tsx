import React from "react";
import { Text } from "react-native";
import Animated, {
  eq,
  SpringUtils,
  interpolate,
} from "react-native-reanimated";
const { View } = Animated;
import { withTransition, withSpringTransition } from "react-native-redash";

interface TextWrapperProps {
  active: Animated.Node<number>;
  text: string;
  index: number;
}

const TextWrapper = ({ text, active, index }: TextWrapperProps) => {
  const isActive = eq(active, index);
  const activeTranstion = withTransition(isActive, { duration: 150 });

  const bounce = withSpringTransition(activeTranstion, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: new Animated.Value(3),
  });

  const showText = interpolate(activeTranstion, {
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const translateY = interpolate(bounce, {
    inputRange: [0, 1],
    outputRange: [20, 16],
  });

  return (
    <View
      style={{
        position: "absolute",
        opacity: showText,
        translateY,
      }}
    >
      <Text
        style={{
          fontWeight: "900",
          fontFamily: "Cabin-Bold",
          fontSize: 12,
          textTransform: "capitalize",
        }}
      >
        {text}
      </Text>
    </View>
  );
};
export default TextWrapper;

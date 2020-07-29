import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Covid = () => {
  return (
    <Svg
      width={104}
      height={104}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ff4500"
      fillRule={"evenodd"}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Circle cx={12} cy={8} r={7} />
      <Path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </Svg>
  );
};
export default Covid;

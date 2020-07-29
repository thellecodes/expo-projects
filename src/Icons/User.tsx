import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {Colors, IconProps, ICON_SIZE} from '../Constants';

function User({active}: IconProps) {
  return (
    <Svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      stroke={active ? Colors.primary : Colors.border}
      fill={active ? Colors.primary : 'none'}
      fillRule="evenodd"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <Circle cx={12} cy={7} r={4} />
    </Svg>
  );
}

export default User;

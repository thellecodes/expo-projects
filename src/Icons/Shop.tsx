import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors, IconProps, ICON_SIZE} from '../Constants';

function Shop({active}: IconProps) {
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
      <Path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
    </Svg>
  );
}

export default Shop;

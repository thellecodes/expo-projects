import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors, IconProps, ICON_SIZE} from '../Constants';

const Coffee = ({active}: IconProps) => {
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
      <Path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
    </Svg>
  );
};

export default Coffee;

import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors, IconProps, ICON_SIZE} from '../Constants';

const Book = ({active}: IconProps) => {
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
      <Path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
    </Svg>
  );
};

export default Book;

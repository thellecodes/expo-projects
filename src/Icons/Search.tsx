import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {Colors, IconProps, ICON_SIZE} from '../Constants';

const Search = ({active}: IconProps) => {
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
      <Circle cx={11} cy={11} r={8} />
      <Path d="M21 21l-4.35-4.35" />
    </Svg>
  );
};

export default Search;

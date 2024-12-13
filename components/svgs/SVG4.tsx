import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

import { THEME } from '~/lib/constants';

interface ISVG4 {
  height?: number;
}

const SVG4 = ({ height = 100 }: ISVG4) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <Svg
      width={screenWidth}
      height={height}
      viewBox={`0 0 ${screenWidth} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        zIndex: -1,
      }}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0.8">
          <Stop offset="0" stopColor={THEME.light.secondary} stopOpacity="1" />
          <Stop offset="1" stopColor={THEME.light.accent} stopOpacity="0.8" />
        </LinearGradient>
      </Defs>
      <Path
        d={`
          M0 0
          L${screenWidth} 0
          L${screenWidth} ${height * 0.4}
          C${screenWidth * 0.85} ${height * 0.5}, ${screenWidth * 0.7} ${height * 0.6}, ${screenWidth * 0.5} ${height * 0.7}
          C${screenWidth * 0.3} ${height * 0.8}, ${screenWidth * 0.15} ${height * 0.85}, 0 ${height * 0.9}
          L0 0
          Z
        `}
        fill="url(#grad)"
      />
      <Path
        d={`
          M0 0
          L${screenWidth} 0
          L${screenWidth} ${height * 0.3}
          C${screenWidth * 0.75} ${height * 0.4}, ${screenWidth * 0.6} ${height * 0.5}, ${screenWidth * 0.4} ${height * 0.6}
          C${screenWidth * 0.2} ${height * 0.7}, ${screenWidth * 0.1} ${height * 0.75}, 0 ${height * 0.8}
          L0 0
          Z
        `}
        fill="url(#grad)"
        opacity="0.7"
      />
    </Svg>
  );
};

export default SVG4;

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
          L${screenWidth} ${height * 0.45}
          C${screenWidth} ${height * 0.45}, ${screenWidth * 0.8} ${height * 0.8}, ${screenWidth * 0.6} ${height * 0.7}
          L0 ${height * 0.1}
          L0 0
          Z
        `}
        fill="url(#grad)"
      />
      <Path
        d={`
          M0 0
          L${screenWidth} 0
          L${screenWidth} ${height * 0.35}
          C${screenWidth} ${height * 0.35}, ${screenWidth * 0.75} ${height * 0.7}, ${screenWidth * 0.55} ${height * 0.6}
          L0 ${height * 0.05}
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

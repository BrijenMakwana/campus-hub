import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

import { THEME } from '~/lib/constants';

interface ISVG6 {
  height?: number;
}

const SVG6 = ({ height = 100 }: ISVG6) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <Svg
      width={screenWidth}
      height={height}
      viewBox={`0 0 ${screenWidth} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        zIndex: 1,
      }}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0.8">
          <Stop offset="0" stopColor={THEME.light.secondary} stopOpacity="1" />
          <Stop offset="1" stopColor={THEME.light.accent} stopOpacity="0.8" />
        </LinearGradient>
      </Defs>

      {/* Left side wave */}
      <Path
        d={`
          M0 ${height * 0.2}
          C${screenWidth * 0.2} ${height * 0.15},
            ${screenWidth * 0.1} ${height * 0.4},
            ${screenWidth * 0.2} ${height * 0.5}
          C${screenWidth * 0.3} ${height * 0.6},
            ${screenWidth * 0.1} ${height * 0.8},
            0 ${height * 0.7}
          L0 ${height * 0.2}
          Z
        `}
        fill="url(#grad)"
        opacity="0.7"
      />

      {/* Right side wave */}
      <Path
        d={`
          M${screenWidth} ${height * 0.3}
          C${screenWidth * 0.8} ${height * 0.25},
            ${screenWidth * 0.9} ${height * 0.5},
            ${screenWidth * 0.8} ${height * 0.6}
          C${screenWidth * 0.7} ${height * 0.7},
            ${screenWidth * 0.9} ${height * 0.9},
            ${screenWidth} ${height * 0.8}
          L${screenWidth} ${height * 0.3}
          Z
        `}
        fill="url(#grad)"
        opacity="0.6"
      />

      {/* Additional decorative wave on left */}
      <Path
        d={`
          M0 ${height * 0.3}
          C${screenWidth * 0.15} ${height * 0.25},
            ${screenWidth * 0.05} ${height * 0.5},
            ${screenWidth * 0.15} ${height * 0.6}
          L0 ${height * 0.5}
          L0 ${height * 0.3}
          Z
        `}
        fill="url(#grad)"
        opacity="0.4"
      />

      {/* Additional decorative wave on right */}
      <Path
        d={`
          M${screenWidth} ${height * 0.4}
          C${screenWidth * 0.85} ${height * 0.35},
            ${screenWidth * 0.95} ${height * 0.6},
            ${screenWidth * 0.85} ${height * 0.7}
          L${screenWidth} ${height * 0.6}
          L${screenWidth} ${height * 0.4}
          Z
        `}
        fill="url(#grad)"
        opacity="0.3"
      />
    </Svg>
  );
};

export default SVG6;

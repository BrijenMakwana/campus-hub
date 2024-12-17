import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

import { THEME } from '~/lib/constants';

interface ISVG4 {
  width?: number;
  height?: number;
}

const SVG4 = ({ width = 100, height = 200 }: ISVG4) => {
  return (
    <Svg
      width={width}
      height={height}
      style={{
        position: 'absolute',
        right: 0,
        top: 30,
        zIndex: -1,
      }}>
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0" stopColor={THEME.light.secondary} stopOpacity="1" />
          <Stop offset="1" stopColor={THEME.light.accent} stopOpacity="0.8" />
        </LinearGradient>
      </Defs>
      <Path
        d={`
          M${width} 0
          C${width * 0.3} ${height * 0.2}, ${width * 0.1} ${height * 0.4}, ${width * 0.7} ${height * 0.5}
          C${width * 0.9} ${height * 0.55}, ${width} ${height * 0.6}, ${width} ${height * 0.7}
          L${width} 0
          Z
        `}
        fill="url(#grad)"
      />
      <Path
        d={`
          M${width} 0
          C${width * 0.4} ${height * 0.15}, ${width * 0.2} ${height * 0.35}, ${width * 0.8} ${height * 0.45}
          C${width} ${height * 0.5}, ${width} ${height * 0.55}, ${width} ${height * 0.65}
          L${width} 0
          Z
        `}
        fill="url(#grad)"
        opacity="0.7"
      />
    </Svg>
  );
};

export default SVG4;

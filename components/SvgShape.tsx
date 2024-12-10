import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

import { THEME } from '~/lib/constants';

interface ISvgShape {
  height?: number;
}

const SvgShape = ({ height = 380 }: ISvgShape) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <Svg
      width={screenWidth}
      height={height}
      viewBox={`0 0 ${screenWidth} 380`}
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
          L${screenWidth} 90
          C${screenWidth * 0.85} 120, ${screenWidth * 0.7} 160, ${screenWidth * 0.5} 220
          C${screenWidth * 0.3} 280, ${screenWidth * 0.15} 320, 0 340
          L0 0
          Z
        `}
        fill="url(#grad)"
      />
      <Path
        d={`
          M0 0
          L${screenWidth} 0
          L${screenWidth} 70
          C${screenWidth * 0.75} 100, ${screenWidth * 0.6} 140, ${screenWidth * 0.4} 200
          C${screenWidth * 0.2} 260, ${screenWidth * 0.1} 300, 0 310
          L0 0
          Z
        `}
        fill="url(#grad)"
        opacity="0.7"
      />
    </Svg>
  );
};

export default SvgShape;

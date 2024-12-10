import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

import { THEME } from '~/lib/constants';

interface ISVG2 {
  width?: number;
  height?: number;
}

const SVG2 = ({ width = 120, height = 200 }: ISVG2) => {
  return (
    <Svg
      width={width}
      height={height}
      style={{ position: 'absolute', right: 0, top: height * 0.3 }}>
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor={THEME.light.secondary} />
          <Stop offset="100%" stopColor={THEME.light.accent} />
        </LinearGradient>
      </Defs>
      <Path
        d={`M${width} 0
          C${width * 0.6} ${height * 0.2}, ${width * 0.4} ${height * 0.4}, ${width} ${height * 0.6}
          L${width} 0 Z`}
        fill="url(#grad)"
      />
    </Svg>
  );
};

export default SVG2;

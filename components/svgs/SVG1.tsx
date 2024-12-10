import { Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

import { THEME } from '~/lib/constants';

interface ISVG1 {
  height?: number;
}

const SVG1 = ({ height = 300 }: ISVG1) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <Svg width={screenWidth} height={height} style={{ position: 'absolute', top: 0 }}>
      <Defs>
        <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor={THEME.light.secondary} />
          <Stop offset="100%" stopColor={THEME.light.accent} />
        </LinearGradient>
      </Defs>
      <Path
        d={`M0 0
           L${screenWidth} 0
           L${screenWidth} ${height * 0.65}
           C${screenWidth} ${height * 0.74}, ${screenWidth * 0.97} ${height * 0.79}, ${screenWidth * 0.9} ${height * 0.82}
           C${screenWidth * 0.82} ${height * 0.85}, ${screenWidth * 0.72} ${height * 0.79}, ${screenWidth * 0.64} ${height * 0.85}
           C${screenWidth * 0.56} ${height * 0.91}, ${screenWidth * 0.46} ${height * 0.94}, ${screenWidth * 0.38} ${height * 0.91}
           C${screenWidth * 0.31} ${height * 0.88}, ${screenWidth * 0.21} ${height * 0.82}, ${screenWidth * 0.1} ${height * 0.85}
           C${screenWidth * 0.05} ${height * 0.87}, 0 ${height * 0.88}, 0 ${height * 0.79}
           L0 0`}
        fill="url(#gradient)"
      />
    </Svg>
  );
};

export default SVG1;

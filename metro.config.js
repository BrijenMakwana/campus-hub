const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('metro-config');
const { withNativeWind } = require('nativewind/metro');

// eslint-disable-next-line no-undef
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'), 'zip'],
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
  transformer: {
    ...defaultConfig.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer/expo'),
  },
};

// eslint-disable-next-line no-undef
module.exports = withNativeWind(mergeConfig(defaultConfig, config), {
  input: './global.css',
});

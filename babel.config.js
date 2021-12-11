const presets = ['module:metro-react-native-babel-preset'];
const plugins = [];

plugins.push([
  'module-resolver',
  {
    root: ['.'],
    extensions: ['.js', '.json', '.tsx', '.ts'],
    alias: {
      '@': './src',
    },
  },
]);

plugins.push(['react-native-reanimated/plugin']);

module.exports = {
  presets,
  plugins,
};

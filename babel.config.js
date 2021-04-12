module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console']
    }
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@src': ['./src/'],
          '@assets': ['./src/assets/'],
          '@configs': ['./src/configs/'],
          '@constantsAPP': ['./src/configs/Constants.ts'],
          '@styles': ['./src/styles/'],
          '@helpers': ['./src/utils/helpers/'],
          '@components': ['./src/components/'],
          '@atoms': ['./src/components/atoms/'],
          '@molecules': ['./src/components/molecules/'],
          '@organisms': ['./src/components/organisms/']
        }
      }
    ],
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg']
      }
    ]
  ]
};

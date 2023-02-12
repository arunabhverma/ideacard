module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'dotenv-import',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false,
      }
  ],
  [
    'module-resolver',
    {
      root: ['.'],
      extensions: [
        '.ios.ts',
        '.android.ts',
        '.ts',
        '.ios.tsx',
        '.android.tsx',
        '.tsx',
        '.jsx',
        '.js',
        '.json',
      ],
      alias: {
        '@components': ['./src/components'],
        '@containers': ['./src/containers'],
        '@services': ['./src/services'],
        '@images': ['./src/assets/images'],
        '@svg': ['./src/assets/svg'],
        '@config': ['./src/config'],
        '@utils': ['./src/utils'],
        '@theme': ['./src/theme'],
        '@redux': ['./src/redux']
      },
    },
  ],
]
}
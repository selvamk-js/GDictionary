module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],

  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          components: './src/components',
          containers: './src/containers',
          utils: './src/utils',
          assets: './src/assets',
          app: './src/app/',
          styles: './src/styles',
          constants: './src/constants',
          hooks: './src/hooks',
          config: './src/config',
          services: './src/services',
          types: './src/types',
          helper: './src/helper',
        },
      },
    },
  },
};

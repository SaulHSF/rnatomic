module.exports = {
  root: true,
  env: {
    'react-native/react-native': true
  },
  plugins: [
    '@react-native-community',
    'react',
    'react-native',
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
    'prettier',
    'react-hooks',
    'eslint-plugin-tsdoc'
  ],
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      arrowFunctions: true
    }
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
      pragma: 'React'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./src']
      }
    },
    'react-native/style-sheet-object-names': ['EStyleSheet', 'OtherStyleSheet', 'PStyleSheet']
  },
  rules: {
    'tsdoc/syntax': 'warn',
    // eslint
    'global-require': 'off', // https://eslint.org/docs/rules/global-require
    'no-inner-declarations': 'off', // https://eslint.org/docs/rules/no-inner-declarations
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-return-assign': ['error', 'always'],
    'no-use-before-define': 'off',
    'import/no-unresolved': [0, { commonjs: false, amd: false }],
    'class-methods-use-this': 'off',
    camelcase: ['error', { allow: ['^UNSAFE_'] }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'import/no-dynamic-require': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': [0, { maxDepth: 1 }],
    // prettier
    'prettier/prettier': [2, { trailingComma: 'none' }],
    'comma-dangle': 0,
    // react-native
    'react-native/split-platform-components': 2,
    'react-native/no-single-element-style-arrays': 2,
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': ['error', { skip: ['TextSeeMore', 'Badge', 'TouchableText'] }],
    // react hooks
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    // react
    'jsx-quotes': 0,
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': [
      0,
      {
        html: 'ignore',
        custom: 'ignore',
        explicitSpread: 'ignore',
        exceptions: ['Image', 'View', 'Text', 'TouchableOpacity']
      }
    ],
    'react/forbid-prop-types': [
      'off',
      { forbid: ['any', 'array', 'object'], checkContextTypes: true, checkChildContextTypes: true }
    ],
    'react/prefer-stateless-function': [0, { ignorePureComponents: false }],
    'react/state-in-constructor': [1, 'never'],
    'react/static-property-placement': [
      'warn',
      'property assignment',
      {
        propTypes: 'static public field',
        defaultProps: 'static public field'
      }
    ],
    'react/destructuring-assignment': [1, 'always', { ignoreClassFields: false }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }],
    // typescript
    '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    '@typescript-eslint/no-explicit-any': 'off'
  }
};

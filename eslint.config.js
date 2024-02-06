import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
    'require-await': 'error',
    'no-empty-function': 'error',
    'no-func-assign': 'error',
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/multi-word-component-names': ['error', {
      ignores: [
        'Button',
        'Alert',
        'Card',
        'Dialog',
        'Drawer',
        'Spinner',
        'Navbar',
      ],
    }],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
      },
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },
  // stylistic: {
  //   indent: tab, // 4, or 'tab'
  //   quotes: 'single', // or 'double'
  // },
})

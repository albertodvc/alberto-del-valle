module.exports = {
  extends: ['react-app', 'airbnb-base'],
  globals: {
        __PATH_PREFIX__: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
      'no-underscore-dangle': 0,
      'comma-dangle': ['error', {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'never',
        'exports': 'only-multiline',
        'functions': 'only-multiline'
      }],
      'object-curly-newline': ['error', {
        'ImportDeclaration': 'never'
      }],
      'implicit-arrow-linebreak': 0,
      'no-return-assign': ['error', 'except-parens'],
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'vue/script-indent': ['error', 'tab', { "baseIndent": 1 }],
      'arrow-parens': [2, 'as-needed', { 'requireForBlockBody': true }]
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'global-require': 0,
        'prefer-destructuring': [0, {AssignmentExpression: {object: true}}],
      },
    },
  ],
  }

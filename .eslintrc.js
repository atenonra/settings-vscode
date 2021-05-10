module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true, // позволяет завершать пробелами строки кода
        ignoreComments: true // позволяет завершать пробелами блоки комментариев
      }
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'never', // данное правило запрещает запятые в конце элементов
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'linebreak-style': ['error', 'windows'] // принудительно использует окончания строк Windows: \r\n для CRLF
    // 'linebreak-style': ['error', 'unix'] // (по умолчанию) предписывает использование окончаний строк Unix: \n для LF.
  }
};

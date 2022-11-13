module.exports = {
    parser: '@babel/eslint-parser',
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    overrides: [],
    settings: {
        react: {
            version: 'detect',
        },
    },
    files: ['src/**/*.js'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    },
};

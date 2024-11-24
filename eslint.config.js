import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignorar diretórios específicos como dist
  { ignores: ['dist'] },

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2021, // A versão mais recente que é a mais utilizada atualmente
      globals: globals.browser, // Define os globais do navegador
      parserOptions: {
        ecmaVersion: 'latest', // Versão do ECMAScript mais recente
        ecmaFeatures: { jsx: true }, // Ativa o suporte ao JSX
        sourceType: 'module', // Habilita o uso de módulos ES6
      },
    },
    settings: {
      react: { version: 'detect' }, // Detecta automaticamente a versão do React
    },
    plugins: {
      react, // Plugin do React
      'react-hooks': reactHooks, // Plugin para React Hooks
      'react-refresh': reactRefresh, // Plugin para React Fast Refresh
    },
    rules: {
      // Regras recomendadas do ESLint e React
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Desabilitar regra para impedir links com target="_blank"
      'react/jsx-no-target-blank': 'off',

      // Regra para o React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Permite exportações constantes
      ],
    },
  },
];

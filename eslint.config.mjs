import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'

export default defineConfig([
  // Ignore patterns for directories that don't need linting
  {
    ignores: ['**/node_modules/**', '**/build/**', '**/public/**']
  },
  // Base JavaScript configuration
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { js },
    extends: ['js/recommended']
  },
  // Node.js global variables
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: { globals: globals.node }
  },
  // TypeScript-specific configuration
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  },
  // Import and TypeScript plugin rules
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: {
      import: importPlugin,
      '@typescript-eslint': tseslint.plugin
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      ...tseslint.plugin.configs.recommended.rules
    }
  },
  // Recommended TypeScript rules
  tseslint.configs.recommended
])

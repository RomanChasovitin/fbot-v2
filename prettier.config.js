/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'avoid',
  semi: false,
  printWidth: 80,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  bracketSameLine: false,
  jsxSingleQuote: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^@/app/(.*)$',
    '',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
}

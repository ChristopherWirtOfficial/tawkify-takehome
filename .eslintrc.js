/* Run these to add (I think) everything

yarn -D add eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin@^5.13.0 @typescript-eslint/parser@^5.0.0
yarn -D add @typescript-eslint/parser @typescript-eslint/eslint-plugin @typescript-eslint/parser @typescript-eslint/eslint-plugin-tslint @typescript-eslint/utils @typescript-eslint/typescript-estree @typescript-eslint/scope-manager
npx install-peerdeps --dev eslint-config-airbnb

*/
module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "max-len": [1, { "code": 120, ignoreComments: true }], // Keep this, but maybe enforce max-len for comments?

    // BEGIN TEST OVERRIDES - THIS SHOULD BE EMPTY BEFORE DECIDING
    "indent": [2, 2],
    // END TEST OVERRIDES

    // Rules below this point are real overrides. Rules above this are likely temporary overrides

    "react/function-component-definition": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "no-multiple-empty-lines": [2, { "max": 2 }], // Error, but let people have 2
    "react/jsx-one-expression-per-line": 0, // This rule sucks
    "object-curly-spacing": [1, "always"],
    "react/jsx-curly-spacing": [2, {
      "when": "always",
      children: true,
    }],
    "array-bracket-spacing": [2, "always"],
    "arrow-parens": [2, "as-needed"],
    "no-console": [1, { "allow": ["warn", "error"] }],
    // toDO: This ain't working like I want
    //"object-property-newline": [2, { "allowAllPropertiesOnSameLine": true }],
    "object-curly-newline": [2, { minProperties: 5, multiline: true, consistent: true }],
    "no-plusplus": "off",

    // Turning these both off because we're using TS and they're in the way
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "react-hooks/exhaustive-deps": [
      "warn", {
        "additionalHooks": "(useRecoilCallback|useRecoilTransaction_UNSTABLE)"
      },
    ],
    "operator-linebreak": [2, "after"],
  },
};

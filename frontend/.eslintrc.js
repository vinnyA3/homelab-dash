module.exports = {
  env: {
    browser: true,
    es6: true,
    es2017: true,
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "filenames", "import"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
      },
    ],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "no-underscore-dangle": ["error", { allow: ["__typename"] }],
    "filenames/match-exported": ["error", [null, "kebab"]],
    "filenames/match-regex": ["error", "^[a-z]+(-[a-z]+)*(\\.[a-z]+)?$", true], // kebab-case with optional suffix (foo-bar.config.js)
    "import/no-cycle": [2, { ignoreExternal: true }],
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          "parent",
          ["sibling", "index"],
        ],
        "newlines-between": "always-and-inside-groups",
      },
    ],
    "import/no-named-as-default": 0,
    "sort-keys": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../../*"], // relative imports are allowed only up two one directory above the current
      },
    ],
    "arrow-body-style": [
      "error",
      "as-needed",
      { requireReturnForObjectLiteral: true },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/stories/index.tsx",
          "**/storybook/*",
          "**/routes/Dev/BrazeIAM/index.tsx",
          "**/__tests__/*",
          "./scripts/*",
        ],
      },
    ],
  },
  overrides: [
    {
      // disable the rule specifically for Javascript files
      files: ["*.js"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": ["off"],
      },
    },
    {
      // disable the rules specifically for TypeScript declaration files
      files: ["*.d.ts"],
      rules: {
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": ["off"],
      },
    },
  ],
};

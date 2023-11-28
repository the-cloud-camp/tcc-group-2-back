const commonRestrictedImports = [
  {
    group: ['ejs'],
    message: `Use
// eslint-disable-next-line @typescript-eslint/no-require-imports
   import ejsModule = require('../../common/utils/ejs.util');

 const ejs = ejsModule.default;`,
  },
  {
    group: ['dayjs'],
    message: "Import from 'src/common/utils/dayjs.util' instead.",
  },
  {
    group: ['@nestjs/typeorm'],
    importNames: ['InjectRepository'],
    message: 'Prefer custom repository pattern.',
  },
  {
    group: ['@nestjs/common'],
    // These error classes are meant to be used with REST endpoints. Chance that

    // we would need them should be rare. So we add them to forbidden list to

    // prevent misuse.
    importNames: [
      'BadGatewayException',
      'BadRequestException',
      'ConflictException',
      'ForbiddenException',
      'GatewayTimeoutException',
      'GoneException',
      'HttpException',
      'HttpVersionNotSupportedException',
      'ImATeapotException',
      'InternalServerErrorException',
      'MethodNotAllowedException',
      'MisdirectedException',
      'NotAcceptableException',
      'NotFoundException',
      'NotImplementedException',
      'PayloadTooLargeException',
      'PreconditionFailedException',
      'RequestTimeoutException',
      'ServiceUnavailableException',
      'UnauthorizedException',
      'UnprocessableEntityException',
      'UnsupportedMediaTypeException',
    ],
    message:
      'For GraphQL requests, prefer custom error class extended from GraphQLError.',
  },
];
const commonAllowedPatterns = [
  '../**/*',
  '!../**/*/',
  '!../constants/*',
  '!../enums/*',
  '!../errors/*',
  '!../types/*',
  '!../utils/*',
  '!**/common/constants/**/*',
  '!**/common/enums/**/*',
  '!**/common/errors/**/*',
  '!**/common/logging/**/*',
  '!**/common/utils/**/*',
];
const commonRestrictedSyntaxes = [
  { selector: 'DoWhileStatement', message: 'Prefer normal while statement.' },
  { selector: 'ForInStatement', message: 'Prefer for...of statement.' },
  { selector: 'ForStatement', message: 'Prefer for...of statement.' },
  {
    selector: "AssignmentExpression[operator!='=']",
    message: 'Prefer simple `=` expression.',
  },
  { selector: 'UpdateExpression', message: 'Prefer simple `=` expression.' },
  {
    selector: "UnaryExpression[operator='delete']",
    message: 'Prefer creating new object.',
  },
  {
    selector: "CallExpression > MemberExpression[property.name='copyWithin']",
    message: 'Prefer `[].map(...)`.',
  },
  {
    selector: "CallExpression > MemberExpression[property.name='fill']",
    message: 'Prefer `[].map(...)`.',
  },
  {
    selector: "CallExpression > MemberExpression[property.name='pop']",
    message: 'Prefer `[].slice(0, -1)`.',
  },
  {
    selector: "CallExpression > MemberExpression[property.name='push']",
    message: 'Prefer `[].concat(value)`.',
  },
  {
    selector: "CallExpression > MemberExpression[property.name='shift']",
    message: 'Prefer `[].slice(1)`.',
  },
  {
    selector: "CallExpression > MemberExpression[property.name='splice']",
    message: 'Prefer `[].slice(...)`.',
  },
  {
    selector: "CallExpression > MemberExpression[property.name='unshift']",
    message: 'Prefer `[value].concat(originalArray)`.',
  },
  {
    selector:
      'CallExpression > MemberExpression[property.name=/(then|catch|finally)/]',
    message: 'Prefer await keyword to preserve error stack trace.',
  },
  {
    selector: 'Identifier[name=/[^A-Za-z0-9_$]/]',
    message: 'Only Latin characters are allowed for naming.',
  },
  {
    selector:
      "CallExpression[callee.name='createUnionType'] Property[key.name='types'] ArrayExpression:not(:has(Identifier[name=/Error$/]))",
    message:
      'Must include at least 1 descendant from `UserError`. Use `UnknownUserError` as a placeholder if there is no applicable error type at the moment.',
  },
  {
    selector:
      "ClassDeclaration[superClass.name='GraphQLError'] MethodDefinition[kind='constructor'] CallExpression[callee.type='Super']:not(:has(Property[key.name='extensions'] Property[key.name='code']))",
    message: '`extensions.code` key in GraphQLErrorOptions is required.',
  },
];
const commonTestDescriptionRules = {
  // These words only make test description longer without providing any useful

  // information.
  disallowedWords: [
    'appropriate',
    'appropriately',
    'consistency',
    'consistent',
    'consistently',
    'correct',
    'correctly',
    'e2e',

    // Use `failed` instead.
    'fail',
    ,
    // Use `failed` instead. 'failure'
    // Use `when` instead.
    'if',
    'inconsistency',
    'inconsistent',
    'inconsistently',
    'match',
    'matched',
    'pass',
    'passed',
    'proper',
    'properly',
    'should',

    // Compoud words like `LoginIndividualCustomerSuccess` are allowed, but the

    // exact word `success` is not.
    'success',
    'successful',
    'successfully',
    'that',
    'then',
  ],
  ignoreTypeOfDescribeName: true,
  mustMatch: {
    it: [
      /^(calls|returns|sets|throws|does not (call|return|set|throw) )/u.source,
      'Must start with `(does not) call/return/set/throw(s)...`.',
    ],
  },
  mustNotMatch: [
    /[^A-Za-z0-9_\-+.,:()@\s]/u.source,
    'Only Latin characters, `_`, `-`, `+`, `.`, `,`, `:`, `(`, `)`, and `@` are allowed.',
  ],
};
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:unicorn/all',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: { es2021: true, node: true, jest: true },
  globals: { globalThis: 'readonly' },
  ignorePatterns: ['.eslintrc.js'],
  reportUnusedDisableDirectives: true,
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': ['error', { before: true, after: true }],

    // This rule cannot handle multilines class "signature".
    'brace-style': 'off',

    // Use @typescript-eslint/naming-convention instead.
    camelcase: 'off',
    'comma-spacing': ['error', { before: false, after: true }],
    curly: 'error',
    'default-case': 'error',
    'eol-last': ['error', 'always'],
    'generator-star-spacing': ['error', 'after'],
    // Prettier already covered this case.
    indent: 'off',
    'key-spacing': [
      'error',
      { beforeColon: false, afterColon: true, mode: 'strict' },
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': 'error',
    'multiline-comment-style': ['error', 'separate-lines'],
    // Prettier already covered this case.
    'multiline-ternary': 'off',
    'no-alert': 'error',
    'no-console': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-param-reassign': 'error',
    'no-restricted-syntax': ['error', ...commonRestrictedSyntaxes],
    'no-trailing-spaces': 'error',
    'no-use-before-define': 'off',
    // Conflict with noImplicitReturns from tsconfig.
    'no-useless-return': 'off',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'never', prev: 'case', next: ['case', 'default'] },
      {
        blankLine: 'always',
        prev: '*',
        next: ['break', 'continue', 'return', 'throw'],
      },
    ],
    'prefer-const': 'warn',
    'prefer-template': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],

    // Most resolvers are one-liner methods. And this rule just keep getting in
    // our way.
    'require-await': 'off',
    'rest-spread-spacing': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    'spaced-comment': [
      'error',
      'always',
      { block: { balanced: true, markers: ['*'] } },
    ],
    'import/newline-after-import': ['error'],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always-and-inside-groups',
        warnOnUnassignedImports: true,
      },
    ],
    'unicorn/consistent-function-scoping': [
      'error',
      { checkArrowFunctions: false },
    ],
    // This rule require exact module name, so it is not very helpful at the
    // moment.
    'unicorn/import-style': 'off',
    // We want to use `Array.from(Array(length).keys())` to create serial array.
    'unicorn/new-for-builtins': 'off',

    // `array.reduce()` is still necessary in some cases.
    'unicorn/no-array-reduce': 'off',
    // Identifiers starting with new or class.
    'unicorn/no-keyword-prefix': 'off',
    // Nested ifs are not that bad, especially when the conditions are very
    // long.
    'unicorn/no-lonely-if': 'off',
    // This rule is too hardcore. We still need to use null for empty value

    // returned from the database.
    'unicorn/no-null': 'off',
    // We have a lot of these kind of classes.
    'unicorn/no-static-only-class': 'off',
    // Prefer explicit undefined.
    'unicorn/no-useless-undefined': 'off',
    // Prefer to use spread only when necessary.
    'unicorn/prefer-spread': 'off',
    // Require ES Module, which Nest.js still does not support yet.
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        extendDefaultReplacements: false,
        replacements: Object.assign(
          // Copied from https:
          //github.com/sindresorhus/eslint-plugin-unicorn/blob/fe61924963ca0120405de12942cbc9c0b444f475/rules/shared/abbreviations.js
          {
            acc: { accumulator: true },
            arg: { argument: true },
            args: { arguments: true },
            arr: { array: true },
            attr: { attribute: true },
            attrs: { attributes: true },
            btn: { button: true },
            cb: { callback: true },
            conf: { config: true },
            ctx: { context: true },
            cur: { current: true },
            curr: { current: true },
            db: { database: true },
            def: {
              defer: true,
              deferred: true,
              define: true,
              definition: true,
            },
            dest: { destination: true },
            dev: { development: true },
            dir: { direction: true, directory: true },
            dirs: { directories: true },
            dist: { distribution: true },
            doc: { document: true },
            docs: { documentation: true, documents: true },
            dst: {
              daylightSavingTime: true,
              destination: true,
              distribution: true,
            },
            e: { error: true, event: true },
            el: { element: true },
            elem: { element: true },
            env: { environment: true },
            envs: { environments: true },
            err: { error: true },
            ev: { event: true },
            evt: { event: true },
            ext: { extension: true },
            exts: { extensions: true },
            fn: { function: true },
            func: { function: true },
            i: { index: true },
            idx: { index: true },
            j: { index: true },
            len: { length: true },
            lib: { library: true },
            mod: { module: true },
            msg: { message: true },
            num: { number: true },
            obj: { object: true },
            opts: { options: true },
            param: { parameter: true },
            params: { parameters: true },
            pkg: { package: true },
            prev: { previous: true },
            prod: { production: true },
            prop: { property: true },
            props: { properties: true },
            ref: { reference: true },
            refs: { references: true },
            rel: { related: true, relationship: true, relative: true },
            req: { request: true },
            res: { response: true, result: true },
            ret: { returnValue: true },
            retval: { returnValue: true },
            sep: { separator: true },
            src: { source: true },
            stdDev: { standardDeviation: true },
            str: { string: true },
            tbl: { table: true },
            temp: { temporary: true },
            tit: { title: true },
            tmp: { temporary: true },
            val: { value: true },
            var: { variable: true },
            vars: { variables: true },
            ver: { version: true },
          },
          {
            arg: { param: true },

            // JavaScript has `arguments` implicit variable. To avoid potential
            // name conflicts, we disallowed `arguments` and related terms
            // completely, and use `params` instead.
            // See: https:
            //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
            args: { params: true },
            e: { error: true },
            res: { result: true },
            resp: { response: true },
          },
        ),
        ignore: [/e2e/i, /env/i, /param/i, /prop/i, /ref/i],
      },
    ],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'no-public' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/naming-convention': [
      'warn',
      { selector: ['default'], format: ['camelCase'] },
      {
        selector: ['variable'],

        // We use PascalCase for GraphQL union types and custom decorators.
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      { selector: ['function'], format: ['camelCase', 'PascalCase'] },
      {
        selector: ['class'],
        // Migrations use camelCase for class name. format: ['camelCase', 'PascalCase'], }, { selector: ['typeLike'], format: ['PascalCase'], }, { selector: ['parameter'], format: ['camelCase'], leadingUnderscore: 'allow', }, { selector: ['memberLike'],

        // TODO: Consider remove PascalCase. Because traditional

        // JavaScript only use PascalCase for classes and constructor functions.
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: ['enumMember'],

        // TODO: Consider remove PascalCase. Because traditional

        // JavaScript only use PascalCase for classes and constructor functions.
        format: ['PascalCase', 'UPPER_CASE'],
      },
      {
        selector: ['objectLiteralProperty', 'typeProperty'],

        // UPPER_CASE indicates constant, environment variable, configuration

        // value.

        // _propertyName indicates unused property.

        // __propertyName indicates GraphQL internal fields. e.g., __typename

        // Some external services use JSON payload with snake_case (e.g., LINE)

        // or PascalCase (e.g., Mirai) keys.
        format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: ['objectLiteralProperty', 'typeProperty'],
        modifiers: ['requiresQuotes'],
        format: null,
      },
    ],
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    // Sometimes we need to use no-op callback function.
    '@typescript-eslint/no-empty-function': 'off',

    // We have a lot of classes with only static methods.
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-require-imports': 'warn',
    // Conflict with Nest.js dependency injection.
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    // ?? and || are not the same. Each has its own use cases.
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    // Most resolvers are one-liner methods. And this rule just keep getting in
    // our way.
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/require-array-sort-compare': 'warn',
    '@typescript-eslint/sort-type-union-intersection-members': 'error',
    // Enforce all Prettier rules when run eslint
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['migrations/**/*'],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['*', '!typeorm'],
                message:
                  'Migrations should be independent from the rest of the project.',
              },
            ],
          },
        ],
      },
    },
    {
      files: ['seeds/**/*'],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: [
                  '**/migrations/*',
                  '**/test/*',
                  '**/src/**/*',
                  // To match paths recursively with gitignore pattern while
                  // excluding some files. We have to make the pattern hit all
                  // files, but not child directories. Otherwise, excluding
                  // patterns will not work.
                  '!**/src/**/',
                  '!*.constant',
                  '!*.entity',
                  '!*.enum',
                  '!**/common/utils/dayjs.util',
                  '!**/common/constants/timezone.constants',
                ],
                allowTypeImports: true,
                message:
                  'Seeders can import only entities, enums, and some common utils.',
              },
            ].concat(commonRestrictedImports),
          },
        ],
      },
    },
    {
      files: ['src/**/*'],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: [
                  '**/migrations/*',
                  '**/seeds/*',
                  '**/test/*',
                  '!**/test/**/',
                  '!**/common/test/**/*',
                  // This one is actually from `common/`. But when we import it
                  // using relative path, the above rule does not apply
                  // properly.
                  '!**/test/jest-util',
                ],
                allowTypeImports: true,
                message:
                  'Main source code must never touch migrations, seeds, nor E2E tests.',
              },
            ].concat(commonRestrictedImports),
          },
        ],
      },
    },
    {
      files: ['src/**/*.entity.*'],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: commonAllowedPatterns.concat([
                  '!**/common/pagination/**/*',
                  '!**/common/entity-transformers/**/*',
                ]),
                allowTypeImports: true,
                message:
                  'Entities can only import constants, entities, enums, errors, utils from the same domain or from common directory. Importing from common/logging and common/pagination are also allowed.',
              },
            ].concat(commonRestrictedImports),
          },
        ],
      },
    },
    {
      files: ['src/**/*.enum.*'],
      excludedFiles: ['src/**/*.spec.*'],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: [
                  '../**/*',
                  '!../**/*/',
                  '!../constants/*',
                  '!../errors/*',
                  '!../utils/*',
                  '!**/common/constants/**/*',
                  '!**/common/errors/**/*',
                  '!**/common/logging/**/*',
                  '!**/common/utils/**/*',
                ],
                allowTypeImports: true,
                message:
                  'Enums can only import constants, errors, utils from the same domain or from common directory. Importing from common/logging is also allowed.',
              },
            ].concat(commonRestrictedImports),
          },
        ],
      },
    },
    {
      files: ['src/**/*.loader.*'],
      excludedFiles: ['src/**/*.spec.*'],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: commonAllowedPatterns.concat([
                  '**/*.loader',
                  '!../repositories/*',
                  // TODO: Remove after we move all *.repository.* to
                  // repositories directory.
                  '!../**/*.repository',
                ]),
                allowTypeImports: true,
                message:
                  'Data loaders can only import constants, enums, errors, repositories, types, utils from the same domain or from common directory. Importing from common/logging is also allowed.',
              },
            ].concat(commonRestrictedImports),
          },
        ],
      },
    },
    {
      files: ['src/**/*.model.*', 'src/**/*.union.*'],
      excludedFiles: ['src/**/*.spec.*'],
      rules: {
        // This rule should only apply to normal error classes that we use with
        // `throw` keyword. Error model classes are actually response object for
        // GraphQL requests, despite their name.
        'unicorn/custom-error-definition': 'off',
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: commonAllowedPatterns.concat([
                  '!**/*.enum',
                  '!**/*.model',
                  '!**/common/scalars/**/*',
                  '!**/common/externals/**/types/*',
                ]),
                allowTypeImports: true,
                message:
                  'Models can only import constants, errors, types, utils from the same domain or from common directory. Importing from any *.enum, any *.model, common/logging and common/scalars are also allowed.',
              },
            ].concat(commonRestrictedImports),
          },
        ],
      },
    },
    {
      files: ['src/**/inputs/*.model.*'],
      excludedFiles: ['src/**/*.spec.*'],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: commonAllowedPatterns.concat([
                  '!**/*.enum',
                  '!**/*.model',
                  '!**/common/scalars/**/*',
                  '!**/common/validators/**/*',
                ]),
                allowTypeImports: true,
                message:
                  'Models can only import constants, errors, types, utils from the same domain or from common directory. Importing from any *.enum, any *.model, common/logging, common/validators and common/scalars are also allowed.',
              },
              {
                group: ['@nestjs/graphql'],
                importNames: ['ID'],
                message:
                  "Use 'src/common/scalars/positive-numeric-string.scalar' instead.",
              },
            ].concat(commonRestrictedImports),
          },
        ],
      },
    },
    {
      files: ['src/**/*.module.*'],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['../**/*', '!../**/*/', '!**/*.module'],
                allowTypeImports: false,
                message:
                  'Modules can only import their children or another modules.',
              },
            ].concat(commonRestrictedImports),
          },
        ],
      },
    },
    {
      files: ['src/**/*.repository.*'],
      rules: {
        'no-restricted-syntax': [
          'error',
          ...commonRestrictedSyntaxes,
          {
            selector:
              "CallExpression[callee.property.name=/(where|andWhere)/] > :first-child[type='TemplateLiteral'][expressions.length!=0]",
            message:
              'String interpolation is vulnerable to SQL injection attack. Use TypeORM parameters instead.',
          },
        ],
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: commonAllowedPatterns.concat([
                  '**/*.repository',
                  '!../entities/*',
                ]),
                allowTypeImports: true,
                message:
                  'Repositories can only import constants, entities, enums, errors, types, utils from the same domain or from common directory. Importing from common/logging is also allowed.',
              },
            ].concat(commonRestrictedImports),
          },
        ],
      },
    },
    {
      files: ['src/**/*.resolver.*'],
      excludedFiles: ['src/**/*.spec.*'],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: [
                  '../**/*',
                  '!../**/*/',
                  '!**/common/**/*',
                  '!**/*.interceptor',
                  '!**/*.enum',
                  '!**/*.model',
                  '!**/*.union',
                  '!**/*.service',
                ],
                allowTypeImports: true,
                message:
                  'Resolvers can import any interceptors, enums, models, services. Importing anything from common/ is also allowed.',
              },
            ].concat(commonRestrictedImports),
          },
        ],
      },
    },
    {
      files: ['src/**/*.type.*'],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: [
                  '../**/*',
                  '!../**/*/',
                  '!../entities/*',
                  '!../enums/*',
                ],
                // This is intentional. Types should only be derived from
                // entities of the same domain.
                allowTypeImports: false,
                message:
                  'Types can only import entities, enums or types from the same domain.',
              },
            ].concat(commonRestrictedImports),
          },
        ],
      },
    },
    {
      files: ['test/**/*'],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['**/migrations/*'],
                message: 'E2E must never touch migrations.',
              },
              {
                group: ['**/*.model'],
                message:
                  'Asserting `__typename` is only useful for union types. And most union types should have different properties (e.g., `success: true`) that we can assert without having to touch `__typename` at all. But if we absolutely need to assert `__typename`, please hard code the name instead. We want to avoid unnecessary imports in test files as much as possible.',
                allowTypeImports: true,
              },
            ].concat(commonRestrictedImports),
          },
        ],
      },
    },
    {
      files: ['test/**/*.e2e-spec.ts', '**/*.spec.ts', 'test/**/*.e2e.ts'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/unbound-method': 'off',
        'jest/expect-expect': [
          'error',
          { assertFunctionNames: ['expect', 'request.**.expect'] },
        ],
        'jest/consistent-test-it': [
          'error',
          { fn: 'it', withinDescribe: 'it' },
        ],
        'jest/no-disabled-tests': 'warn',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-focused-tests': 'warn',
        'jest/no-restricted-matchers': [
          'error',
          {
            assertions: null,
            hasAssertions: null,
            toHaveBeenCalled: 'Prefer `toHaveBeenCalledTimes()`',
            'not.toHaveBeenCalled': 'Prefer `toHaveBeenCalledTimes(0)`',
            toHaveBeenCalledWith: 'Prefer `toHaveBeenNthCalledWith()`',
            'not.toHaveBeenCalledWith':
              'Negative function call matchers are confusing.',
            toHaveBeenLastCalledWith: 'Prefer `toHaveBeenNthCalledWith()`',
            'not.toHaveBeenLastCalledWith':
              'Negative function call matchers are confusing.',
            'not.toHaveBeenNthCalledWith':
              'Negative function call matchers are confusing.',
            toHaveReturned: 'Prefer `toHaveReturnedTimes()`',
            'not.toHaveReturned': 'Prefer `toHaveReturnedTimes(0)`',
            toHaveReturnedWith: 'Prefer `toHaveNthReturnedWith()`',
            'not.toHaveReturnedWith':
              'Negative function call matchers are confusing.',
            toHaveLastReturnedWith: 'Prefer `toHaveNthReturnedWith()`',
            'not.toHaveLastReturnedWith':
              'Negative function call matchers are confusing.',
            'not.toHaveNthReturnedWith':
              'Negative function call matchers are confusing.',
            toBeFalsy: 'Prefer `toBeUndefined()` or `toBe()`',
            'not.toBeFalsy': 'Prefer `toBeUndefined()` or `toBe()`',
            'resolves.toBeFalsy': 'Prefer `toBeUndefined()` or `toBe()`',
            'resolves.not.toBeFalsy': 'Prefer `toBeUndefined()` or `toBe()`',
            'rejects.toBeFalsy': 'Prefer `toBeUndefined()` or `toBe()`',
            'rejects.not.toBeFalsy': 'Prefer `toBeUndefined()` or `toBe()`',
            toBeTruthy: 'Prefer `toBeDefined()` or `toBe()`',
            'not.toBeTruthy': 'Prefer `toBeDefined()` or `toBe()`',
            'resolves.toBeTruthy': 'Prefer `toBeDefined()` or `toBe()`',
            'resolves.not.toBeTruthy': 'Prefer `toBeDefined()` or `toBe()`',
            'rejects.toBeTruthy': 'Prefer `toBeDefined()` or `toBe()`',
            'rejects.not.toBeTruthy': 'Prefer `toBeDefined()` or `toBe()`',
            toStrictEqual: 'Prefer `toBeInstanceOf()` + `toEqual()`',
            'not.toStrictEqual': 'Prefer `toBeInstanceOf()` + `toEqual()`',
            'resolves.toStrictEqual': 'Prefer `toBeInstanceOf()` + `toEqual()`',
            'resolves.not.toStrictEqual':
              'Prefer `toBeInstanceOf()` + `toEqual()`',
            'rejects.toStrictEqual': 'Prefer `toBeInstanceOf()` + `toEqual()`',
            'rejects.not.toStrictEqual':
              'Prefer `toBeInstanceOf()` + `toEqual()`',
            toMatchSnapshot: 'Prefer `toEqual()`',
            'not.toMatchSnapshot': 'Prefer `toEqual()`',
            'resolves.toMatchSnapshot': 'Prefer `toEqual()`',
            'resolves.not.toMatchSnapshot': 'Prefer `toEqual()`',
            'rejects.toMatchSnapshot': 'Prefer `toEqual()`',
            'rejects.not.toMatchSnapshot': 'Prefer `toEqual()`',
            toMatchInlineSnapshot: 'Prefer `toEqual()`',
            'not.toMatchInlineSnapshot': 'Prefer `toEqual()`',
            'resolves.toMatchInlineSnapshot': 'Prefer `toEqual()`',
            'resolves.not.toMatchInlineSnapshot': 'Prefer `toEqual()`',
            'rejects.toMatchInlineSnapshot': 'Prefer `toEqual()`',
            'rejects.not.toMatchInlineSnapshot': 'Prefer `toEqual()`',
            toThrowErrorMatchingSnapshot: 'Prefer `toThrow()`',
            'not.toThrowErrorMatchingSnapshot': 'Prefer `toThrow()`',
            'resolves.toThrowErrorMatchingSnapshot': 'Prefer `toThrow()`',
            'resolves.not.toThrowErrorMatchingSnapshot': 'Prefer `toThrow()`',
            'rejects.toThrowErrorMatchingSnapshot': 'Prefer `toThrow()`',
            'rejects.not.toThrowErrorMatchingSnapshot': 'Prefer `toThrow()`',
            toThrowErrorMatchingInlineSnapshot: 'Prefer `toThrow()`',
            'not.toThrowErrorMatchingInlineSnapshot': 'Prefer `toThrow()`',
            'resolves.toThrowErrorMatchingInlineSnapshot': 'Prefer `toThrow()`',
            'resolves.not.toThrowErrorMatchingInlineSnapshot':
              'Prefer `toThrow()`',
            'rejects.toThrowErrorMatchingInlineSnapshot': 'Prefer `toThrow()`',
            'rejects.not.toThrowErrorMatchingInlineSnapshot':
              'Prefer `toThrow()`',
          },
        ],
        'jest/no-test-return-statement': 'error',
        'jest/prefer-comparison-matcher': 'error',
        'jest/prefer-equality-matcher': 'error',
        'jest/prefer-expect-resolves': 'error',
        'jest/prefer-hooks-in-order': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
        'jest/prefer-spy-on': 'error',
        'jest/require-to-throw-message': 'error',
      },
    },
    {
      files: ['**/*.spec.*'],
      rules: {
        'no-restricted-syntax': [
          'error',
          ...commonRestrictedSyntaxes,
          {
            selector:
              'CallExpression[callee.name="describe"] > .arguments:first-child[property.name!="name"]',
            message:
              'Prefer `Class.name`, `Class.method.name`, or `Class.prototype.method.name`.',
          },
          {
            selector:
              'CallExpression[callee.name="describe"] > .arguments:first-child[type="Literal"]',
            message:
              'Prefer `Class.name`, `Class.method.name`, or `Class.prototype.method.name`.',
          },
        ],
        'jest/valid-title': ['error', commonTestDescriptionRules],
      },
    },
    {
      files: ['**/*.e2e-spec.*'],
      rules: {
        'no-restricted-syntax': [
          'error',
          ...commonRestrictedSyntaxes,
          {
            selector: 'TemplateElement[value.raw=/^\\s*{/]',
            message: 'Prefer `query OperationName { ... }`.',
          },
          {
            selector:
              'TemplateLiteral[expressions.length!=0] TemplateElement[value.raw=/^\\s*(query|mutation)/]',
            message:
              'Prefer static GraphQL operation, then use it with GraphQL variables.',
          },
          {
            selector:
              'Program > VariableDeclaration TemplateElement[value.raw=/^\\s*(query|mutation)/]',
            message:
              'No GraphQL operation declaration at root-level of source file.',
          },
          {
            selector:
              'Program > ExpressionStatement > CallExpression[callee.name="describe"] > ArrowFunctionExpression > BlockStatement > VariableDeclaration TemplateElement[value.raw=/^\\s*(query|mutation)/]',
            message:
              'No GraphQL operation declaration at top-level describe block.',
          },
          {
            selector:
              'TemplateElement[value.raw=/^\\s*mutation/][value.raw!=/on UserError/]',
            message: '`... on UserError` is required for every mutation.',
          },
          {
            selector:
              'TemplateElement[value.raw=/^\\s*mutation/][value.raw=/on UnknownUserError/]',
            message:
              '`UnknownUserError` is not the same as `UserError`. `UserError` is an interface. When we use `... on UserError`, it will include every type that implements `UserError`. `UnknownUserError`, on the other hand, is a placeholder that implements `UserError`. We put `UnknownUserError` in union payload type to maintain type compatibility, but we have no mutation that actually return `UnknownUserError` error type directly.',
          },
        ],
        'jest/valid-title': [
          'error',
          { ...commonTestDescriptionRules, ignoreTypeOfDescribeName: false },
        ],
      },
    },
  ],
};

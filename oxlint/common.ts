import type { OxlintConfig } from 'oxlint';

export const oxlintCommonConfig: OxlintConfig = {
    plugins: ['eslint', 'import', 'jsdoc', 'oxc', 'promise', 'unicorn'],
    rules: {
        // Correctness
        'constructor-super': 'error',
        'for-direction': 'error',
        'getter-return': ['error', { allowImplicit: true }],
        'no-async-promise-executor': 'error',
        'no-caller': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': ['error', 'always'],
        'no-const-assign': 'error',
        'no-constant-binary-expression': [
            'error',
            { checkRelationalComparisons: true },
        ],
        'no-constant-condition': [
            'error',
            { checkLoops: 'allExceptWhileTrue' },
        ],
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty-pattern': [
            'error',
            { allowObjectPatternsAsParameters: false },
        ],
        'no-empty-static-block': 'error',
        'no-eval': ['error', { allowIndirect: false }],
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': [
            'error',
            { enforceForInnerExpressions: true },
        ],
        'no-func-assign': 'error',
        'no-global-assign': ['error', { exceptions: [] }],
        'no-import-assign': 'error',
        'no-invalid-regexp': ['error', { allowConstructorFlags: [] }],
        'no-irregular-whitespace': [
            'error',
            {
                skipComments: false,
                skipJSXText: true,
                skipRegExps: true,
                skipStrings: true,
                skipTemplates: true,
            },
        ],
        'no-iterator': 'error',
        'no-loss-of-precision': 'error',
        'no-misleading-character-class': ['error', { allowEscape: false }],
        'no-new-native-nonconstructor': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-obj-calls': 'error',
        'no-self-assign': ['error', { props: true }],
        'no-setter-return': 'error',
        'no-shadow-restricted-names': ['error', { reportGlobalThis: true }],
        'no-sparse-arrays': 'error',
        'no-this-before-super': 'error',
        'no-unassigned-vars': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
        'no-unsafe-optional-chaining': [
            'error',
            { disallowArithmeticOperators: false },
        ],
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: false,
                allowTaggedTemplates: false,
                allowTernary: false,
                enforceForJSX: false,
                ignoreDirectives: false,
            },
        ],
        'no-unused-labels': 'error',
        'no-unused-private-class-members': 'error',
        'no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                fix: { imports: 'fix', variables: 'suggestion' },
                ignoreClassWithStaticInitBlock: false,
                ignoreRestSiblings: false,
                ignoreUsingDeclarations: false,
                reportUsedIgnorePattern: false,
                reportVarsOnlyUsedAsTypes: false,
                vars: 'all',
                varsIgnorePattern: '^_',
            },
        ],
        'no-useless-backreference': 'error',
        'no-useless-catch': 'error',
        'no-useless-escape': ['error', { allowRegexCharacters: [] }],
        'no-useless-rename': [
            'error',
            {
                ignoreDestructuring: false,
                ignoreExport: false,
                ignoreImport: false,
            },
        ],
        'no-with': 'error',
        'require-yield': 'error',
        'use-isnan': [
            'error',
            { enforceForIndexOf: false, enforceForSwitchCase: true },
        ],
        'valid-typeof': ['error', { requireStringLiterals: false }],
        'import/default': 'error',
        'import/namespace': ['error', { allowComputed: false }],
        'jsdoc/check-property-names': 'error',
        'jsdoc/check-tag-names': [
            'error',
            { definedTags: [], jsxTags: false, typed: false },
        ],
        'jsdoc/implements-on-classes': 'error',
        'jsdoc/no-defaults': ['error', { noOptionalParamNames: true }],
        'jsdoc/require-property': 'error',
        'jsdoc/require-property-description': 'error',
        'jsdoc/require-property-name': 'error',
        'jsdoc/require-property-type': 'error',
        'jsdoc/require-yields': [
            'error',
            {
                exemptedBy: ['inheritdoc'],
                forceRequireYields: false,
                withGeneratorTag: false,
            },
        ],
        'oxc/bad-array-method-on-arguments': 'error',
        'oxc/bad-char-at-comparison': 'error',
        'oxc/bad-comparison-sequence': 'error',
        'oxc/bad-match-all-arg': 'error',
        'oxc/bad-min-max-func': 'error',
        'oxc/bad-object-literal-comparison': 'error',
        'oxc/bad-replace-all-arg': 'error',
        'oxc/const-comparisons': 'error',
        'oxc/double-comparisons': 'error',
        'oxc/erasing-op': 'error',
        'oxc/missing-throw': 'error',
        'oxc/number-arg-out-of-range': 'error',
        'oxc/only-used-in-recursion': 'error',
        'oxc/uninvoked-array-callback': 'error',
        'promise/no-callback-in-promise': [
            'error',
            { exceptions: [], timeoutsErr: false },
        ],
        'promise/no-new-statics': 'error',
        'promise/valid-params': 'error',
        'unicorn/no-await-in-promise-methods': 'error',
        'unicorn/no-empty-file': 'error',
        'unicorn/no-invalid-fetch-options': 'error',
        'unicorn/no-invalid-remove-event-listener': 'error',
        'unicorn/no-new-array': 'error',
        'unicorn/no-single-promise-in-promise-methods': 'error',
        'unicorn/no-thenable': 'error',
        'unicorn/no-unnecessary-await': 'error',
        'unicorn/no-useless-fallback-in-spread': 'error',
        'unicorn/no-useless-length-check': 'error',
        'unicorn/no-useless-spread': 'error',
        'unicorn/prefer-set-size': 'error',
        'unicorn/prefer-string-starts-ends-with': 'error',

        // Pedantic
        'accessor-pairs': [
            'error',
            {
                enforceForClassMembers: true,
                enforceForTSTypes: false,
                getWithoutSet: false,
                setWithoutGet: true,
            },
        ],
        'array-callback-return': [
            'error',
            { allowImplicit: true, allowVoid: false, checkForEach: false },
        ],
        eqeqeq: ['error', 'always', { null: 'always' }],
        'max-classes-per-file': ['error', { ignoreExpressions: false, max: 1 }],
        'max-depth': ['error', { max: 3 }],
        'max-lines': [
            'error',
            { max: 300, skipBlankLines: true, skipComments: true },
        ],
        'max-lines-per-function': [
            'error',
            { IIFEs: false, max: 50, skipBlankLines: true, skipComments: true },
        ],
        'max-nested-callbacks': ['error', { max: 1 }],
        'no-array-constructor': 'error',
        'no-case-declarations': 'error',
        'no-constructor-return': 'error',
        'no-else-return': ['error', { allowElseIf: false }],
        'no-fallthrough': [
            'error',
            {
                allowEmptyCase: false,
                commentPattern: String.raw`falls?\s?through`,
                reportUnusedFallthroughComment: false,
            },
        ],
        'no-inline-comments': ['error', { ignorePattern: '' }],
        'no-inner-declarations': [
            'error',
            'both',
            { blockScopedFunctions: 'allow', namespaces: 'disallow' },
        ],
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-negated-condition': 'error',
        'no-new-wrappers': 'error',
        'no-object-constructor': 'error',
        'no-promise-executor-return': ['error', { allowVoid: false }],
        'no-prototype-builtins': 'error',
        'no-redeclare': ['error', { builtinGlobals: true }],
        'no-self-compare': 'error',
        'no-throw-literal': 'error',
        'no-useless-return': 'error',
        'no-warning-comments': [
            'error',
            {
                decoration: [],
                location: 'start',
                terms: ['todo', 'fixme', 'xxx'],
            },
        ],
        'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],
        radix: ['error', 'always'],
        'require-await': 'error',
        'require-unicode-regexp': 'off', // unwanted
        'sort-vars': 'off', // unwanted
        'symbol-description': 'error',
        'import/max-dependencies': 'off', // unwanted
        'jsdoc/require-param': [
            'error',
            {
                checkConstructors: true,
                checkDestructured: true,
                checkDestructuredRoots: true,
                checkGetters: true,
                checkRestProperty: true,
                checkSetters: true,
                checkTypesPattern:
                    '^(?:[oO]bject|[aA]rray|PlainObject|Generic(?:Object|Array))$',
                exemptedBy: ['inheritdoc'],
                ignoreWhenAllParamsMissing: false,
                interfaceExemptsParamsCheck: false,
                useDefaultObjectProperties: false,
            },
        ],
        'jsdoc/require-param-description': [
            'error',
            {
                defaultDestructuredRootDescription: 'The root object',
                setDefaultDestructuredRootDescription: false,
            },
        ],
        'jsdoc/require-param-name': 'error',
        'jsdoc/require-param-type': [
            'error',
            {
                defaultDestructuredRootType: 'object',
                setDefaultDestructuredRootType: false,
            },
        ],
        'jsdoc/require-returns': [
            'error',
            {
                checkConstructors: false,
                checkGetters: true,
                exemptedBy: ['inheritdoc'],
                forceRequireReturn: false,
                forceReturnsWithAsync: false,
            },
        ],
        'jsdoc/require-returns-description': 'error',
        'jsdoc/require-returns-type': 'error',
        'jsdoc/require-throws-type': 'error',
        'jsdoc/require-yields-type': 'error',
        'oxc/branches-sharing-code': 'error',
        'unicorn/consistent-assert': 'error',
        'unicorn/consistent-empty-array-spread': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/explicit-length-check': [
            'error',
            { 'non-zero': 'greater-than' },
        ],
        'unicorn/new-for-builtins': 'error',
        'unicorn/no-array-callback-reference': 'off', // unwanted
        'unicorn/no-hex-escape': 'error',
        'unicorn/no-immediate-mutation': 'error',
        'unicorn/no-instanceof-array': 'error',
        'unicorn/no-lonely-if': 'error',
        'unicorn/no-negated-condition': 'error',
        'unicorn/no-negation-in-equality-check': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/no-object-as-default-parameter': 'error',
        'unicorn/no-static-only-class': 'error',
        'unicorn/no-this-assignment': 'error',
        'unicorn/no-typeof-undefined': [
            'error',
            { checkGlobalVariables: true },
        ],
        'unicorn/no-unnecessary-array-flat-depth': 'error',
        'unicorn/no-unnecessary-array-splice-count': 'error',
        'unicorn/no-unnecessary-slice-end': 'error',
        'unicorn/no-unreadable-iife': 'error',
        'unicorn/no-useless-promise-resolve-reject': [
            'error',
            { allowReject: false },
        ],
        'unicorn/no-useless-switch-case': 'error',
        'unicorn/no-useless-undefined': [
            'error',
            { checkArguments: true, checkArrowFunctionBody: true },
        ],
        'unicorn/prefer-array-flat': 'error',
        'unicorn/prefer-array-some': 'error',
        'unicorn/prefer-at': [
            'error',
            { checkAllIndexAccess: false, getLastElementFunctions: [] },
        ],
        'unicorn/prefer-blob-reading-methods': 'error',
        'unicorn/prefer-code-point': 'error',
        'unicorn/prefer-date-now': 'error',
        'unicorn/prefer-dom-node-append': 'off', // browser
        'unicorn/prefer-dom-node-dataset': 'off', // browser
        'unicorn/prefer-dom-node-remove': 'off', // browser
        'unicorn/prefer-event-target': 'off', // node
        'unicorn/prefer-import-meta-properties': 'off', // node
        'unicorn/prefer-math-min-max': 'error',
        'unicorn/prefer-math-trunc': 'error',
        'unicorn/prefer-native-coercion-functions': 'error',
        'unicorn/prefer-number-coercion': 'error',
        'unicorn/prefer-prototype-methods': 'error',
        'unicorn/prefer-query-selector': 'error',
        'unicorn/prefer-regexp-test': 'error',
        'unicorn/prefer-single-call': ['error', { ignore: [] }],
        'unicorn/prefer-string-replace-all': 'error',
        'unicorn/prefer-string-slice': 'error',
        'unicorn/prefer-top-level-await': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/require-number-to-fixed-digits-argument': 'error',

        // Perf
        'no-await-in-loop': 'error',
        'no-useless-call': 'error',
        'oxc/no-accumulating-spread': 'error',
        'oxc/no-map-spread': [
            'error',
            { ignoreArgs: true, ignoreRereads: true },
        ],
        'unicorn/prefer-array-find': 'error',
        'unicorn/prefer-array-flat-map': 'error',
        'unicorn/prefer-set-has': 'error',

        // Restriction
        'class-methods-use-this': [
            'error',
            {
                enforceForClassFields: true,
                exceptMethods: [],
                ignoreClassesWithImplements: 'public-fields',
                ignoreOverrideMethods: false,
            },
        ],
        complexity: ['error', { max: 10, variant: 'modified' }],
        'default-case': ['error', { commentPattern: 'no default' }],
        'no-alert': 'off', // browser
        'no-bitwise': 'off', // unwanted
        'no-console': ['error', { allow: [] }],
        'no-div-regex': 'error',
        'no-empty': ['error', { allowEmptyCatch: false }],
        'no-empty-function': ['error', { allow: [] }],
        'no-eq-null': 'error',
        'no-implicit-globals': 'off', // browser
        'no-param-reassign': [
            'error',
            {
                ignorePropertyModificationsFor: [],
                ignorePropertyModificationsForRegex: [],
                props: false,
            },
        ],
        'no-plusplus': 'off', // unwanted
        'no-proto': 'error',
        'no-regex-spaces': 'error',
        'no-restricted-globals': 'off', // unwanted
        'no-restricted-imports': 'off', // unwanted
        'no-restricted-properties': 'off', // unwanted
        'no-sequences': ['error', { allowInParentheses: true }],
        'no-undefined': 'off', // unwanted
        'no-use-before-define': [
            'error',
            {
                allowNamedExports: false,
                classes: true,
                enums: true,
                functions: true,
                ignoreTypeReferences: true,
                typedefs: true,
                variables: true,
            },
        ],
        'no-var': 'error',
        'no-void': ['error', { allowAsStatement: false }],
        'unicode-bom': ['error', 'never'],
        'import/extensions': [
            'error',
            {
                checkTypeImports: true,
                ignorePackages: true,
                pathGroupOverrides: [],
                pattern: {},
            },
        ],
        'import/no-amd': 'error',
        'import/no-commonjs': 'error',
        'import/no-cycle': [
            'error',
            {
                allowUnsafeDynamicCyclicDependency: false,
                ignoreExternal: false,
                ignoreTypes: true,
            },
        ],
        'import/no-default-export': 'off', // unwanted
        'import/no-dynamic-require': ['error', { esmodule: true }],
        'import/no-relative-parent-imports': 'off', // unwanted
        'import/no-webpack-loader-syntax': 'error',
        'import/unambiguous': 'off', // unwanted
        'jsdoc/check-access': 'error',
        'jsdoc/empty-tags': ['error', { tags: [] }],
        'oxc/bad-bitwise-operator': 'error',
        'oxc/no-async-await': 'off', // unwanted
        'oxc/no-barrel-file': 'off', // unwanted
        'oxc/no-const-enum': 'off', // unwanted
        'oxc/no-optional-chaining': 'off', // unwanted
        'oxc/no-rest-spread-properties': 'off', // unwanted
        'promise/catch-or-return': [
            'error',
            {
                allowFinally: false,
                allowThen: false,
                allowThenStrict: false,
                terminationMethod: [],
            },
        ],
        'promise/spec-only': ['error', { allowedMethods: [] }],
        'unicorn/import-style': 'off', // unwanted
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/no-anonymous-default-export': 'error',
        'unicorn/no-array-for-each': 'error',
        'unicorn/no-array-reduce': ['error', { allowSimpleOperations: true }],
        'unicorn/no-document-cookie': 'off', // browser
        'unicorn/no-length-as-slice-end': 'error',
        'unicorn/no-magic-array-flat-depth': 'error',
        'unicorn/no-process-exit': 'off', // node
        'unicorn/no-useless-error-capture-stack-trace': 'error',
        'unicorn/prefer-modern-math-apis': 'error',
        'unicorn/prefer-module': 'error',
        'unicorn/prefer-node-protocol': 'off', // node
        'unicorn/prefer-number-properties': [
            'error',
            { checkInfinity: true, checkNaN: true },
        ],

        // Style
        'arrow-body-style': [
            'error',
            'as-needed',
            { requireReturnForObjectLiteral: false },
        ],
        'capitalized-comments': [
            'error',
            'always',
            {
                ignoreConsecutiveComments: true,
                ignoreInlineComments: false,
                ignorePattern: '',
            },
        ],
        curly: ['error', 'all'],
        'default-case-last': 'error',
        'default-param-last': 'error',
        'func-name-matching': [
            'error',
            'always',
            {
                considerPropertyDescriptor: false,
                includeCommonJSModuleExports: false,
            },
        ],
        'func-names': ['error', 'as-needed', { generators: 'as-needed' }],
        'func-style': [
            'error',
            'declaration',
            {
                allowArrowFunctions: false,
                allowTypeAnnotation: false,
                overrides: {},
            },
        ],
        'grouped-accessor-pairs': [
            'error',
            'getBeforeSet',
            { enforceForTSTypes: true },
        ],
        'guard-for-in': 'error',
        'id-denylist': 'off', // unwanted
        'id-length': 'off', // unwanted
        'id-match': 'off', // unwanted
        'init-declarations': 'off', // unwanted
        'logical-assignment-operators': [
            'error',
            'always',
            { enforceForIfStatements: true },
        ],
        'max-params': ['error', { countThis: 'never', max: 3 }],
        'max-statements': 'off', // unwanted
        'new-cap': 'off', // unwanted
        'no-continue': 'off', // unwanted
        'no-duplicate-imports': [
            'error',
            { allowSeparateTypeImports: false, includeExports: true },
        ],
        'no-extra-label': 'error',
        'no-implicit-coercion': [
            'error',
            {
                allow: [],
                boolean: true,
                disallowTemplateShorthand: false,
                number: true,
                string: true,
            },
        ],
        'no-label-var': 'error',
        'no-labels': 'off', // unwanted
        'no-lone-blocks': 'error',
        'no-magic-numbers': [
            'error',
            {
                detectObjects: true,
                enforceConst: true,
                ignore: [-1, 0, 1],
                ignoreArrayIndexes: false,
                ignoreClassFieldInitialValues: false,
                ignoreDefaultValues: false,
                ignoreEnums: false,
                ignoreNumericLiteralTypes: false,
                ignoreReadonlyClassProperties: false,
                ignoreTypeIndexes: false,
            },
        ],
        'no-multi-assign': ['error', { ignoreNonDeclaration: false }],
        'no-multi-str': 'error',
        'no-nested-ternary': 'error',
        'no-new-func': 'error',
        'no-return-assign': ['error', 'except-parens'],
        'no-script-url': 'off', // browser
        'no-template-curly-in-string': 'error',
        'no-ternary': 'off', // unwanted
        'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
        'object-shorthand': [
            'error',
            'always',
            {
                avoidExplicitReturnArrows: true,
                avoidQuotes: false,
                ignoreConstructors: false,
                methodsIgnorePattern: '',
            },
        ],
        'one-var': ['error', 'never'],
        'operator-assignment': ['error', 'always'],
        'prefer-arrow-callback': [
            'error',
            { allowNamedFunctions: false, allowUnboundThis: true },
        ],
        'prefer-const': [
            'error',
            { destructuring: 'any', ignoreReadBeforeAssign: false },
        ],
        'prefer-destructuring': [
            'error',
            { array: true, object: true },
            {
                enforceForDeclarationWithTypeAnnotation: true,
                enforceForRenamedProperties: true,
            },
        ],
        'prefer-exponentiation-operator': 'error',
        'prefer-named-capture-group': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-object-has-own': 'error',
        'prefer-object-spread': 'error',
        'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'sort-imports': [
            'error',
            {
                allowSeparatedGroups: false,
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
        'sort-keys': 'off', // unwanted
        'vars-on-top': 'error',
        yoda: ['error', 'never', { exceptRange: true, onlyEquality: false }],
        'import/consistent-type-specifier-style': [
            'error',
            'prefer-top-level-if-only-type-imports',
        ],
        'import/exports-last': 'error',
        'import/first': ['error', 'absolute-first'],
        'import/group-exports': 'off',
        'import/newline-after-import': [
            'error',
            { considerComments: false, count: 1, exactCount: false },
        ],
        'import/no-anonymous-default-export': 'off', // unwanted
        'import/no-duplicates': [
            'error',
            { considerQueryString: false, preferInline: true },
        ],
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-named-export': 'off',
        'import/no-namespace': ['error', { ignore: [] }],
        'import/no-nodejs-modules': 'off', // browser
        'import/prefer-default-export': 'off', // unwanted
        'jsdoc/no-blank-blocks': ['error', { enableFixer: false }],
        'jsdoc/require-throws-description': 'error',
        'jsdoc/require-yields-description': 'error',
        'promise/avoid-new': 'error',
        'promise/no-nesting': 'error',
        'promise/no-return-wrap': ['error', { allowReject: false }],
        'promise/param-names': [
            'error',
            { rejectPattern: '^_?reject$', resolvePattern: '^_?resolve$' },
        ],
        'promise/prefer-await-to-callbacks': 'error',
        'promise/prefer-await-to-then': ['error', { strict: false }],
        'promise/prefer-catch': 'error',
        'unicorn/catch-error-name': ['error', { ignore: [], name: 'error' }],
        'unicorn/consistent-date-clone': 'error',
        'unicorn/consistent-existence-index-check': 'error',
        'unicorn/consistent-template-literal-escape': 'error',
        'unicorn/custom-error-definition': 'error',
        'unicorn/empty-brace-spaces': 'error',
        'unicorn/error-message': 'error',
        'unicorn/explicit-timer-delay': ['error', 'always'],
        'unicorn/filename-case': [
            'error',
            {
                cases: { kebabCase: true, camelCase: true, pascalCase: true },
                ignore: [],
                multipleFileExtensions: true,
            },
        ],
        'unicorn/max-nested-calls': ['error', { max: 2 }],
        'unicorn/no-array-method-this-argument': 'error',
        'unicorn/no-await-expression-member': 'error',
        'unicorn/no-console-spaces': 'error',
        'unicorn/no-nested-ternary': 'error',
        'unicorn/no-null': 'off', // unwanted
        'unicorn/no-unreadable-array-destructuring': 'error',
        'unicorn/no-useless-collection-argument': 'error',
        'unicorn/no-zero-fractions': 'error',
        'unicorn/number-literal-case': 'error',
        'unicorn/numeric-separators-style': [
            'error',
            {
                binary: {
                    groupLength: 4,
                    minimumDigits: 0,
                    onlyIfContainsSeparator: false,
                },
                hexadecimal: {
                    groupLength: 4,
                    minimumDigits: 0,
                    onlyIfContainsSeparator: false,
                },
                number: {
                    fractionGroupLength: Number.POSITIVE_INFINITY,
                    groupLength: 3,
                    minimumDigits: 5,
                    onlyIfContainsSeparator: false,
                },
                octal: {
                    groupLength: 4,
                    minimumDigits: 0,
                    onlyIfContainsSeparator: false,
                },
                onlyIfContainsSeparator: false,
            },
        ],
        'unicorn/prefer-array-index-of': 'error',
        'unicorn/prefer-bigint-literals': 'error',
        'unicorn/prefer-class-fields': 'error',
        'unicorn/prefer-classlist-toggle': 'error',
        'unicorn/prefer-default-parameters': 'error',
        'unicorn/prefer-dom-node-text-content': 'error',
        'unicorn/prefer-export-from': ['error', { checkUsedVariables: true }],
        'unicorn/prefer-global-this': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-keyboard-event-key': 'off', // browser
        'unicorn/prefer-logical-operator-over-ternary': 'error',
        'unicorn/prefer-modern-dom-apis': 'off', // browser
        'unicorn/prefer-negative-index': 'error',
        'unicorn/prefer-object-from-entries': ['error', { functions: [] }],
        'unicorn/prefer-optional-catch-binding': 'error',
        'unicorn/prefer-reflect-apply': 'error',
        'unicorn/prefer-response-static-json': 'error',
        'unicorn/prefer-spread': 'error',
        'unicorn/prefer-string-raw': 'error',
        'unicorn/prefer-string-trim-start-end': 'error',
        'unicorn/prefer-structured-clone': ['error', { functions: [] }],
        'unicorn/prefer-ternary': ['error', 'only-single-line'],
        'unicorn/relative-url-style': ['error', 'always'],
        'unicorn/require-array-join-separator': 'error',
        'unicorn/require-module-attributes': 'error',
        'unicorn/switch-case-braces': ['error', 'always'],
        'unicorn/switch-case-break-position': 'error',
        'unicorn/text-encoding-identifier-case': 'off', // node
        'unicorn/throw-new-error': 'error',

        // Suspicious
        'block-scoped-var': 'error',
        'no-extend-native': ['error', { exceptions: [] }],
        'no-extra-bind': 'error',
        'no-implied-eval': 'error',
        'no-new': 'error',
        'no-shadow': [
            'error',
            {
                allow: [],
                builtinGlobals: true,
                hoist: 'functions-and-types',
                ignoreFunctionTypeParameterNameValueShadow: true,
                ignoreOnInitialization: false,
                ignoreTypeValueShadow: true,
            },
        ],
        'no-underscore-dangle': [
            'error',
            {
                allow: [],
                allowAfterSuper: false,
                allowAfterThis: false,
                allowAfterThisConstructor: false,
                allowFunctionParams: true,
                allowInArrayDestructuring: true,
                allowInObjectDestructuring: true,
                allowInUsingDeclarations: false,
                enforceInClassFields: true,
                enforceInMethodNames: true,
            },
        ],
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': [
            'error',
            { checkConditionalExpressions: false },
        ],
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'preserve-caught-error': ['error', { requireCatchParameter: false }],
        'import/no-absolute-path': [
            'error',
            { amd: true, commonjs: true, esmodule: true },
        ],
        'import/no-empty-named-blocks': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-self-import': 'error',
        'import/no-unassigned-import': 'off', // unwanted
        'oxc/approx-constant': 'error',
        'oxc/misrefactored-assign-op': 'error',
        'oxc/no-async-endpoint-handlers': ['off', { allowedNames: [] }],
        'oxc/no-this-in-exported-function': 'error',
        'promise/always-return': 'off', // unwanted
        'promise/no-multiple-resolved': 'error',
        'promise/no-promise-in-callback': [
            'error',
            { exemptDeclarations: false },
        ],
        'unicorn/consistent-function-scoping': [
            'error',
            { checkArrowFunctions: true },
        ],
        'unicorn/no-accessor-recursion': 'error',
        'unicorn/no-array-fill-with-reference-type': 'error',
        'unicorn/no-array-reverse': [
            'error',
            { allowExpressionStatement: true },
        ],
        'unicorn/no-array-sort': [
            'error',
            { allowAfterSpread: false, allowExpressionStatement: true },
        ],
        'unicorn/no-confusing-array-with': 'error',
        'unicorn/no-instanceof-builtins': [
            'error',
            {
                exclude: [],
                include: [],
                strategy: 'loose',
                useErrorIsError: false,
            },
        ],
        'unicorn/prefer-add-event-listener': 'off', // browser
        'unicorn/require-module-specifiers': 'error',
        'unicorn/require-post-message-target-origin': 'off', // browser
    },
};

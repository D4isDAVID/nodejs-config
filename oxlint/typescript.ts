import type { OxlintConfig } from 'oxlint';

export const oxlintTypescriptConfig: OxlintConfig = {
    plugins: ['eslint', 'jsdoc', 'typescript', 'unicorn'],
    rules: {
        // Correctness
        'jsdoc/check-tag-names': [
            'error',
            { definedTags: [], jsxTags: false, typed: true },
        ],
        'typescript/await-thenable': 'error',
        'typescript/no-array-delete': 'error',
        'typescript/no-base-to-string': [
            'error',
            {
                checkUnknown: true,
                ignoredTypeNames: ['Error', 'RegExp', 'URL', 'URLSearchParams'],
            },
        ],
        'typescript/no-duplicate-enum-values': 'error',
        'typescript/no-duplicate-type-constituents': [
            'error',
            { ignoreIntersections: false, ignoreUnions: false },
        ],
        'typescript/no-extra-non-null-assertion': 'error',
        'typescript/no-floating-promises': [
            'error',
            {
                allowForKnownSafeCalls: [],
                allowForKnownSafePromises: [],
                checkThenables: true,
                ignoreIIFE: false,
                ignoreVoid: false,
            },
        ],
        'typescript/no-for-in-array': 'error',
        'typescript/no-implied-eval': 'error',
        'typescript/no-meaningless-void-operator': [
            'error',
            { checkNever: false },
        ],
        'typescript/no-misused-new': 'error',
        'typescript/no-misused-spread': ['error', { allow: [] }],
        'typescript/no-non-null-asserted-optional-chain': 'error',
        'typescript/no-redundant-type-constituents': 'error',
        'typescript/no-this-alias': [
            'error',
            { allowDestructuring: false, allowedNames: [] },
        ],
        'typescript/no-unnecessary-parameter-property-assignment': 'error',
        'typescript/no-unsafe-declaration-merging': 'error',
        'typescript/no-unsafe-unary-minus': 'error',
        'typescript/no-useless-default-assignment': 'error',
        'typescript/no-useless-empty-export': 'error',
        'typescript/no-wrapper-object-types': 'error',
        'typescript/prefer-as-const': 'error',
        'typescript/prefer-namespace-keyword': 'error',
        'typescript/require-array-sort-compare': [
            'error',
            { ignoreStringArrays: true },
        ],
        'typescript/restrict-template-expressions': [
            'error',
            {
                allow: [
                    { from: 'lib', name: ['Error', 'URL', 'URLSearchParams'] },
                ],
                allowAny: true,
                allowArray: false,
                allowBoolean: true,
                allowNever: false,
                allowNullish: true,
                allowNumber: true,
                allowRegExp: true,
            },
        ],
        'typescript/triple-slash-reference': [
            'error',
            { lib: 'always', path: 'never', types: 'prefer-import' },
        ],
        'typescript/unbound-method': ['error', { ignoreStatic: false }],
        'unicorn/prefer-string-starts-ends-with': 'off', // replaced by typescript/prefer-string-starts-ends-with

        // Pedantic
        'no-throw-literal': 'off', // replaced by typescript/only-throw-error
        'require-await': 'off', // replaced by typescript/require-await
        'typescript/ban-ts-comment': [
            'error',
            {
                minimumDescriptionLength: 3,
                'ts-check': false,
                'ts-expect-error': 'allow-with-description',
                'ts-ignore': false,
                'ts-nocheck': false,
            },
        ],
        'typescript/ban-types': 'off', // unwanted
        'typescript/no-confusing-void-expression': [
            'error',
            {
                ignoreArrowShorthand: false,
                ignoreVoidOperator: false,
                ignoreVoidReturningFunctions: false,
            },
        ],
        'typescript/no-deprecated': 'off', // unwanted
        'typescript/no-misused-promises': [
            'error',
            {
                checksConditionals: true,
                checksSpreads: true,
                checksVoidReturn: {
                    arguments: true,
                    attributes: true,
                    inheritedMethods: true,
                    properties: true,
                    returns: true,
                    variables: true,
                },
            },
        ],
        'typescript/no-mixed-enums': 'error',
        'typescript/no-unsafe-argument': 'error',
        'typescript/no-unsafe-assignment': 'error',
        'typescript/no-unsafe-call': 'error',
        'typescript/no-unsafe-function-type': 'error',
        'typescript/no-unsafe-member-access': [
            'error',
            { allowOptionalChaining: false },
        ],
        'typescript/no-unsafe-return': 'error',
        'typescript/only-throw-error': [
            'error',
            {
                allow: [],
                allowRethrowing: true,
                allowThrowingAny: true,
                allowThrowingUnknown: true,
            },
        ],
        'typescript/prefer-enum-initializers': 'error',
        'typescript/prefer-includes': 'error',
        'typescript/prefer-nullish-coalescing': [
            'error',
            {
                ignoreBooleanCoercion: false,
                ignoreConditionalTests: true,
                ignoreIfStatements: false,
                ignoreMixedLogicalExpressions: false,
                ignorePrimitives: {
                    bigint: false,
                    boolean: false,
                    number: false,
                    string: false,
                },
                ignoreTernaryTests: false,
            },
        ],
        'typescript/prefer-promise-reject-errors': [
            'error',
            {
                allow: [],
                allowEmptyReject: false,
                allowThrowingAny: false,
                allowThrowingUnknown: false,
            },
        ],
        'typescript/prefer-readonly-parameter-types': 'off', // unwanted
        'typescript/prefer-ts-expect-error': 'error',
        'typescript/related-getter-setter-pairs': 'error',
        'typescript/require-await': 'error',
        'typescript/restrict-plus-operands': [
            'error',
            {
                allowAny: true,
                allowBoolean: true,
                allowNullish: true,
                allowNumberAndString: true,
                allowRegExp: true,
                skipCompoundAssignments: false,
            },
        ],
        'typescript/return-await': ['error', 'always'],
        'typescript/strict-boolean-expressions': [
            'error',
            {
                allowAny: false,
                allowNullableBoolean: true,
                allowNullableEnum: false,
                allowNullableNumber: false,
                allowNullableObject: false,
                allowNullableString: false,
                allowNumber: false,
                allowString: false,
            },
        ],
        'typescript/strict-void-return': ['error', { allowReturnAny: false }],
        'typescript/switch-exhaustiveness-check': [
            'error',
            {
                allowDefaultCaseForExhaustiveSwitch: true,
                considerDefaultExhaustiveForUnions: false,
                defaultCaseCommentPattern: 'no default',
                requireDefaultForNonUnion: false,
            },
        ],

        // Restriction
        'typescript/explicit-function-return-type': [
            'error',
            {
                allowConciseArrowFunctionExpressionsStartingWithVoid: false,
                allowDirectConstAssertionInArrowFunctions: true,
                allowExpressions: false,
                allowFunctionsWithoutTypeParameters: false,
                allowHigherOrderFunctions: true,
                allowIIFEs: false,
                allowTypedFunctionExpressions: true,
                allowedNames: [],
            },
        ],
        'typescript/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
                ignoredMethodNames: [],
                overrides: {},
            },
        ],
        'typescript/explicit-module-boundary-types': [
            'error',
            {
                allowArgumentsExplicitlyTypedAsAny: false,
                allowDirectConstAssertionInArrowFunctions: true,
                allowHigherOrderFunctions: true,
                allowOverloadFunctions: false,
                allowTypedFunctionExpressions: true,
                allowedNames: [],
            },
        ],
        'typescript/no-dynamic-delete': 'error',
        'typescript/no-empty-object-type': [
            'error',
            {
                allowInterfaces: 'never',
                allowObjectTypes: 'never',
                allowWithName: '',
            },
        ],
        'typescript/no-explicit-any': [
            'error',
            { fixToUnknown: true, ignoreRestArgs: false },
        ],
        'typescript/no-import-type-side-effects': 'error',
        'typescript/no-invalid-void-type': [
            'error',
            { allowAsThisParameter: false, allowInGenericTypeArguments: true },
        ],
        'typescript/no-namespace': [
            'error',
            { allowDeclarations: false, allowDefinitionFiles: true },
        ],
        'typescript/no-non-null-asserted-nullish-coalescing': 'error',
        'typescript/no-non-null-assertion': 'error',
        'typescript/no-require-imports': [
            'error',
            { allow: [], allowAsImport: false },
        ],
        'typescript/no-restricted-types': 'off', // unwanted
        'typescript/no-var-requires': 'off', // unwanted
        'typescript/non-nullable-type-assertion-style': 'error',
        'typescript/prefer-literal-enum-member': [
            'error',
            { allowBitwiseExpressions: true },
        ],
        'typescript/promise-function-async': [
            'error',
            {
                allowAny: true,
                allowedPromiseNames: [],
                checkArrowFunctions: true,
                checkFunctionDeclarations: true,
                checkFunctionExpressions: true,
                checkMethodDeclarations: true,
            },
        ],
        'typescript/use-unknown-in-catch-callback-variable': 'error',

        // Style
        'typescript/adjacent-overload-signatures': 'error',
        'typescript/array-type': [
            'error',
            { default: 'array', readonly: 'array' },
        ],
        'typescript/ban-tslint-comment': 'off', // unwanted
        'typescript/class-literal-property-style': ['error', 'fields'],
        'typescript/consistent-generic-constructors': ['error', 'constructor'],
        'typescript/consistent-indexed-object-style': ['error', 'record'],
        'typescript/consistent-type-assertions': [
            'error',
            {
                arrayLiteralTypeAssertions: 'allow',
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow',
            },
        ],
        'typescript/consistent-type-definitions': ['error', 'interface'],
        'typescript/consistent-type-exports': [
            'error',
            { fixMixedExportsWithInlineTypeSpecifier: true },
        ],
        'typescript/consistent-type-imports': [
            'error',
            {
                disallowTypeAnnotations: true,
                fixStyle: 'separate-type-imports',
                prefer: 'type-imports',
            },
        ],
        'typescript/dot-notation': [
            'error',
            {
                allowIndexSignaturePropertyAccess: false,
                allowKeywords: true,
                allowPattern: '',
                allowPrivateClassPropertyAccess: false,
                allowProtectedClassPropertyAccess: false,
            },
        ],
        'typescript/method-signature-style': ['error', 'method'],
        'typescript/no-empty-interface': [
            'error',
            { allowSingleExtends: true },
        ],
        'typescript/no-inferrable-types': [
            'error',
            { ignoreParameters: false, ignoreProperties: false },
        ],
        'typescript/no-unnecessary-qualifier': 'error',
        'typescript/parameter-properties': [
            'error',
            { allow: [], prefer: 'class-property' },
        ],
        'typescript/prefer-find': 'error',
        'typescript/prefer-for-of': 'error',
        'typescript/prefer-function-type': 'error',
        'typescript/prefer-readonly': ['error', { onlyInlineLambdas: false }],
        'typescript/prefer-reduce-type-parameter': 'error',
        'typescript/prefer-regexp-exec': 'error',
        'typescript/prefer-return-this-type': 'error',
        'typescript/prefer-string-starts-ends-with': [
            'error',
            { allowSingleElementEquality: 'never' },
        ],
        'typescript/unified-signatures': [
            'error',
            {
                ignoreDifferentlyNamedParameters: false,
                ignoreOverloadsWithDifferentJSDoc: false,
            },
        ],

        // Suspicious
        'typescript/consistent-return': 'off', // unwanted
        'typescript/no-confusing-non-null-assertion': 'error',
        'typescript/no-extraneous-class': [
            'error',
            {
                allowConstructorOnly: false,
                allowEmpty: false,
                allowStaticOnly: false,
                allowWithDecorator: false,
            },
        ],
        'typescript/no-unnecessary-boolean-literal-compare': [
            'error',
            {
                allowComparingNullableBooleansToFalse: true,
                allowComparingNullableBooleansToTrue: true,
            },
        ],
        'typescript/no-unnecessary-template-expression': 'error',
        'typescript/no-unnecessary-type-arguments': 'error',
        'typescript/no-unnecessary-type-assertion': [
            'error',
            { checkLiteralConstAssertions: false, typesToIgnore: [] },
        ],
        'typescript/no-unnecessary-type-constraint': 'error',
        'typescript/no-unnecessary-type-conversion': 'error',
        'typescript/no-unnecessary-type-parameters': 'error',
        'typescript/no-unsafe-enum-comparison': 'error',
        'typescript/no-unsafe-type-assertion': 'error',
    },
};

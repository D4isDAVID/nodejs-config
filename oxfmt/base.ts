import type { OxfmtConfig } from 'oxfmt';

/**
 * The Oxfmt configuration, excluding options requiring plugins or configurable
 * via editorconfig.
 */
export const oxfmtBaseConfig: OxfmtConfig = {
    arrowParens: 'always',
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: 'auto',
    experimentalOperatorPosition: 'start',
    htmlWhitespaceSensitivity: 'strict',
    ignorePatterns: [],
    jsdoc: {
        addDefaultToDescription: true,
        bracketSpacing: false,
        capitalizeDescriptions: true,
        commentLineStrategy: 'multiline',
        descriptionTag: false,
        descriptionWithDot: true,
        keepUnparsableExampleIndent: false,
        lineWrappingStyle: 'greedy',
        preferCodeFences: true,
        separateReturnsFromParam: false,
        separateTagGroups: false,
    },
    jsxSingleQuote: true,
    objectWrap: 'collapse',
    overrides: [],
    proseWrap: 'always',
    quoteProps: 'as-needed',
    semi: true,
    singleAttributePerLine: false,
    sortImports: {
        customGroups: [],
        groups: [
            'builtin',
            'external',
            ['internal', 'subpath'],
            ['parent', 'sibling', 'index'],
            'style',
            'unknown',
        ],
        ignoreCase: false,
        internalPattern: ['~/'],
        newlinesBetween: false,
        order: 'asc',
        partitionByComment: false,
        partitionByNewline: false,
        sortSideEffects: false,
    },
    sortPackageJson: { sortScripts: false },
    sortTailwindcss: true,
    trailingComma: 'all',
    vueIndentScriptAndStyle: false,
};

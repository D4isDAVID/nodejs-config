import type { OxlintConfig } from 'oxlint';

export const oxlintNodeConfig: OxlintConfig = {
    plugins: ['node'],
    rules: {
        // Pedantic
        'unicorn/prefer-event-target': 'off', // unwanted
        'unicorn/prefer-import-meta-properties': 'error',

        // Restriction
        'node/handle-callback-err': 'off', // unwanted
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        'node/no-process-env': ['error', { allowedVariables: [] }],
        'node/no-top-level-await': ['error', { ignoreBin: true }],
        'unicorn/no-process-exit': 'error',
        'unicorn/prefer-node-protocol': 'error',

        // Style
        'node/callback-return': ['error', []],
        'node/exports-style': [
            'error',
            'module.exports',
            { allowBatchAssign: false },
        ],
        'node/global-require': 'off',
        'node/no-mixed-requires': [
            'error',
            { allowCall: false, grouping: false },
        ],
        'node/no-sync': ['error', { allowAtRootLevel: false, ignores: [] }],
        'unicorn/text-encoding-identifier-case': ['error', { withDash: false }],

        // Suspicious
        'node/no-exports-assign': 'error',
    },
};

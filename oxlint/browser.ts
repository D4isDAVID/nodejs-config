import type { OxlintConfig } from 'oxlint';

export const oxlintNodeConfig: OxlintConfig = {
    plugins: ['unicorn'],
    rules: {
        // Pedantic
        'unicorn/prefer-dom-node-append': 'error',
        'unicorn/prefer-dom-node-dataset': 'error',
        'unicorn/prefer-dom-node-remove': 'error',

        // Restriction
        'no-alert': 'error',
        'no-implicit-globals': 'off', // unwanted

        // Restriction
        'unicorn/no-document-cookie': 'error',

        // Style
        'no-script-url': 'error',
        'import/no-nodejs-modules': ['error', { allow: [] }],
        'unicorn/prefer-keyboard-event-key': 'error',
        'unicorn/prefer-modern-dom-apis': 'error',

        // Suspicious
        'unicorn/prefer-add-event-listener': 'error',
        'unicorn/require-post-message-target-origin': 'error',
    },
};

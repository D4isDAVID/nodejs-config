import type { OxfmtConfig } from 'oxfmt';

/**
 * The Oxfmt configuration for the svelte plugin.
 */
export const oxfmtSvelteConfig: OxfmtConfig = {
    svelte: {
        allowShorthand: true,
        indentScriptAndStyle: false,
        sortOrder: 'options-scripts-markup-styles',
    },
};

import type { OxfmtConfig } from 'oxfmt';

/**
 * The Oxfmt configuration for options configurable via editorconfig.
 */
export const oxfmtEditorconfig: OxfmtConfig = {
    endOfLine: 'lf',
    insertFinalNewline: true,
    printWidth: 80,
    singleQuote: true,
    tabWidth: 4,
    useTabs: false,
};

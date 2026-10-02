import { defineConfig } from 'oxlint';
import { oxlintCommonConfig } from './oxlint/common.ts';
import { oxlintNodeConfig } from './oxlint/node.ts';
import { oxlintTypescriptConfig } from './oxlint/typescript.ts';

export default defineConfig({
    extends: [oxlintCommonConfig, oxlintTypescriptConfig, oxlintNodeConfig],
    options: {
        denyWarnings: true,
        reportUnusedDisableDirectives: 'error',
        typeAware: true,
        typeCheck: true,
    },
    rules: { 'no-magic-numbers': 'off', 'max-lines': 'off' },
});

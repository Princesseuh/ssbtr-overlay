module.exports = {
    extends: ['stylelint-config-standard'],
    rules: {
        indentation: [4, { baseIndentLevel: 1 }],
        'selector-list-comma-newline-after': 'always-multi-line',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-after': 'always-single-line',
        'property-no-vendor-prefix': true,
    },
};
module.exports = {
    plugins: [
        "stylelint-order"
    ],
    ignoreFiles: [
        "./out/*.css"
    ],
    extends: [
        'stylelint-config-standard', 'stylelint-config-idiomatic-order'
    ],
    rules: {
        indentation: [4, { baseIndentLevel: 1 }],
        'selector-list-comma-newline-after': 'always-multi-line',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-after': 'always-single-line',
        'property-no-vendor-prefix': true,
    },
};
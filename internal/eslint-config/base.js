/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:prettier/recommended'],
	rules: {
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'no-console': 'warn',
	},
};

module.exports = {
	"env": {
		"es2021": true,
		"node": true,
		"jest": true,
	},
	"extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 12,
		"sourceType": "module",
	},
	"plugins": ["@typescript-eslint", "prefer-arrow"],
	"rules": {
		"indent": [
			"error",
			"tab",
			{
				"VariableDeclarator": 1,
				"SwitchCase": 1,
				"ignoredNodes": ["ConditionalExpression"],
			},
		],
		"linebreak-style": "off",
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"quote-props": ["error", "always"],
		"prefer-arrow-callback": ["error"],
		"brace-style": "error",
		"no-mixed-spaces-and-tabs": "off",
		"no-useless-escape": "off",
		"@typescript-eslint/no-explicit-any": "off",
		//# prefer arrow function rules
		"prefer-arrow/prefer-arrow-functions": [
			"error",
			{
				"disallowPrototype": true,
				"singleReturnOnly": false,
				"classPropertiesAllowed": false,
			},
		],
	},
};

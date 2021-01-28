import { extendTheme } from "@chakra-ui/react";

const refactorUiValues = [
	"0.25rem",
	"0.5rem",
	"0.75rem",
	"1rem",
	"1.5rem",
	"2rem",
	"3rem",
	"4rem",
	"6rem",
	"8rem",
	"12rem",
	"16rem",
	"24rem",
];

export default extendTheme({
	"space": refactorUiValues,
	"sizes": refactorUiValues,
	"components": {
		"Link": {
			"baseStyle": { "color": "blue.400" },
		},
		"Button": {
			"baseStyle": {
				"color": "white",
				"borderRadius": "2xl",
			},
			"sizes": {
				"md": {
					"h": 7,
					"minW": 6,
				},
			},
			"variants": {
				"solid": {
					"bg": "teal.300",
					"_hover": { "bg": "teal.200" },
					"_active": { "bg": "teal.100" },
				},
			},
		},
	},
});

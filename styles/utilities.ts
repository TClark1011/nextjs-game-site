import { useTheme } from "@chakra-ui/react";
import { topBarHeight } from "./styleVars";

export const useLandingPageHeight = (): string => {
	const { space } = useTheme();
	return `calc(100vh - ${space[topBarHeight]})`;
};

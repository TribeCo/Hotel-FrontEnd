import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	direction: "rtl",
	typography: {
		fontFamily: "vazir, roboto",
	},
	palette: {
		mode: "dark",
		background: "#282A36",
		currentLine: {
			main: "#44475A",
		},
		foreground: {
			main: "#f8f8f2",
		},
		comment: {
			main: "#6272a4",
		},
		cyan: {
			main: "#8BE9FD",
		},
		grren: {
			main: "#50FA7B",
		},
		orange: {
			main: "#FFB86C",
		},
		pink: {
			main: "#FF79C6",
		},
		purple: {
			main: "#BD93F9",
		},
		red: {
			main: "#FF5555",
		},
		yellow: {
			main: "#F1FA8C",
		},
	},
});

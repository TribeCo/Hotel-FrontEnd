import { ThemeProvider, createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";

import { Button } from "@mui/material";

// Create theme
const theme = createTheme({
	direction: "rtl",
});

// Create rtl cache
const cacheRtl = createCache({
	key: "muirtl",
	stylisPlugins: [prefixer, rtlPlugin],
});

const App = () => {
	return (
		<CacheProvider value={cacheRtl}>
			<ThemeProvider theme={theme}>
				<HelmetProvider>
					<Helmet>
						<title>Hotel Transylvania</title>
					</Helmet>
					<div>
						<Button variant="contained">دکمه</Button>
					</div>
				</HelmetProvider>
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;

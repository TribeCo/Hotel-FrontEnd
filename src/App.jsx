import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { Button } from "@mui/material";

import { theme } from "./layouts/theme";

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
					<Button
						variant="contained"
						color="pink">
						دکمه
					</Button>
				</HelmetProvider>
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;

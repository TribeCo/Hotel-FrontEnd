import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./layouts/theme/index.js";
import Router from "./routes";
import { AuthProvider } from "./context/AuthContext.jsx";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./components/utils/ErrorFallback.jsx";

// Create rtl cache
const cacheRtl = createCache({
	key: "muirtl",
	stylisPlugins: [prefixer, rtlPlugin],
});

const App = () => {
	return (
		<CacheProvider value={cacheRtl}>
			<ThemeProvider theme={theme}>
				<ErrorBoundary
					FallbackComponent={ErrorFallback}
					onReset={() => {
						window.location.replace("https://hoteltransylvania.ir/");
					}}>
					<HelmetProvider>
						<Helmet>
							<title>Hotel Transylvania</title>
						</Helmet>
						<AuthProvider>
							<BrowserRouter>
								<Router />
							</BrowserRouter>
						</AuthProvider>
					</HelmetProvider>
				</ErrorBoundary>
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;

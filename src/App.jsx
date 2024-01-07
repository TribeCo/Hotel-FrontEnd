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

import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
	return (
		<div role="alert" style={{ backgroundColor: '#44475A', padding: '20px', borderRadius: '10px' }}>
			<p style={{ backgroundColor: '#8BE9FD', fontWeight: 'bold', fontSize: '18px' }}>Something went wrong:</p>
			<pre style={{ backgroundColor: '#BD93F9', padding: '15px', border: '1px solid #ffcccc', borderRadius: '5px' }}>
				{error.message}
			</pre>
			<button onClick={resetErrorBoundary} style={{ backgroundColor: '#ff4d4d', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
				Try again
			</button>
		</div>
	);
}


// Create rtl cache
const cacheRtl = createCache({
	key: "muirtl",
	stylisPlugins: [prefixer, rtlPlugin],
});




const App = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}
			onReset={() => {
				// reset the state of your app so the error doesn't happen again
			}}
		>
			<CacheProvider value={cacheRtl}>
				<ThemeProvider theme={theme}>
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
				</ThemeProvider>
			</CacheProvider>
		</ErrorBoundary>
	);
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import LandingPage from './components/LandingPage/LandingPage'

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <App /> */}
		<LandingPage />
	</React.StrictMode>,
);
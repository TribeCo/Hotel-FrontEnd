import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


import HomePage from "./components/HomePage/HomePage";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <App /> */}
		<HomePage />
	</React.StrictMode>,
);
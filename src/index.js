import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Suspense
		fallback={
			<div className="bg-gray-800 w-full h-full text-center text-4xl text-white">
				Wait........
			</div>
		}
	>
		<BrowserRouter>
			<React.StrictMode>
				<ContextProvider>
					<App />
				</ContextProvider>
			</React.StrictMode>
		</BrowserRouter>
	</Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

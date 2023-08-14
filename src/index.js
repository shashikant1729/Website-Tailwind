import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const Appy = lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));

const PreLoader = () => {
	return (
		<div className="fixed w-screen h-screen  bg-black flex m-auto">
			<button
				type="button"
				className="w-6 h-6 bg-white rounded-full animate-bounce m-auto transition-all delay-75"
			></button>
			<button
				type="button"
				className="w-6 h-6 bg-white rounded-full animate-bounce m-auto transition-all delay-75"
			></button>
			<button
				type="button"
				className="w-6 h-6 bg-white rounded-full animate-bounce m-auto transition-all delay-75"
			></button>
		</div>
	);
};
root.render(
	<Suspense fallback={<PreLoader />}>
		<BrowserRouter>
			<React.StrictMode>
				<ContextProvider>
					<Appy />
					{/* <PreLoader/> */}
				</ContextProvider>
			</React.StrictMode>
		</BrowserRouter>
	</Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

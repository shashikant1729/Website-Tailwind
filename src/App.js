/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import { Home, About } from "./pages/Index";
import { Bar, Setting } from "./components/Index";
const Homy = lazy(() => import("./pages/Home"));
const Abouty = lazy(() => import("./pages/About"));
const Contacty = lazy(() => import("./pages/Contact"));
const App = () => {
	const { setCurrentSetting, setActiveMenu } = useStateContext();
	return (
		<div className="absolute w-screen h-screen max-h-screen overflow-hidden">
			<div
				onClick={() => {
					setActiveMenu(false);
					setCurrentSetting(false);
				}}
				className=" w-full h-full z-100"
			>
				{/* <BrowserRouter> */}
				<Routes>
					<Route
						exact
						path="/"
						element={
							<Suspense
								fallback={
									<div className="bg-gray-800 w-full h-full text-center text-8xl text-white">
										Wait for Home....
									</div>
								}
							>
								<Homy />
							</Suspense>
						}
					/>
					<Route
						exact
						path="/about"
						element={
							<Suspense
								fallback={
									<div className="bg-gray-800 w-full h-full  text-center text-8xl text-white">
										Wait for About....
									</div>
								}
							>
								<Abouty />
							</Suspense>
						}
					/>
					<Route
						exact
						path="/contact"
						element={
							<Suspense
								fallback={
									<div className="bg-gray-800 w-full h-full  text-center text-8xl text-white">
										Wait for Contact....
									</div>
								}
							>
								<Contacty />
							</Suspense>
						}
					/>
				</Routes>
				{/* </BrowserRouter> */}
			</div>
			<div className="absolute top-2 right-8 ">
				<Bar />
			</div>
			<div className="absolute top-40 right-0 ">
				<Setting />
			</div>
		</div>
	);
};

export default App;

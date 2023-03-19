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
			<Suspense
				fallback={
					<div className="bg-gray-800 w-full h-full text-center text-4xl text-white">
						Wait........
					</div>
				}
			>
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
								// <Suspense
								// 	fallback={
								// 		<div className="bg-gray-800 w-full h-full text-center text-8xl text-white">
								// 			Wait for Home....
								// 		</div>
								// 	}
								// >
								// </Suspense>
								<Homy />
							}
						/>
						<Route
							exact
							path="/about"
							element={
								// <Suspense
								// 	fallback={
								// 		<div className="bg-gray-800 w-full h-full  text-center text-8xl text-white">
								// 			Wait for About....
								// 		</div>
								// 	}
								// >
								// </Suspense>
								<Abouty />
							}
						/>
						<Route
							exact
							path="/contact"
							element={
								// <Suspense
								// 	fallback={
								// 		<div className="bg-gray-800 w-full h-full  text-center text-8xl text-white">
								// 			Wait for Contact....
								// 		</div>
								// 	}
								// >
								// </Suspense>
								<Contacty />
							}
						/>
					</Routes>
					{/* </BrowserRouter> */}
				</div>
			</Suspense>
			<div className="absolute top-1 right-6 ">
				<Bar />
			</div>
			<div className="absolute top-28 right-0 ">
				<Setting />
			</div>
		</div>
	);
};

export default App;

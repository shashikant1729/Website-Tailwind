/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About } from "./pages/Index";
import { Bar, Settings } from "./components/Index";
const Homy = lazy(() => import("./pages/Home"));
const Abouty = lazy(() => import("./pages/About"));
const Contacty = lazy(() => import("./pages/Contact"));
const App = () => {
	return (
		<div className="w-screen h-screen max-h-screen overflow-hidden">
			<div className="absolute top-4 right-10 z-1">
				<Bar />
			</div>
			<div className="w-full h-full z-2">
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
					<Route exact path="/contact" element={<Contacty />} />
				</Routes>
			{/* </BrowserRouter> */}
			</div>
		</div>
	);
};

export default App;

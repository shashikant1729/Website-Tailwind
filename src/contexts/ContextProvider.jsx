/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(false);
	const [currentColor, setCurrentColor] = useState("#5018de");
	const [currentSetting, setCurrentSetting] = useState(false);
	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				currentSetting,
				setCurrentSetting,
				currentColor, 
				setCurrentColor
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);

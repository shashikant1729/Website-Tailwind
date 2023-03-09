/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [currentColor, setCurrentColor] = useState("#b893b6");
	const [currentSide, setCurrentSide] = useState("School");
	const [showDiv, setShowDiv] = useState({
		div: false,
		name: "School",
	});
	const [adminReg, setAdminReg] = useState({
		first_name: "",
		last_name: "",
		address: "",
		gender:'',
		role:'Admin',
		age:'',
		mobile_number: "",
		g_mail: "",
		password: "",
		confirm_password: "",
		// school_name: "",
		// school_code: "",
		// school_logo: "",
		// school_slogan: "",
		// school_address: "",
		// school_landMark: "",
		// school_tele_number: "",
	});
	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				currentColor,
				currentSide,
				setCurrentSide,
				setCurrentColor,
				showDiv,
				setShowDiv,
				adminReg,
				setAdminReg
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);

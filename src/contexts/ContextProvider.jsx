/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(false);
	const [currentColor, setCurrentColor] = useState("#fa0707");
	const [currentSetting, setCurrentSetting] = useState(false);
	const [aboutData, setAboutData] = useState({
		myResume: "education",
		skills: [
			{
				name: "HTML",
				color: "red-500",
			},
			{
				name: "React",
				color: "blue-500",
			},
			{
				name: "Tailwind",
				color: "orange-500",
			},
			{
				name: "Javascript",
				color: "green-500",
			},
			{
				name: "Redux",
				color: "amber-600",
			},
			{
				name: "CSS",
				color: "teal-400",
			},
		],
		education:[
			{
				name:"High School",
				score:"",
			},
			{
				name:"Senior Secondary High School",
				score:"",
			},
			{
				name:"Bachelor Of Technology",
				score:"",
			},
			{
				name:"Senior Secondary High School",
				score:"",
			},
			{
				name:"Bachelor Of Technology",
				score:"",
			},
			{
				name:"Senior Secondary High School",
				score:"",
			},
			{
				name:"Bachelor Of Technology",
				score:"",
			},
			
		],
		experience:[
			{
				name:'Project',
				descriptions:'',
				date:'',
			},
			{
				name:'Project',
				descriptions:'',
				date:'',
			},
			{
				name:'Project',
				descriptions:'',
				date:'',
			},
			{
				name:'Project',
				descriptions:'',
				date:'',
			},
			{
				name:'Project',
				descriptions:'',
				date:'',
			},
			{
				name:'Project',
				descriptions:'',
				date:'',
			},
		]
	});
	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				currentSetting,
				setCurrentSetting,
				currentColor,
				setCurrentColor,
				aboutData,
				setAboutData,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);

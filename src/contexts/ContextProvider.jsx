/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";
import edu1 from "../assets/images/class.png";
import edu2 from "../assets/images/b.tech.png";
import project1 from "../assets/images/Projects/pro1.png";
import company from "../assets/images/Experience/Company.png";
import ees from "../assets/images/Experience/Udyam.png";
import sudoku from "../assets/images/Experience/sudoku.png";
import mosaic from "../assets/images/Experience/mosaic.png"


const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(false);
	const [currentColor, setCurrentColor] = useState("#fa0707");
	const [currentSetting, setCurrentSetting] = useState(false);
	const [aboutData, setAboutData] = useState({
		myResume: "experience",
		skills: [
			{
				name: "HTML",
				color: "rbg(168, 50, 80)",
				percentage: 100,
			},
			{
				name: "CSS",
				color: "rgb(24, 31, 237)",
				percentage: 100,
			},
			{
				name: "React",
				color: "rgb(50, 168, 82)",
				percentage: 90,
			},
			{
				name: "Tailwind",
				color: "rgb(219, 24, 237)",
				percentage: 75,
			},
			{
				name: "Javascript",
				color: "rgb(24, 230, 237)",
				percentage: 80,
			},
			{
				name: "Redux",
				color: "rgb(237, 202, 24)",
				percentage: 90,
			},
		],
		education: [
			{
				name: "High School",
				school: "Sacred Heart School",
				score: "95.00 %",
				img: edu1,
				about: "High School",
				txt: "I had Completed my High School From Sacred Heart School In Mau, Uttar Pradesh.",
			},
			{
				name: "Senior Secondary High School",
				school: "Sacred Heart School",
				score: "90.20 %",
				img: edu1,
				about: "Senior High School",
				txt: "I had Completed my Senior Secondary High School From Sacred Heart School In Mau, Uttar Pradesh",
			},
			{
				name: "Bachelor Of Technology",
				school: "Indian Institute of Technology IIT(BHU), Varanasi",
				score: "8.77 CGPA",
				img: edu2,
				about: "Bachelor Of Technology",
				txt: "Current pursuing Electronics Engineering From IIT BHU",
			},
		],
		experience: [
			{
				name: "Co-cordinator",
				img: ees,
				descriptions: "Co-coordinator of External Affairs at Udyam'22,Collaborated with the publicity team andmentored campus ambassadors to expand participation and reach for UDYAM, the annualtechnical fest hosted by the Department of ECE at IIT BHU",
				link:"https://drive.google.com/file/d/1QgfQSQUrImeT-Sn-S-PvFygyDNWliEZM/view?usp=sharing",
				date: "March'22 - April'22",
			},
			{
				name: "Indus Valley Partners",
				img: company,
				descriptions: "Worked As Technology Intern under IVP Enterprise Data Management Team (EDM) Team",
				link:"https://drive.google.com/file/d/1QOruFSj5l_kUmD4Ssoy_xwLJ5V10d2oZ/view?usp=sharing",
				date: "June'23-July'23",
			},
			{
				name: "Real Time Sudoku Solver ",
				img: sudoku,
				descriptions: "Built a Sudoku-solving ML with real-time digit segmentation and noise reduction using OpenCV and a webcam",
				link:"https://github.com/shashikant1729/",
				date: "Mar'22 - Apr'22",
			},
			{
				name: "Handwritten Captcha Recognizer",
				img: mosaic,
				descriptions: "Made a Machine Learning model that can recognize various handwritten characters",
				link:"https://github.com/shashikant1729/",
				date: "Mar'22 - Apr'22",
			},
		],
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

import React from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const Bar = () => {
	const { activeMenu, setActiveMenu, currentColor , setCurrentSetting} = useStateContext();
	// const [isNavOpen, setIsNavOpen] = useState(false);
	// console.log(isNavOpen);

	return (
		<div className="flex items-center justify-between  py-8 ">
			<div
				className={`flex flex-col transition-all rounded-md  bg-black p-4 ${
					activeMenu ? "w-52 max-h-min " : "w-14 max-h-min"
				}`}
			>
				<div className="flex w-full justify-end h-6">
					<button
						type="button"
						onClick={() => (setActiveMenu((prev) => !prev, setCurrentSetting(false)))}
						className=" flex flex-col justify-between  w-8 h-6"
					>
						<span
							className={`h-0.5 w-full transition-all duration-100  bg-white  ${
								activeMenu ? `invisible` : `block `
							}`}
						></span>
						<span
							className={`block h-0.5 w-full origin-center transition-all duration-500   bg-white ${
								activeMenu ? `rotate-225` : ``
							}`}
						></span>
						<span
							className={` h-0.5 w-full transition-all duration-500  origin-center  -mt-3 bg-white ${
								activeMenu ? `block -rotate-225` : `invisible`
							}`}
						></span>
						<span
							className={` h-0.5 w-full transition-all duration-100   bg-white ${
								activeMenu ? `invisible` : `block`
							}`}
						></span>
					</button>
				</div>
				<div
					className={`text-white transition-all flex flex-col justify-between ${
						activeMenu
							? "w-full h-full delay-1000 "
							: "w-0 h-0 overflow-hidden delay-0"
					}`}
				>
					<div className="w-full flex flex-col gap-5 pb-5">
						<NavLink
							onClick={() => setActiveMenu(false)}
							className={({ isActive }) =>
								`h-full w-1 customCBg ${
									isActive ? "customColor customBg" : "h-full w-1 "
								}`
							}
							to="/"
						>
							<p className="pl-5">Home</p>
						</NavLink>
						<NavLink
							onClick={() => setActiveMenu(false)}
							className={({ isActive }) =>
								`h-full w-1 customCBg ${
									isActive ? "customColor customBg" : "h-full w-1 "
								}`
							}
							to="/about"
						>
							<p className="pl-5">About</p>
						</NavLink>
						<NavLink
							onClick={() => setActiveMenu(false)}
							className={({ isActive }) =>
								`h-full w-1 customCBg ${
									isActive ? "customColor customBg" : "h-full w-1 "
								}`
							}
							to="/contact"
						>
							<p className="pl-5">Contact</p>
						</NavLink>
					</div>
				</div>
			</div>
			<style>
				{`  
                    .customCBg:hover{
						color:${currentColor};
						background-color:${currentColor}
						
					}
					.customColor {
						color:${currentColor}
					}
					.customHover:hover{
						color:${currentColor}
					}
					.customBg{
						background-color:${currentColor}
					}
					
					`}
			</style>
		</div>
	);
};

export default Bar;

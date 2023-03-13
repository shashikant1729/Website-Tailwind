import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineWaterDrop } from "react-icons/md";
import { BsFillDropletFill } from "react-icons/bs";
import { FaEyeDropper } from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";

const Setting = () => {
	const { currentColor, setCurrentColor, currentSetting, setCurrentSetting } =
		useStateContext();
	// const [isNavOpen, setIsNavOpen] = useState(false);
	// console.log(isNavOpen);
	const allColors = [
		{
			id: 1,
			color: "#32a842",
		},
		{
			id: 2,
			color: "#a83232",
		},
		{
			id: 3,
			color: "#a89e32",
		},
		{
			id: 4,
			color: "#6da832",
		},
		{
			id: 5,
			color: "#32a88e",
		},
		{
			id: 6,
			color: "#3285a8",
		},
		{
			id: 7,
			color: "#3632a8",
		},
		{
			id: 8,
			color: "#f50ace",
		},
	];

	return (
		<div className="flex items-center justify-between  py-8 ">
			<div
				className={`flex flex-col rounded-l-md transition-all bg-black  p-4 ${
					currentSetting ? "w-60 max-h-min" : "w-14 max-h-min"
				}`}
			>
				<div className="flex w-full justify-end h-6">
					<button
						type="button"
						onClick={() => setCurrentSetting((prev) => !prev)}
						className=" flex flex-col justify-between  w-8 h-6 text-white"
					>
						<AiOutlineSetting
							className={`w-full h-full ${
								currentSetting ? "" : "animate-spin"
							} `}
						/>
					</button>
				</div>
				<div
					className={`text-white transition-all flex flex-col justify-between ${
						currentSetting
							? "w-full h-full delay-600 "
							: "w-0 h-0 overflow-hidden delay-0"
					}`}
				>
					<div className="w-full flex flex-col gap-5">
						<div className="grid grid-rows-3 gap-6">
							{allColors
								.reduce(
									(r, e, i) =>
										(i % 3 ? r[r.length - 1].push(e) : r.push([e])) && r,
									[]
								)
								.map((items, index1) => (
									<div className="grid grid-cols-3" key={index1}>
										{items.map((item, index2) => (
											<button key={index2}>
												<FaEyeDropper
													onClick={() => {
														setCurrentSetting(false);
														setCurrentColor(item.color);
													}}
													className={`text-3xl ${
														currentColor === item.color ? "animate-bounce" : ""
													} `}
													style={{ color: `${item.color}` }}
												/>
											</button>
										))}
									</div>
								))}
						</div>
						<div className="w-2/3 h-0.5  bg-slate-500 place-self-center mr-4"></div>
						<p className="w-full text-center">Body Skin</p>
						<div>
							<div className="mx-auto flex justify-center flex-col gap-6">
								{/* Code block starts */}
								<div className="flex items-center">
									<div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
										<input
											defaultChecked
											type="radio"
											name="radio"
											className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
										/>
										<div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
									</div>
									<p className="ml-2 text-sm leading-4 font-normal text-white dark:text-gray-100">
										Light
									</p>
								</div>
								{/* Code block ends */}
								{/* Code block starts */}
								<div className="flex items-center">
									<div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
										<input
											type="radio"
											name="radio"
											className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
										/>
										<div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
									</div>
									<p className="ml-2 text-sm leading-4 font-normal text-white dark:text-gray-100">
										Dark
									</p>
								</div>
								{/* Code block ends */}
								{/* Code block starts */}
								{/* Code block ends */}
								<style>
									{`  .checkbox:checked {
                        border: none;
                    }
                    .checkbox:checked + .check-icon {
                        display: flex;
                    }`}
								</style>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Setting;

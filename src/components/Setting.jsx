/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { FaEyeDropper } from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";
import { SketchPicker } from "react-color";
import { Switch } from "@material-tailwind/react";

const Setting = () => {
	const { currentColor, setCurrentColor, currentSetting, setCurrentSetting } =
		useStateContext();
	// const [isNavOpen, setIsNavOpen] = useState(false);
	// console.log(isNavOpen);
	const allColors = [
		{
			id: 0,
			color: "#fa0707",
		},
		{
			id: 1,
			color: "#fabd07",
		},
		{
			id: 2,
			color: "#b9fa07",
		},
		{
			id: 3,
			color: "#50fa07",
		},
		{
			id: 4,
			color: "#07faa1",
		},
		{
			id: 5,
			color: "#07b9fa",
		},
		{
			id: 6,
			color: "#071ffa",
		},
		{
			id: 7,
			color: "#bd07fa",
		},
		{
			id: 8,
			color: "#fa07b9",
		},
		{
			id: 9,
			color: "#fa0740",
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
							style={{ color: currentColor }}
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
						{/* <SketchPicker /> */}
						<p className="w-full text-center font-bold">Body Skin</p>
						<div>
							<div className="mx-auto w-full flex justify-center flex-col gap-6">
								
								<div class="inline-flex items-center">
									<p className="px-4">Light</p>
									<div class="relative  h-4 w-8 cursor-pointer rounded-full">
									
										<input
											id="switch-component"
											type="checkbox"
											class="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-pink-500 peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
										/>
										<label
											for="switch-component"
											class="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
										> 
											<div
												class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
												data-ripple-dark="true"
											></div>
										</label>
									</div>
									<p className="px-4">Dark</p>
								</div>

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

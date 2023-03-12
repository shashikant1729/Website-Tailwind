import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Bar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	console.log(isNavOpen);

	return (
		<div className="flex items-center justify-between  py-8">
			<div
				className={`flex flex-col transition-all  bg-black p-4 ${
					isNavOpen ? "w-60 h-72" : "w-16 h-14"
				}`}
			>
				<div className="flex w-full justify-end h-6">
					<button
						type="button"
						onClick={() => setIsNavOpen((prev) => !prev)}
						className=" flex flex-col justify-between  w-8 h-6"
					>
						<span
							className={`h-0.5 w-full transition-all duration-100  bg-white  ${
								isNavOpen ? `invisible` : `block `
							}`}
						></span>
						<span
							className={`block h-0.5 w-full origin-center transition-all duration-500   bg-white ${
								isNavOpen ? `rotate-225` : ``
							}`}
						></span>
						<span
							className={` h-0.5 w-full transition-all duration-500  origin-center  -mt-3 bg-white ${
								isNavOpen ? `block -rotate-225` : `invisible`
							}`}
						></span>
						<span
							className={` h-0.5 w-full transition-all duration-100   bg-white ${
								isNavOpen ? `invisible` : `block`
							}`}
						></span>
					</button>
				</div>
				<div
					className={`text-white transition-all flex flex-col justify-between ${
						isNavOpen
							? "w-full h-full delay-1000 "
							: "w-0 h-0 overflow-hidden delay-0"
					}`}
				>
					<div className="w-full flex flex-row gap-5">
						<div className="block h-full w-1 bg-pink-600"></div>
						<NavLink to="/">Home</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bar;

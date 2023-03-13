import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";

const Setting = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	console.log(isNavOpen);
	return (
		<div className="flex items-center justify-between  py-8 ">
			<div
				className={`flex flex-col rounded-l-md transition-all  bg-black p-4 ${
					isNavOpen ? "w-60 max-h-min" : "w-14 max-h-min"
				}`}
			>
				<div className="flex w-full justify-end h-6">
					<button
						type="button"
						onClick={() => setIsNavOpen((prev) => !prev)}
						className=" flex flex-col justify-between  w-8 h-6 text-white"
					>
            <AiOutlineSetting className="w-full h-full"/>
          </button>
				</div>
				<div
					className={`text-white transition-all flex flex-col justify-between ${
						isNavOpen
							? "w-full h-full delay-600 "
							: "w-0 h-0 overflow-hidden delay-0"
					}`}
				>
					<div className="w-full flex flex-col gap-5">
						<NavLink
							className={({ isActive }) =>
								`h-full w-1 hover:bg-pink-600 hover:text-pink-600 ${
									isActive ? "text-pink-600  bg-pink-600" : "h-full w-1"
								}`
							}
							to="/"
						>
							<p className="pl-5">Home</p>
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`h-full w-1 hover:bg-pink-600 hover:text-pink-600 ${
									isActive ? "text-pink-600  bg-pink-600" : "h-full w-1"
								}`
							}
							to="/about"
						>
							<p className="pl-5">About</p>
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`h-full w-1 hover:bg-pink-600 hover:text-pink-600 ${
									isActive ? "text-pink-600  bg-pink-600" : "h-full w-1"
								}`
							}
							to="/contact"
						>
							<p className="pl-5">Contact</p>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Setting;

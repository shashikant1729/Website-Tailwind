import React from "react";
import my_image from "../assets/images/my_image.png";
import { FaBirthdayCake } from "react-icons/fa";
import { BsFlag, BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { AiOutlineSetting } from "react-icons/ai";

const About = () => {
	return (
		<div className="w-full">
			<div className="flex text-3xl sm:text-4xl md:text-5xl lg:text-6xl h-40 w-full text-center align-self-center">
				<div className="m-auto mt-20">
					About <span className="text-pink-600">Me</span>{" "}
				</div>
			</div>
			<div className="flex flex-col">
				<div className="flex ">
					<div className="flex flex-row">
						<div className="w-1/3">
							<img src={my_image} alt="my_image" className="w-full" />
						</div>
						<div className="w-2/3">
							<p>
								I'm Daniel Martin, british based web designer and front‑end
								developer living in London focused on crafting clean, creative
								and user‑friendly experiences, I build beautiful and powerful
								websites and android applications.
							</p>
							<div className="grid grid-rows-3 grid-flow-col gap-4">
								<div className="flex flex-row gap-4 text-xl">
									<span className="text-pink-600">
										<FaBirthdayCake />
									</span>{" "}
									<span>Birthday : </span> <span>June 2002</span>
								</div>
								<div className="flex flex-row gap-4 text-xl">
									<span className="text-pink-600">
										<BsFlag />
									</span>{" "}
									<span>Nationality : </span> <span>Indian</span>
								</div>
								<div className="flex flex-row gap-4 text-xl">
									<span className="text-pink-600">
										<AiOutlineSetting />
									</span>{" "}
									<span>Experience : </span>
									<span>1 Year </span>
								</div>
								<div className="flex flex-row gap-4 text-xl">
									<span className="text-pink-600">
										<BsFillTelephoneFill />
									</span>{" "}
									<span>Phone : </span> <span>+91 9369 249395</span>
								</div>
								<div className="flex flex-row gap-4 text-xl">
									<span className="text-pink-600">
										<HiLocationMarker />
									</span>{" "}
									<span>Address : </span>
									<span>Varanasi, India</span>
								</div>
								<div className="flex flex-row gap-4 text-xl">
									<span className="text-pink-600">
										<GrMail />
									</span>{" "}
									<span>Email : </span>
									<span>shashi1729kant@gmail.com</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex"></div>
				<div className="flex"></div>
				<div className="flex"></div>
				<div className="flex"></div>
			</div>
		</div>
	);
};

export default About;

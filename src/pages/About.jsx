/* eslint-disable no-unused-vars */
import React from "react";
import my_image from "../assets/images/my_image_1.png";
import { FaBirthdayCake } from "react-icons/fa";
import { BsFlag, BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { AiOutlineSetting, AiOutlineHeart } from "react-icons/ai";
import { AboutCarousel } from "../components/Index";
import { MdOutlineCases } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { useStateContext } from "../contexts/ContextProvider";

const About = () => {
	const { currentColor } = useStateContext();
	return (
		<div className="w-full h-full max-h-screen overflow-y-auto ">
			<div className="flex text-3xl sm:text-4xl md:text-5xl lg:text-6xl h-40 w-full text-center align-self-center">
				<div className="m-auto mt-20 font-abfat">
					About <span className="text-pink-600">Me</span>{" "}
				</div>
			</div>
			<div className="flex flex-col w-full">
				<div className="flex flex-col lg:flex-row  p-1 lg:p-8">
					<div className="w-2/5  lg:w-1/3 text-center  lg:h-96 overflow-hidden  m-auto py-4">
						<img
							src={my_image}
							alt="my_image"
							className="w-full rounded-xl"
							width="500"
							height="1000"
						/>
					</div>
					<div className="pl-4 w-full lg:pl-8 lg:pt-12 pt-4 pb-2">
						<p className="indent-5  text-lg tracking-widest font-serif antialiased ">
							I'm Shashi Kant, india based web designer and front‑end developer
							living in Varanasi focused on crafting clean, creative and
							user‑friendly experiences, I build beautiful and powerful websites
							and web applications.
						</p>
						<div className="grid grid-rows-3 md:grid-flow-col gap-4 pt-8 font-sans ">
							<div className="flex flex-row gap-2 text-lg">
								<span className="text-pink-600">
									<FaBirthdayCake />
								</span>{" "}
								<span>Birthday : </span>{" "}
								<span className="font-semibold">June 2002</span>
							</div>
							<div className="flex flex-row gap-2 text-lg">
								<span className="text-pink-600">
									<BsFlag />
								</span>{" "}
								<span>Nationality : </span>{" "}
								<span className="font-semibold">Indian</span>
							</div>
							<div className="flex flex-row gap-2 text-lg">
								<span className="text-pink-600">
									<AiOutlineSetting />
								</span>{" "}
								<span>Experience : </span>
								<span className="font-semibold">1 Year </span>
							</div>
							<div className="flex flex-row gap-2 text-lg">
								<span className="text-pink-600">
									<BsFillTelephoneFill />
								</span>{" "}
								<span>Phone : </span>{" "}
								<span className="font-semibold">+91 9369 249395</span>
							</div>
							<div className="flex flex-row gap-2 text-lg">
								<span className="text-pink-600">
									<HiLocationMarker />
								</span>{" "}
								<span>Address : </span>
								<span className="font-semibold">Varanasi, India</span>
							</div>
							<div className="flex flex-row gap-2 text-lg">
								<span className="text-pink-600">
									<GrMail />
								</span>{" "}
								<span>Email : </span>
								<span className="font-semibold">shashi1729kant@gmail.com</span>
							</div>
						</div>
						<div className="pt-10">
							<button
								type="button"
								className="rounded-md bg-pink-600 text-white hover:bg-slate-200 hover:text-pink-600 transition-all delay-150 p-4 text-md font-semibold border-3 border-pink-600"
							>
								Download My CV
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full py-16 px-12 bg-slate-100">
					<div className="w-full place-content-center pb-4">
						<p className="   text-4xl text-center font-serif font-bold ">
							My Resume
						</p>
					</div>

					<div className="flex flex-col pt-10">
						<div className="text-xl text-center font-serif font-bold ">
							<span>
								<button className="text-pink-600 md:mx-2 uppercase">
									Experience
								</button>
							</span>
							|
							<span>
								<button className="md:mx-2 uppercase">Education</button>
							</span>
						</div>
						<div>
							<AboutCarousel />
						</div>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row w-full py-16 px-12 justify-around gap-24 place-items-center">
					{/* <div
						className="realtive h-96 w-80 md:origin-top-left md:rotate-12 md:-left-56 md:-top-20  z-1 origin-top-left rotate-45 -left-8 -bottom-60 -z-1"
						style={{
							background:
								"radial-gradient(circle at center, rgb(219, 39, 119 ) 20%, transparent 20%), transparent",
							backgroundSize: "19px 18px",
						}}
					></div> */}
					<div className="flex flex-col gap-4 place-items-center font-bold text-lg z-2 text-center ">
						<p className="text-4xl rounded-3xl drop-shadow-xl bg-pink-600 p-2 text-white">
							<MdOutlineCases />
						</p>
						<p className="text-4xl">2</p>
						<p>Years Experience</p>
					</div>
					<div className="flex flex-col gap-4 place-items-center font-bold text-lg text-center">
						<p className="text-4xl rounded-3xl drop-shadow-xl bg-pink-600 p-2 text-white">
							<BiLike />
						</p>
						<p className="text-4xl">15</p>
						<p>Project Done</p>
					</div>
					<div className="flex flex-col gap-4 place-items-center font-bold text-lg text-center">
						<p className="text-4xl rounded-3xl drop-shadow-xl bg-pink-600 p-2 text-white">
							<AiOutlineHeart />
						</p>
						<p className="text-4xl">20</p>
						<p>Happy Customers</p>
					</div>
				</div>
				<div className="flex flex-col w-full py-16 px-12 bg-slate-100">
					<div className="w-full place-content-center pb-4">
						<p className="   text-4xl text-center font-serif font-bold ">
							Skill
						</p>
					</div>

					<div className="flex flex-col pt-10">
						<AboutCarousel />
					</div>
				</div>
				<div className="flex"></div>
			</div>
		</div>
	);
};

export default About;

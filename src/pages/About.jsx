/* eslint-disable no-unused-vars */
import React from "react";
import my_image from "../assets/images/my_image_1.png";
import { FaBirthdayCake } from "react-icons/fa";
import { BsFlag, BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { AiOutlineSetting, AiOutlineHeart } from "react-icons/ai";
import { AboutCarousel, AboutScroll, ProgressBar } from "../components/Index";
import { MdOutlineCases } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { useStateContext } from "../contexts/ContextProvider";
import { queryByTestId } from "@testing-library/react";
const resume = require("../assets/Documents/09620202207_Student_Details.pdf");

const About = () => {
	const { currentColor, aboutData, setAboutData } = useStateContext();
	// console.log(aboutData);

	const pdfDownload = () => {
		// using Java Script method to get PDF file
		fetch(resume).then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement("a");
				alink.href = fileURL;
				alink.download = "Shashi_Kant_Resume.pdf";
				alink.click();
			});
		});
	};
	return (
		<div className="w-full h-full max-h-screen overflow-y-auto ">
			<div className="flex text-3xl sm:text-4xl md:text-5xl lg:text-6xl h-40 w-full text-center align-self-center">
				<div className="m-auto mt-20 font-abfat">
					About <span className="customColor">Me</span>{" "}
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
								<span className="customColor text-2xl">
									<FaBirthdayCake />
								</span>{" "}
								<span>Birthday : </span>{" "}
								<span className="font-semibold">June 2002</span>
							</div>
							<div className="flex flex-row gap-2 text-lg">
								<span className="customColor text-2xl">
									<BsFlag />
								</span>{" "}
								<span>Nationality : </span>{" "}
								<span className="font-semibold">Indian</span>
							</div>
							<div className="flex flex-row gap-2 text-lg">
								<span className="customColor text-2xl">
									<AiOutlineSetting />
								</span>{" "}
								<span>Experience : </span>
								<span className="font-semibold">1 Year </span>
							</div>
							<div className="flex flex-row gap-2 text-lg">
								<span className="customColor text-2xl">
									<BsFillTelephoneFill />
								</span>{" "}
								<span>Phone : </span>{" "}
								<span className="font-semibold">+91 9369 249395</span>
							</div>
							<div className="flex flex-row gap-2 text-lg">
								<span className="customColor text-2xl">
									<HiLocationMarker />
								</span>{" "}
								<span>Address : </span>
								<span className="font-semibold">Varanasi, India</span>
							</div>
							<div className="flex flex-row gap-2 text-lg">
								<span className="customColor text-2xl">
									<GrMail />
								</span>{" "}
								<span>Email : </span>
								<span className="font-semibold">shashi1729kant@gmail.com</span>
							</div>
						</div>
						<div className="pt-10">
							<button
								onClick={pdfDownload}
								type="button"
								className="rounded-md customColorBg  transition-all delay-150 p-4 text-lg font-semibold "
							>
								Download My CV
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full py-16 px-12 bg-slate-100">
					<div className="w-full place-content-center pb-4">
						<p className="text-4xl text-center font-serif font-bold ">
							My Resume
						</p>
						{console.log(aboutData.myResume)}
					</div>
					<div className="text-xl text-center font-serif font-bold ">
						<span>
							<button
								className={
									aboutData.myResume === "experience"
										? `customColor md:mx-2 uppercase transition ease-in delay-175`
										: "md:mx-2 uppercase"
								}
								onClick={() =>
									setAboutData((prevState) => ({
										...prevState,
										myResume: "experience",
									}))
								}
							>
								Experience
							</button>
						</span>
						|
						<span>
							<button
								className={
									aboutData.myResume === "education"
										? `customColor  md:mx-2 uppercase transition ease-in delay-175`
										: "md:mx-2 uppercase"
								}
								onClick={() =>
									{setAboutData((prevState) => ({
										...prevState,
										myResume: "education",
									}))}
								}
							>
								Education
							</button>
						</span>
					</div>
					<div className="">
						{aboutData.myResume === "education" ? (
							<>
								<div className="transition ease-in delay-300	" testId= "education">
									<AboutScroll data={aboutData.education} />
								</div>
							</>
						) : (
							<>
								<div className="transition ease-in delay-300">
									<AboutScroll data={aboutData.experience} />
								</div>
							</>
						)}
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
						<p className="text-4xl rounded-3xl drop-shadow-xl customBg p-2 text-white">
							<MdOutlineCases />
						</p>
						<p className="text-4xl">2</p>
						<p>Years Experience</p>
					</div>
					<div className="flex flex-col gap-4 place-items-center font-bold text-lg text-center">
						<p className="text-4xl rounded-3xl drop-shadow-xl customBg p-2 text-white">
							<BiLike />
						</p>
						<p className="text-4xl">15</p>
						<p>Project Done</p>
					</div>
					<div className="flex flex-col gap-4 place-items-center font-bold text-lg text-center">
						<p className="text-4xl rounded-3xl drop-shadow-xl customBg p-2 text-white">
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
						{/* <AboutCarousel /> */}
						{/* <AboutScroll /> */}
						<ProgressBar data={aboutData.skills} />
					</div>
				</div>
				<div className="flex"></div>
			</div>
			<style>
				{`  .customColorBg {
                        background-color: ${currentColor};
                    }
                    .customColorBg:hover{
						color:${currentColor};
						background-color:white
						
					}
					.customColor {
						color:${currentColor}
					}
					.customHover:hover{
						color:${currentColor}
					}
					.customBg{
						background-color : ${currentColor}
					}
					
					`}
			</style>
		</div>
	);
};

export default About;

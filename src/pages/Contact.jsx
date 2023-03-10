import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { BsFlag, BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { AiOutlineSetting, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineCases } from "react-icons/md";
import { BiLike } from "react-icons/bi";

function MyApp() {
	return (
		<div className="flex flex-col w-full h-full">
			<div className="flex text-4xl md:text-5xl lg:text-6xl h-40 w-full text-center align-self-center lg:mb-12">
				<div className="m-auto mt-20">
					Get <span className="text-pink-600 font-abfat">In Touch</span>
				</div>
			</div>
			<div className="flex flex-col">
				<div className="flex gap-4 flex-col lg:flex-row justify-around lg:p-0 p-8 ">
					<div
						className="bg-slate-100  px-12 text-center place-items-center rounded-md "
						style={{ textAlign: "-webkit-center" }}
					>
						<div className="relative z-1 p-4 max-w-fit -top-4 text-lg bg-pink-600 rounded-3xl text-white ">
							<BsFillTelephoneFill />
						</div>
						<div className="p-4 pb-8 w-full">
							<a
								href="tel:+4733378901"
								className="font-serif text-xl font-semibold"
							>
								+91 9369 249385
							</a>
						</div>
					</div>
					<div
						className="bg-slate-100  px-12  rounded-md "
						style={{ textAlign: "-webkit-center" }}
					>
						<div className="relative z-1 p-4 max-w-fit    -top-4 text-lg bg-pink-600 rounded-3xl text-white ">
							<GrMail />
						</div>
						<div className="p-4 pb-8 ">
							<a
								href="email:shashi1729kant@gmail.com"
								className="font-serif text-xl font-semibold     "
							>
								shashi1729kant@gmail.com
							</a>
						</div>
					</div>
					<div
						className="bg-slate-100  px-12 text-center place-items-center rounded-md "
						style={{ textAlign: "-webkit-center" }}
					>
						<div className="relative z-1 p-4 max-w-fit    -top-4 text-lg bg-pink-600 rounded-3xl text-white ">
							<HiLocationMarker />
						</div>
						<div className="p-4 pb-8">
							<a
								href="tel:+4733378901"
								className="font-serif text-xl font-semibold"
							>
								Varanasi, India
							</a>
						</div>
					</div>
				</div>
				<div className="flex lg:flex-row flex-col p-4">
					<div className="flex lg:flex-col flex-row w-1/3">
						<div className="pt-8">
							<p className="text-xl py-4 font-abfat">Send Me An Email</p>
							Feel free to get in touch with me. I am always open to discussing
							new projects or creative ideas.
						</div>
						<div className=""></div>
					</div>
					<div className="w-2/3">
						<input
							className="w-32 border-1 border-pink-600"
							type="text"
							name="name"
							value="shashi kant"
							placeholder="Shashi Kant"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyApp;

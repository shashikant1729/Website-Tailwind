import React from "react";
import { BsFlag, BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { RiFacebookFill } from "react-icons/ri";
import { FiTwitter, FiMail } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";

function MyApp() {
	return (
		<div className="flex flex-col w-full h-full overflow-y-auto ">
			<div className="flex text-4xl md:text-5xl lg:text-6xl h-40 w-full text-center align-self-center lg:mb-12">
				<div className="m-auto mt-20">
					Get <span className="text-pink-600 font-abfat">In Touch</span>
				</div>
			</div>
			<div className="flex flex-col lg:px-24 p-12 font-sans ">
				<div className="flex flex-col gap-10 lg:flex-row justify-between">
					<div
						className="bg-slate-100 text-center place-items-center rounded-md lg:w-1/4"
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
						className="bg-slate-100  lg:w-2/5 rounded-md "
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
						className="bg-slate-100 lg:w-1/4 text-center place-items-center rounded-md "
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
				<div className="flex lg:flex-row flex-col  pt-12">
					<div className="grid grid-row-2  lg:w-1/3 w-full">
						<div className="pt-8">
							<p className="text-4xl py-4 font-serif">Send Me An Email</p>
							<p className="text-md tracking-wider">
								Feel free to get in touch with me. I am always open to
								discussing new projects or creative ideas.
							</p>
						</div>
						<div className="pt-4">
							<p className="text-4xl py-4 font-thin">
								Follow <span className="text-pink-600">Me</span>
							</p>
							<div className="flex flex-row gap-10">
								<button className="p-3 bg-slate-200 transition-all delay-200 rounded-3xl text-xl hover:bg-pink-600 hover:text-white ">
									<RiFacebookFill />
								</button>
								<button className="p-3 bg-slate-200 transition-all delay-200 rounded-3xl text-xl hover:bg-pink-600 hover:text-white">
									<FiTwitter />
								</button>
								<button className="p-3 bg-slate-200 transition-all delay-200 rounded-3xl text-xl hover:bg-pink-600 hover:text-white">
									<SlSocialLinkedin />
								</button>
								<button className="p-3 transition-all delay-200 bg-slate-200 rounded-3xl text-xl hover:bg-pink-600 hover:text-white">
									<BsInstagram />
								</button>
							</div>
						</div>
					</div>
					<div className="lg:w-2/3 lg:pl-10 pt-10 w-full">
						<div class=" grid grid-row-3 gap-8 w-full">
							<div className="grid md:grid-cols-3 gap-8 grid-row-3">
								<input
									type="text"
									id="simple-email"
									class=" flex-1 appearance-none border border-gray-300  py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none  rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent uppercase"
									placeholder="NAME"
								/>
								<input
									type="text"
									id="simple-email"
									class=" flex-1 appearance-none border border-gray-300  py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none  rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent uppercase"
									placeholder="SUBJECT"
								/>
								<input
									type="email"
									id="simple-email"
									class=" flex-1 appearance-none border border-gray-300 py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent uppercase"
									placeholder="YOUR EMAIL"
								/>
							</div>

							<label class="text-gray-700" for="name">
								<textarea
									class=" min-h-[1rem] flex-1 h-48 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent capitalize
									peer block   leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-900 data-[te-input-state-active]:placeholder:opacity-900 motion-reduce:transition-none dark:text-gray-400 dark:placeholder:text-gray-400 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
									id="comment"
									placeholder="YOUR MESSAGE"
									name="comment"
									rows="5"
									cols="40"
								></textarea>
							</label>

							<button
								type="button"
								className="rounded-md bg-pink-600 text-white hover:bg-pink-700 max-w-fit p-3 font-serif font -semibold"
							>
								SEND MESSAGE
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyApp;

import React from "react";
// import { useStateContext } from "../contexts/ContextProvider";
import { RiFacebookFill } from "react-icons/ri";
import { FiTwitter, FiMail } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";

const Home = () => {
	// const { activeMenu, showDiv, setShowDiv } = useStateContext();
	return (
		<div className="flex flex-col w-full h-full  bg-cover bg-center relative">
			<div
				className="absolute h-96 w-80 md:origin-top-left md:rotate-12 md:-left-56 md:-top-20  z-1 origin-top-left rotate-45 -left-8 -bottom-60 "
				style={{
					background:
						"radial-gradient(circle at center, rgb(219, 39, 119 ) 20%, transparent 20%), transparent",
					backgroundSize: "19px 18px",
				}}
			></div>
			<div className="flex w-full h-full sm:h-5/6  ">
				<div className="flex justify-center  w-5/6 h-5/6 font-medium subpixel-antialiased text-center m-auto  ">
					<div className="place-self-center text-white font-display-sans">
						<p className="text-4xl md:text-6xl lg:text-8xl font-sans  pt-8 pb-8 ">
							Hi ! I’m Shashi Kant.
						</p>
						<p className="pb-8 ">
							I'm a Electronics Engineer and Software Developer based in
							Varanasi, India.
						</p>
						<button className="rounded-md p-3 bg-pink-600 hover:text-pink-600 hover:bg-white transition-all delay-300 drop-shadow-lg hover:drop-shadow-2xl">
							MORE ABOUT ME
						</button>
					</div>
				</div>
			</div>
			<div className="flex flex-row w-0 h-0 md:w-full md:h-1/6 justify-between overflow-hidden">
				<div className="flex flex-col justify-end text-white p-4 gap-1 text-sm  ">
					<p>Let's work together</p>
					<p className="text-pink-600 cursor-pointer">
						<a href="mailto:shashi1729kant@gmail.com">shashi1729kant</a>
					</p>
					<p>
						<a href="tel:+4733378901">+91 9369 249385</a>
					</p>
				</div>
				<div className="flex flex-row gap-6 justify-end text-white pt-10 px-5 text-lg max-h-content">
					<button className="hover:text-pink-600 transition-all delay-100">
						<RiFacebookFill />
					</button>
					<button className="hover:text-pink-600 transition-all delay-100">
						<FiTwitter />
					</button>
					<button className="hover:text-pink-600 transition-all delay-100">
						<SlSocialLinkedin />
					</button>
					<button className="hover:text-pink-600 transition-all delay-100">
						<BsInstagram />
					</button>
					<button className="hover:text-pink-600 transition-all delay-100">
						<FiMail />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;

import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const AboutScroll = ({ data, myResume }) => {
	const { currentColor } = useStateContext();
	var div1pos = document.getElementById("div1");
	var div2pos = document.getElementById("div2");

	return (
		<div>
			<div class="flex flex-col m-auto p-auto ">
				{/* <h1 class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
					Example
				</h1> */}
				<div
					class="flex overflow-x-scroll pb-10 pt-10 hide-scroll-bar no-scrollbar  "
					id="div1"
				>
					{/* {console.log(div1pos.offsetLeft- div2pos.offsetLeft)} */}
					<div class="div2 flex flex-nowrap " aria-hidden="true" id="div2">
						{myResume === "education" ? (
							<>
								{data.map((item, index) => {
									return (
										<div class="group relative m-10 h-96 w-96 overflow-hidden rounded-lg shadow-xl">
											<div class="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96 ">
												<img
													class="h-4/6 w-full object-contain"
													src={item.img}
													alt=""
												/>
												<h1 class="mt-4 px-4 text-center font-serif text-2xl font-semibold text-rose-500">
													{item.about}
												</h1>
												<p class="mt-1 px-4 text-center text-gray-600"></p>
											</div>
											<div class="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
												<h1 class="mb-2 px-8 text-center font-serif text-xl font-semibold text-rose-500">
													{item.school}
												</h1>
												<p class="px-8 text-center">
													{item.txt}
													<br />
													<span className="text-bold text-xl ">
														{item.score}
													</span>
												</p>
											</div>
										</div>
									);
								})}
							</>
						) : (
							<>
								{data.map((item, index) => {
									return (
										<div class="group relative m-10 h-96 w-96 overflow-hidden rounded-lg shadow-md">
											<div class="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96 ">
												<img
													stroke="blue"
													backgroundColor="blue"
													class="h-4/6 w-full object-contain "
													src={item.img}
													alt=""
												/>
												<h1 class="mt-4 px-4 text-center font-serif text-2xl font-semibold text-rose-500">
													{item.name}
												</h1>
												<p class="mt-1 px-4 text-center text-gray-600"></p>
											</div>
											<div class="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
												<h1 class="mb-2 px-8 text-center font-serif text-xl font-semibold text-rose-500">
													{item.date}
												</h1>
												<p class="px-8 text-center">
													{item.descriptions}
													<br />
													<span>
														<div className="pt-4">
															<a
																target="_blank"
																rel="noreferrer"
																type="button"
																className="rounded-md text-red-500 bg-transparent hover:bg-red-500 hover:text-white cursor-pointer  transition-all delay-150 p-4 text-md font-semibold "
																href={item.link}
															>
																Explore
															</a>
														</div>
													</span>
												</p>
											</div>
										</div>
									);
								})}
							</>
						)}
						{/* {data.map((item, index) => {
							return (
								// <div class="inline-block px-3">
								// 	<div
								// 		class={`w-64 h-64 max-w-xs overflow-hidden rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out customShadow`}
								// 	>
								// 		<div
								// 			class="relative overflow-hidden bg-cover bg-no-repeat"
								// 			data-te-ripple-init
								// 			data-te-ripple-color="light"
								// 		>
								// 			<img
								// 				class="rounded-t-lg"
								// 				src={item.img}
								// 				alt=""
								// 			/>
								// 			<a href="#!">
								// 				<div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
								// 			</a>
								// 		</div>
								// 		{item.name}
								// 	</div>
								// </div>
								<div class="group relative m-10 h-96 w-96 overflow-hidden rounded-lg shadow-md">
									<div class="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96 ">
										<img
											class="h-4/6 w-full object-contain"
											src={item.img}
											alt=""
										/>
										<h1 class="mt-4 px-4 text-center font-serif text-2xl font-semibold text-rose-500">
											{item.about}
										</h1>
										<p class="mt-1 px-4 text-center text-gray-600">
											
										</p>
									</div>
									<div class="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
										<h1 class="mb-2 px-8 text-center font-serif text-xl font-semibold text-rose-500">
											Portugal's Hot Baloon Festival
										</h1>
										<p class="px-8 text-center">
											{item.txt}
											<br />
											<span className="text-bold text-xl ">{item.score}</span>
										</p>
									</div>
								</div>
							);
						})} */}
					</div>
				</div>
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
					.customShadow{
						box-shadow: 0 1px 1px -1 ${currentColor}, 0 1px 2px 1px ${currentColor};
						
					}
					
					`}
			</style>
		</div>
	);
};

export default AboutScroll;

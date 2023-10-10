import React from "react";

const ProgressBar = ({ data }) => {
	return (
		<div>
			{/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.min.js" defer></script> */}
			<div class=" bg-gray-100">
				<div class="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-10">
					{data.map((item, index) => {
						return (
							<div
								class="flex items-center flex-wrap max-w-md px-8 bg-white shadow-xl rounded-2xl h-20 m-2 "
								x-data="{ circumference: 50 * 2 * Math.PI, percent: 80 }"
							>
								<div class="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full  cursor-pointer">
									<svg
										class="w-32 h-32 transform translate-x-1 translate-y-1"
										x-cloak
										aria-hidden="true"
									>
										{/* <circle
											class="text-red-300 "
											stroke-width="10"
											stroke="currentColor"
											fill="transparent"
											r="50"
											cx="60"
											cy="60"
										/> */}
										<g
											// transform="rotate(-90 100 100)"
											className="hover:animate-pulse"
										>
											<circle
												cx="60"
												cy="60"
												r="30"
												stroke="rgb(0,51,117)"
												stroke-width="5"
												fill="none"
												stroke-dasharray="200"
												stroke-dashoffset={200 - 2*item.percentage}
											></circle>
										</g>
										<text
											x="50%"
											y="50%"
											dominant-baseline="central"
											text-anchor="middle"
											className="font-bold"
										>
											{item.percentage}%
										</text>
										{/* </svg> */}
										
										<circle
											// className="text-red-500"
											// className={`text-${item.color}`}
											color={`${item.color}`}
											stroke-width="10"
											// :stroke-dasharray="circumference"
											// :stroke-dashoffset="circumference - percent / 100 * circumference"
											stroke-linecap="round"
											stroke="currentColor"
											fill="transparent"
											r="50"
											cx="60"
											cy="60"
										/>
									</svg>
									{/* <span
										class="absolute text-2xl text-blue-700"
										x-text="`${percent}%`"
									></span> */}
								</div>
								<p class="flex-1 text-center ml-3  text-gray-800 sm:text-xl font-semibold ">
									{item.name}
								</p>

								{/* <span class="ml-auto text-xl font-medium text-blue-600 hidden sm:block">
									+25%
								</span> */}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;

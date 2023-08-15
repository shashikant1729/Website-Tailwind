import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const AboutScroll = ({ data }) => {
	const { currentColor } = useStateContext();
	return (
		<div>
			<div class="flex flex-col m-auto p-auto ">
				{/* <h1 class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
					Example
				</h1> */}
				<div class="flex overflow-x-scroll pb-10 pt-10 hide-scroll-bar no-scrollbar ">
					<div class="flex flex-nowrap">
						{data.map((item, index) => {
							return (
								<div class="inline-block px-3">
									<div
										class={`w-64 h-64 max-w-xs overflow-hidden rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out customShadow`}
									>
										{item.name}
									</div>
								</div>
							);
						})}
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

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	dark: "class",
	theme: {
		fontFamily: {
			sans: ["Helvetica", "Arial", "sans-serif"],
			display: ["Open Sans", "sans-serif"],
			body: ["Open Sans", "sans-serif"],
			fir: ["Fira Sans"],
			abfat: ["Abril Fatface"],
		},
		extend: {
			
			rotate: {
				17: "17deg",
				225:"225deg"
			},
			fontSize: {
				14: "14px",
			},
			backgroundColor: {
				"main-bg": "#FAFBFB",
				"main-dark-bg": "#20232A",
				"secondary-dark-bg": "#33373E",
				"light-gray": "#F7F7F7",
				"half-transparent": "rgba(0, 0, 0, 0.5)",
			},
			borderWidth: {
				1: "1px",
			},
			borderColor: {
				color: "rgba(0, 0, 0, 0.1)",
			},
			width: {
				400: "400px",
				760: "760px",
				780: "780px",
				800: "800px",
				1000: "1000px",
				1200: "1200px",
				1400: "1400px",
			},
			height: {
				80: "80px",
			},
			minHeight: {
				590: "590px",
			},
			backgroundImage: {
				"hero-pattern": "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
				"bg-home-1":
					"linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.7)), url('assets/images/bg.jpg')",
				"bg-home-2":
					"linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.8)), url('assets/images/home-2.jpeg')",
			},
		},
	},
	plugins: [require("tailwindcss-blend-mode")()],
	
};

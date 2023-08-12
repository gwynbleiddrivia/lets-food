
const Banner = () => {
	return (
		<div className="bg-[#FFF9EA] flex md:flex-row flex-col justify-between relative">
			<div className="md:absolute bottom-[10px]">

				<div className="bottom-[-120px] left-[-220px]">
								
				<svg xmlns="http://www.w3.org/2000/svg" width="179" height="37" viewBox="0 0 179 37" fill="none">
				  <path d="M0 0.114317C0 0.114317 22.062 17.4303 36.9364 18.9664C59.1594 21.2613 70.9046 -0.782257 93.1999 0.114317C111.874 0.865263 121.363 25.1442 140.015 23.841C154.597 22.8222 171.797 -1.87819 176.092 0.114317C180.387 2.10683 179.528 8.35203 176.092 16.9446C172.656 25.5372 154.319 36.4377 140.015 36.9826C121.521 37.687 111.703 16.8149 93.1999 16.9446C70.7762 17.1018 59.2967 36.1188 36.9364 34.1298C22.0601 32.8065 0 18.9664 0 18.9664V0.114317Z" fill="#FFAC4B"/>
				</svg>
								
				<svg xmlns="http://www.w3.org/2000/svg" width="179" height="37" viewBox="0 0 179 37" fill="none">
				  <path d="M0 0.114317C0 0.114317 22.062 17.4303 36.9364 18.9664C59.1594 21.2613 70.9046 -0.782257 93.1999 0.114317C111.874 0.865263 121.363 25.1442 140.015 23.841C154.597 22.8222 171.797 -1.87819 176.092 0.114317C180.387 2.10683 179.528 8.35203 176.092 16.9446C172.656 25.5372 154.319 36.4377 140.015 36.9826C121.521 37.687 111.703 16.8149 93.1999 16.9446C70.7762 17.1018 59.2967 36.1188 36.9364 34.1298C22.0601 32.8065 0 18.9664 0 18.9664V0.114317Z" fill="#FFAC4B"/>
				</svg>


				</div>




			</div>
			<div className="flex flex-col text-start gap-4 m-auto">
				<h1 className="text-4xl font-bold">Be The Fastest In<br/> Delivery Your <span className="yellow-font">Food</span></h1>
				<p className="secondary-color text-sm font-sm">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit ut aliquam, purus sit amet</p>
				<button className="yellow-color px-6 py-3 border-signin w-fit">Get Started</button>
			</div>
			<div className="flex flex-col relative">
				<div className="flex relative">
				<div className="absolute top-20 left-[-50px] w-12 h-12 rounded-full bg-[#FFAC4B]"></div>
				<div className="absolute top-[250px] w-4 h-4 rounded-full bg-[#FFAC4B]"></div>
				<img className="rounded-full w-80" src="bannerdish1.png" alt=""/>
				<div className="w-16 h-16 rounded-full bg-[#FFAC4B] absolute right-40 bottom-10"></div>

				</div>
				<div className="flex md:flex-row flex-col relative mr-4">
					<div className="absolute bottom-10 w-8 h-8 rounded-full bg-[#FFAC4B]"></div>
				<img className="rounded-full w-56 h-40" src="bannerdish2.png" alt=""/>
				<img className="rounded-full w-64" src="bannerdish3.png" alt=""/>
					
				</div>

			</div>

		</div>
	);
};

export default Banner;

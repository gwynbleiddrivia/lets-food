const Serve = () => {
	const serves = [
		{
			id: '1',
			serveImg: "serve1.png",
			serveName1: "Easy To Order",
			serveName2: "You only order through",
			serveName3:"the app"
		},
		{
			id: '2',
			serveImg: "serve2.png",
			serveName1: "Fastest Delivery",
			serveName2: "Delivery will be on",
			serveName3:"time"
		},
		{
			id: '3',
			serveImg: "serve3.png",
			serveName1: "Best Quality",
			serveName2: "The best quality of food", 
			serveName3: "for you"
		}
	]
	return (
		<div className="flex flex-col text-center gap-4 mt-20 mb-20">
			<p className="yellow-font font-bold text-xl">How it works</p>
			<p className="font-bold text-3xl">What We Serve</p>
			<p className="secondary-color font-bold">Product Quality Is Our Priority, And Always Guarantees <br/> Halal And Safety Until It Is In Your Hands.</p>
			<div className="flex md:flex-row flex-col justify-between gap-4">
				{
					serves.map(serve=>{
						return <div key={serve.id} className="mt-2 w-full h-full flex flex-col justify-between">
							<div className="w-fit p-6 rounded-lg mx-auto">
								<img className="w-44 mx-auto" src={serve.serveImg} alt=""/>
							</div>
							<div className="bg-[#FFF] w-full bottom-0 p-5 menu-radius">

							<p className="font-bold text-xl mb-4">{serve.serveName1}</p>
							<p className="secondary-color">{serve.serveName2}</p>
							<p className="secondary-color">{serve.serveName3}</p>


							</div>
													</div>
					})
				}
			</div>

		</div>
	);
};

export default Serve;

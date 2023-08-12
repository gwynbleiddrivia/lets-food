const Menu = () => {
	const menus = [
		{
			id: '1',
			menuImg: "menu1.png",
			menuName1: "Mie Ramen",
			menuName2: "lorem ipsum",
			menuPrice: "$ 20.2",
			menuLike: "love_gold.png"
		},
		{
			id: '2',
			menuImg: "menu2.png",
			menuName1: "Salad Tahu",
			menuName2: "lorem ipsum",
			menuPrice: "$ 20.2",
			menuLike: "love_white.png"
		},
		{
			id: '3',
			menuImg: "menu3.png",
			menuName1: "Roti Bakar",
			menuName2: "lorem ipsum",
			menuPrice: "$ 20.2",
			menuLike: "love_white.png"
		},
		{
			id: '4',
			menuImg: "menu4.png",
			menuName1: "Sphagetti",
			menuName2: "lorem ipsum",
			menuPrice: "$ 20.2",
			menuLike: "love_white.png"
		},
	]
	return (
		<div className="flex flex-col text-center gap-4 mt-4 mb-4">
			<p className="yellow-font font-bold text-xl">Our menu</p>
			<p className="font-bold text-3xl">Our Popular Menu</p>
			<p className="secondary-color font-bold">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit ut aliquam</p>
			<div className="flex md:flex-row flex-col justify-between gap-4">
				{
					menus.map(menu=>{
						return <div key={menu.id} className="footer-shadow border rounded-lg mt-2 w-full h-full bg-[#F1F1F1] flex flex-col justify-between">
							<div className="w-fit bg-[#F1F1F1] p-6 rounded-lg">
								<img className="" src={menu.menuImg} alt=""/>
							</div>
							<div className="bg-[#FFF] w-full bottom-0 p-5 menu-radius">

							<p>{menu.menuName1}</p>
							<p className="secondary-color">{menu.menuName2}</p>
							<div className="flex justify-between">
								{menu.menuPrice}
								<img src={menu.menuLike} alt=""/>
							</div>


							</div>
													</div>
					})
				}
			</div>

		</div>
	);
};

export default Menu;

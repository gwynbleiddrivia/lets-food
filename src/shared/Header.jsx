import { useState } from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	const [isVisible, setIsVisible] = useState(false)
	const isMobileScreen = useMediaQuery('(max-width: 767px)');


	const toggleNav = () =>{
		console.log('clicked')
		setIsVisible(prev => !prev)
	}
	return (
		<div className="flex md:flex-row flex-col justify-between gap-2 md:gap-32 bg-[#FFF9EA] px-12 py-4">
		<div className="flex mx-auto order-2 order-md-1">
			<div className="pt-4 font-bold my-auto">Let'sFood</div>
			<img className="my-auto" src="logo.svg" alt=""/>
		</div>



		<div className="md:hidden visible onClick={toggleNav} order-1 order-md-2">
	
			<svg xmlns="http://www.w3.org/2000/svg" onClick={toggleNav} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>


		</div>
			

		<div className="order-md-3 order-3">	


		{
			!isMobileScreen?
			<>

			<div className="nav flex md:flex-row flex-col justify-between gap-2 md:gap-6 mt-2">

			<NavLink to="/" className={({ isActive }) =>isActive ? "primary-color border-b-4 border-[#FFCB45] inline-block text-center rounded-sm" : "secondary-color"}>Home</NavLink>
			<NavLink to="/menu" className={({ isActive }) =>isActive ? "primary-color border-b-4 border-[#FFCB45] inline-block text-center rounded-sm" : "secondary-color"}>Menu</NavLink>
			<NavLink to="/howitworks" className={({ isActive }) =>isActive ? "primary-color border-b-4 border-[#FFCB45] inline-block text-center rounded-sm" : "secondary-color"}>How It Works</NavLink>
			<NavLink to="/about" className={({ isActive }) =>isActive ? "primary-color border-b-4 border-[#FFCB45] inline-block text-center rounded-sm" : "secondary-color"}>About</NavLink>
			<NavLink to="/contact" className={({ isActive }) =>isActive ? "primary-color border-b-4 border-[#FFCB45] inline-block text-center rounded-sm" : "secondary-color"}>Contact</NavLink>
		


			</div>
		



			</>:
			<>

			<div className={`nav ${isVisible ? 'visible' : 'hidden'} md:visible flex md:flex-row flex-col justify-between gap-2 md:gap-6 mt-2`}>


			<NavLink to="/" className={({ isActive }) =>isActive ? "primary-color border-b-4 border-[#FFCB45] inline-block text-center rounded-sm" : "secondary-color"}>Home</NavLink>
			<NavLink to="/menu" className={({ isActive }) =>isActive ? "primary-color border-b-4 border-[#FFCB45] inline-block text-center rounded-sm" : "secondary-color"}>Menu</NavLink>
			<NavLink to="/howitworks" className={({ isActive }) =>isActive ? "primary-color border-b-4 border-[#FFCB45] inline-block text-center rounded-sm" : "secondary-color"}>How It Works</NavLink>
			<NavLink to="/about" className={({ isActive }) =>isActive ? "primary-color border-b-4 border-[#FFCB45] inline-block text-center rounded-sm" : "secondary-color"}>About</NavLink>
			<NavLink to="/contact" className={({ isActive }) =>isActive ? "primary-color border-b-4 border-[#FFCB45] inline-block text-center rounded-sm" : "secondary-color"}>Contact</NavLink>
		








			</div>
		



			</>
			
		}


		</div>
		<div className="flex md:flex-row flex-col gap-4 order-md-4 order-4">
			
			<div className="flex justify-evenly md:gap-2">
			<div className="pt-2">
				<img src="search.svg" alt=""/>
			</div>
			<div className="pt-2 relative">
			
				<div className="w-3 h-3 absolute right-0 top-0 rounded-full bg-[#FFAC4B] fontsize-xxs">2</div>
				<img src="cart.svg" alt=""/>
			</div>
			</div>

			<div className="bg-[#FFCB45] font-bold py-2 px-4 border-signin flex m-auto gap-4 w-fit">
				<div className="my-auto">
					<img src="signin.svg" alt=""/>
				</div>

				Sign In
			
			</div>

		</div>

		</div>
	);
};

export default Header;

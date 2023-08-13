const Footer = () => {
	return (
		<div className="bg-[#FFF9EA] flex flex-col justify-between">
			<div className="flex justify-between my-10 md:flex-row flex-col">
			<div className="my-auto flex flex-col gap-4 text-start md:py-16 md:px-24 px-12">
				<div className="flex">
					<p className="my-auto font-bold">Let'sFood</p>
						<div className="my-auto">
						<img src="logo.svg" alt=""/>
						</div>


				</div>
				

				<div className="secondary-color text-sm"> Jalan Semangka Raya, Telaga<br/> Murni,Cikarang Barat, Kab. Bekasi </div>
				
				<div className="flex gap-4">
					<div className="p-2.5 footer-shadow w-10 h-10 rounded-full bg-white">
						<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.965 0.608236C8.138 0.554236 8.512 0.542236 11.5 0.542236C14.488 0.542236 14.862 0.555236 16.034 0.608236C17.206 0.661236 18.006 0.848236 18.706 1.11924C19.439 1.39624 20.104 1.82924 20.654 2.38924C21.214 2.93824 21.646 3.60224 21.922 4.33624C22.194 5.03624 22.38 5.83624 22.434 7.00624C22.488 8.18124 22.5 8.55524 22.5 11.5422C22.5 14.5302 22.487 14.9042 22.434 16.0772C22.381 17.2472 22.194 18.0472 21.922 18.7472C21.646 19.4813 21.2133 20.1464 20.654 20.6962C20.104 21.2562 19.439 21.6882 18.706 21.9642C18.006 22.2362 17.206 22.4222 16.036 22.4762C14.862 22.5302 14.488 22.5422 11.5 22.5422C8.512 22.5422 8.138 22.5292 6.965 22.4762C5.795 22.4232 4.995 22.2362 4.295 21.9642C3.56092 21.6882 2.89582 21.2555 2.346 20.6962C1.78638 20.1469 1.35331 19.4821 1.077 18.7482C0.806 18.0482 0.62 17.2482 0.566 16.0782C0.512 14.9032 0.5 14.5292 0.5 11.5422C0.5 8.55424 0.513 8.18024 0.566 7.00824C0.619 5.83624 0.806 5.03624 1.077 4.33624C1.35372 3.60232 1.78712 2.93755 2.347 2.38824C2.89604 1.82874 3.56047 1.39568 4.294 1.11924C4.994 0.848236 5.794 0.662236 6.964 0.608236H6.965ZM15.945 2.58824C14.785 2.53524 14.437 2.52424 11.5 2.52424C8.563 2.52424 8.215 2.53524 7.055 2.58824C5.982 2.63724 5.4 2.81624 5.012 2.96724C4.499 3.16724 4.132 3.40424 3.747 3.78924C3.38205 4.14429 3.10118 4.57652 2.925 5.05424C2.774 5.44224 2.595 6.02424 2.546 7.09724C2.493 8.25724 2.482 8.60524 2.482 11.5422C2.482 14.4792 2.493 14.8272 2.546 15.9872C2.595 17.0602 2.774 17.6422 2.925 18.0302C3.101 18.5072 3.382 18.9402 3.747 19.2952C4.102 19.6602 4.535 19.9412 5.012 20.1172C5.4 20.2682 5.982 20.4472 7.055 20.4962C8.215 20.5492 8.562 20.5602 11.5 20.5602C14.438 20.5602 14.785 20.5492 15.945 20.4962C17.018 20.4472 17.6 20.2682 17.988 20.1172C18.501 19.9172 18.868 19.6802 19.253 19.2952C19.618 18.9402 19.899 18.5072 20.075 18.0302C20.226 17.6422 20.405 17.0602 20.454 15.9872C20.507 14.8272 20.518 14.4792 20.518 11.5422C20.518 8.60524 20.507 8.25724 20.454 7.09724C20.405 6.02424 20.226 5.44224 20.075 5.05424C19.875 4.54124 19.638 4.17424 19.253 3.78924C18.8979 3.42431 18.4657 3.14345 17.988 2.96724C17.6 2.81624 17.018 2.63724 15.945 2.58824ZM10.095 14.9332C10.8797 15.2599 11.7534 15.304 12.5669 15.058C13.3805 14.812 14.0834 14.2912 14.5556 13.5845C15.0278 12.8778 15.2401 12.0291 15.156 11.1833C15.072 10.3376 14.697 9.54721 14.095 8.94724C13.7112 8.56371 13.2472 8.27005 12.7363 8.08738C12.2255 7.90472 11.6804 7.8376 11.1405 7.89085C10.6006 7.94411 10.0792 8.11641 9.6138 8.39537C9.14845 8.67432 8.75074 9.05298 8.4493 9.50409C8.14786 9.95519 7.95019 10.4675 7.87052 11.0042C7.79084 11.5409 7.83115 12.0885 7.98854 12.6078C8.14593 13.127 8.41648 13.6048 8.78072 14.007C9.14496 14.4091 9.59382 14.7254 10.095 14.9332ZM7.502 7.54424C8.02702 7.01921 8.65032 6.60274 9.3363 6.3186C10.0223 6.03446 10.7575 5.88821 11.5 5.88821C12.2425 5.88821 12.9777 6.03446 13.6637 6.3186C14.3497 6.60274 14.973 7.01921 15.498 7.54424C16.023 8.06926 16.4395 8.69256 16.7236 9.37853C17.0078 10.0645 17.154 10.7997 17.154 11.5422C17.154 12.2847 17.0078 13.02 16.7236 13.7059C16.4395 14.3919 16.023 15.0152 15.498 15.5402C14.4377 16.6006 12.9995 17.1963 11.5 17.1963C10.0005 17.1963 8.56234 16.6006 7.502 15.5402C6.44166 14.4799 5.84597 13.0418 5.84597 11.5422C5.84597 10.0427 6.44166 8.60457 7.502 7.54424ZM18.408 6.73024C18.5381 6.60751 18.6423 6.45992 18.7143 6.29621C18.7863 6.1325 18.8248 5.95601 18.8274 5.77717C18.83 5.59833 18.7967 5.42078 18.7295 5.25505C18.6622 5.08931 18.5624 4.93875 18.436 4.81228C18.3095 4.6858 18.1589 4.58599 17.9932 4.51875C17.8275 4.45151 17.6499 4.41821 17.4711 4.42082C17.2922 4.42343 17.1157 4.46189 16.952 4.53393C16.7883 4.60598 16.6407 4.71013 16.518 4.84024C16.2793 5.09327 16.1486 5.42936 16.1537 5.77717C16.1588 6.12498 16.2992 6.45712 16.5452 6.70308C16.7911 6.94904 17.1233 7.08946 17.4711 7.09454C17.8189 7.09961 18.155 6.96893 18.408 6.73024Z" fill="#1D1D1D"/>
</svg>

					</div>
					<div className="px-3.5 py-2.5 footer-shadow w-10 h-10 rounded-full bg-[#FFCB45]" >

						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19" fill="none">
						  <path d="M6.39703 18.5409V10.3449H9.16203L9.57303 7.13587H6.39703V5.09187C6.39703 4.16587 6.65503 3.53187 7.98403 3.53187H9.66803V0.67087C8.84867 0.583061 8.02508 0.540663 7.20103 0.54387C4.75703 0.54387 3.07903 2.03587 3.07903 4.77487V7.12987H0.332031V10.3389H3.08503V18.5409H6.39703Z" fill="#1D1D1D"/>
						</svg>
					</div>
					<div className="p-2.5 footer-shadow w-10 h-10 rounded-full bg-white">
					<svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
  <path d="M22.853 2.50251C22.018 2.87251 21.121 3.12251 20.178 3.23551C21.151 2.6533 21.8789 1.73697 22.226 0.657507C21.3118 1.2005 20.3113 1.5827 19.268 1.78751C18.5664 1.03837 17.6371 0.541833 16.6243 0.374981C15.6116 0.208129 14.5721 0.380298 13.6672 0.864759C12.7624 1.34922 12.0428 2.11887 11.6202 3.05421C11.1975 3.98955 11.0955 5.03826 11.33 6.03751C9.47769 5.9445 7.66563 5.46306 6.01143 4.62441C4.35722 3.78577 2.89784 2.60867 1.728 1.16951C1.328 1.85951 1.098 2.65951 1.098 3.51151C1.09756 4.2785 1.28644 5.03375 1.64788 5.71024C2.00933 6.38673 2.53216 6.96354 3.17 7.38951C2.43028 7.36597 1.70688 7.16609 1.06 6.80651V6.86651C1.05993 7.94225 1.43204 8.98488 2.11319 9.8175C2.79434 10.6501 3.74257 11.2214 4.797 11.4345C4.11079 11.6202 3.39134 11.6476 2.693 11.5145C2.9905 12.4401 3.57 13.2495 4.35037 13.8294C5.13074 14.4093 6.07292 14.7307 7.045 14.7485C5.39484 16.0439 3.35689 16.7466 1.259 16.7435C0.887384 16.7436 0.516079 16.7219 0.147003 16.6785C2.27648 18.0477 4.75534 18.7743 7.287 18.7715C15.857 18.7715 20.542 11.6735 20.542 5.51751C20.542 5.31751 20.537 5.11551 20.528 4.91551C21.4393 4.25648 22.2259 3.4404 22.851 2.50551L22.853 2.50251Z" fill="#1D1D1D"/>
</svg>


					</div>

				</div>
			</div>
			
			<div className="m-auto text-start mt-20">
				<div className="flex relative items-center text-start">
	
					<div className="w-10 h-10 bg-[#FFAC4B] rounded-full absolute left-[-25px] -top-5 z-100"></div>
					<p className="font-bold mb-8 z-0">Company</p>


				</div>
				<div className="flex flex-col gap-4 text-start">
		
					<p className="text-sm secondary-color">About Us</p>
					<p className="text-sm secondary-color">Career</p>
					<p className="text-sm secondary-color">How It Works</p>
		

				</div>	
			</div>

			<div className="m-auto text-start mt-16">
	
				<div>
				<p className="font-bold mb-8 z-0">Policy</p>


				</div>
				<div className="flex flex-col gap-4">
		
				<p className="text-sm secondary-color">FAQ</p>
				<p className="text-sm secondary-color">Privacy</p>

				<div className="flex relative items-center">
				<div className="w-16 h-16 bg-[#FFAC4B] rounded-full absolute left-[-40px] top-0 z-100"></div>
				<p className="text-sm secondary-color z-0">Shipping</p>
		
				</div>

				</div>	
			</div>



			<div>
			
			<div className="text-start mx-auto p-16 mt-16 md:mt-5">
				<div className="flex relative items-center">
	
				<div className="w-24 h-24 bg-[#FFAC4B] rounded-full absolute right-[-20px] top-[-80px] z-100"></div>
				<p className="font-bold mb-8 z-0">Get In Touch</p>


				</div>
				<div className="flex flex-col gap-4">
		
				<p className="text-sm secondary-color">+62 896 7311 2766</p>
				<p className="text-sm secondary-color">food@example.com</p>
		

				</div>	
			</div>




			</div>
			
			</div>

			<div className="w-full h-0.5 divider-background max-w-4xl mx-auto mb-10"></div>
			<div className="mb-10 text-sm">© 2022 Let’sFood. ALL RIGHT RESERVED.</div>

		</div>
	);
};

export default Footer;

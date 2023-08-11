import Banner from './homeComponents/Banner'
import Serve from './homeComponents/Serve'
import Menu from './homeComponents/Menu'
import CustomerSay from './homeComponents/CustomerSay'
import Join from './homeComponents/Join' 

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Serve></Serve>
			<Menu></Menu>
			<CustomerSay></CustomerSay>
			<Join></Join>

		</div>
	);
};

export default Home;

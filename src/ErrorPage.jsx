import {Link} from 'react-router-dom'

const ErrorPage = () => {
        return (
                <div className="flex justify-around flex-col mx-auto m-10 align-items backdrop-blur w-full h-full">
                        <p className="text-7xl my-auto text-center">404 Error! </p>    

                        <div className="my-auto bg-[#FFF9EA] mt-10">
                        <p className="mb-3 text-center">Ooops, you seem to be lost!!</p>
                        <p className="text-center"> Let's go <Link to="/"> <button className="primary-color border-b-4 border-[#FFCB45] inline-block text-center rounded-sm">Home</button> </Link> to find ourselves.</p>
                        </div>
                        <img className="w-fit m-auto" src="https://i.ibb.co/NyfXfP3/20602785-6325254-copy-1.jpg" alt=""/>

                                </div>
        );
};

export default ErrorPage;

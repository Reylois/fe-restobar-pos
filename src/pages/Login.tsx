
const Login: React.FC = () => {

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-[url('./images/bg.jpg')] bg-center bg-cover">
            
            {/* Signin form container */}
            <div className="flex flex-col h-[430px] w-[400px] bg-[#FFFEC4] rounded-lg p-[40px]">
                <h1 className="text-center font-bold text-[25px] text-pink-700">Nuna's Restobar</h1>
                <form className="mt-5 mb-12">
                    <label className="text-[14px] font-medium ml-2 text-[#B82132]">Email or Username*</label>
                    <input type="text" className="h-[40px] w-full bg-white border-1 border-gray-500 rounded-md mt-1 mb-5 hover:border-[#B82132] hover:border-2" />

                    <label className="text-[14px] font-medium ml-2 text-[#B82132]">Password*</label>
                    <input type="text" className="h-[40px] w-full bg-white border-1 border-gray-500 rounded-md mt-1 mb-7 hover:border-[#B82132] hover:border-2" />

                    <button type="submit" className="h-[40px] w-full bg-[#B82132] rounded-lg text-white cursor-pointer hover:bg-[#A31D1D]">LOGIN</button>
                </form>
                <a className="text-[14px] text-center cursor-pointer">Forgot password?</a>
            </div>
        </div>
    );
};

export default Login;
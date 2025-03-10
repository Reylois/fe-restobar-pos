
const Register: React.FC = () => {
    return(
        <div className="flex justify-center items-center h-screen w-screen bg-[url('./images/bg.jpeg')] bg-center bg-cover">
            <div className="flex flex-col w-[750px] bg-[#FFFEC4] rounded-md p-[25px]">
                <h1 className="font-bold text-[25px] mb-4 text-pink-700">Create an account</h1>
                <form className="flex w-full h-ful p-[10px] flex-wrap justify-around gap-[20px]">
                      <div className="flex flex-col gap-2">
                        <label className="font-medium text-[14px] ml-2 text-[#B82132]">Full name*</label>
                        <input type="text" className="h-[40px] w-[300px] border-gray-500 bg-white border-1 rounded-md p-[10px] hover:border-2 hover:border-[#B82132]" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-[14px] ml-2 text-[#B82132]">Username*</label>
                        <input type="text" className="h-[40px] w-[300px] border-gray-500 bg-white border-1 rounded-md p-[10px] hover:border-2 hover:border-[#B82132]" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-[14px] ml-2 text-[#B82132]">Email*</label>
                        <input type="text" className="h-[40px] w-[300px] border-gray-500 bg-white border-1 rounded-md p-[10px] hover:border-2 hover:border-[#B82132]" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-[14px] ml-2 text-[#B82132]">Contact No.*</label>
                        <input type="text" className="h-[40px] w-[300px] border-gray-500 bg-white border-1 rounded-md p-[10px] hover:border-2 hover:border-[#B82132]" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-[14px] ml-2 text-[#B82132]">Password*</label>
                        <input type="text" className="h-[40px] w-[300px] border-gray-500 bg-white border-1 rounded-md p-[10px] hover:border-2 hover:border-[#B82132]" />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-[14px] ml-2 text-[#B82132]">Confirm Password*</label>
                        <input type="text" className="h-[40px] w-[300px] border-gray-500 bg-white border-1 rounded-md p-[10px] hover:border-2 hover:border-[#B82132]" />
                    </div>
                    <button className="h-[45px] w-3/6 bg-[#B82132] text-white hover:bg-[#A31D1D] rounded-md mt-4 font-bold shadow-[0px_3px_4px_gray] cursor-pointer mb-3 hover:text-white transition-all ease-in-out">SIGN UP</button>
                </form>
            </div>
        </div>
    );
} 

export default Register;

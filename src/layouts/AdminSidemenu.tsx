import settings from "../assets/settings.svg";

const AdminSidemenu: React.FC = () => {

    return (
        <div className="h-screen w-[300px] bg-gray-600 rounded-lg">
            <div className="p-[15px] bg-gray-600 w-full h-[30%] flex flex-col justify-start items-center rounded-lg">
                <div className="flex justify-between w-full mb-[10px]">
                    <p className="text-white text-[13px]">Profile</p>
                    <img src={settings} className="h-[20px] w-[20px] cursor-pointer" />
                </div>
                <div className="h-[1px] w-full bg-white opacity-40 mb-[20px]"></div>
                <p className="text-center text-[20px] font-medium mb-2">Rolyn Jane Tacastacas</p>
                <p className="text-center">rolyn@gmail.com</p>
                <p className="mt-6 font-medium text-white">ADMINISTRATOR</p>
            </div>
            <div className="p-[15px]">
                <div className="h-[1px] w-full bg-white opacity-40"></div>
            </div>
            <div className="flex flex-col gap-4 mt-[15px] bg-blue-90 w-full p-[25px]">
                <button className="flex justify-center items-center bg-gray-800 h-[45px] w-full rounded-lg cursor-pointer focus:bg-white hover:bg-gray-300 transition-all ease-in-out">
                    <p className="text-white">Dashboard</p>
                </button> 
                <button className="flex justify-center items-center bg-gray-800 h-[45px] w-full rounded-lg cursor-pointer focus:bg-white hover:bg-gray-300 transition-all ease-in-out">
                    <p className="text-white">Inventory</p>
                </button>
                <button className="flex justify-center items-center bg-gray-800 h-[45px] w-full rounded-lg cursor-pointer focus:bg-white hover:bg-gray-300 transition-all ease-in-out">
                    <p className="text-white">Sales</p>
                </button>
                <button className="flex justify-center items-center bg-gray-800 h-[45px] w-full rounded-lg cursor-pointer focus:bg-white hover:bg-gray-300 transition-all ease-in-out">
                    <p className="text-white">Staff Information</p>
                </button>
                <button className="flex justify-center items-center bg-gray-800 h-[45px] w-full rounded-lg cursor-pointer focus:bg-white hover:bg-gray-300 transition-all ease-in-out">
                    <p className="text-white">Reports</p>
                </button>
                <button className="flex justify-center items-center bg-gray-800 h-[45px] w-full rounded-lg cursor-pointer focus:bg-white hover:bg-gray-300 transition-all ease-in-out">
                    <p className="text-white">User Activity</p>
                </button>
            </div>
        </div>
    );
}

export default AdminSidemenu;

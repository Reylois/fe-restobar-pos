

const Header: React.FC = () => {

    return (
        <div className="w-screen h-[70px] bg-primary p-[20px] flex items-center justify-between">
            <h1 className="text-[20px] font-bold ml-[30px] text-white cursor-pointer">Nuna's Restobar</h1>
            <h1 className="text-white mr-[30px] cursor-pointer">Logout</h1>
        </div>
    );
}   

export default Header;

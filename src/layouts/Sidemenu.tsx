import React from 'react';
import settings from '../assets/icons/settings.svg';
import Menu from '../components/Menu';

// Define the type for the user object
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// Define the props for the Sidemenu component
interface SidemenuProps {
  user: User[];
  label: MenuLabel[];
}

interface MenuLabel {
  menu: string;
  path: string;
}

const Sidemenu: React.FC<SidemenuProps> = ({ user, label }) => {
  return (
    <div className="h-full w-[250px] bg-primary rounded-tr-lg p-[20px]">
      <div className="flex flex-col w-full h-[35%] rounded-tr-lg">
        <div className="flex justify-between w-full mb-2">
          <p className="text-[14px] font-medium text-white">Profile</p>
          <img src={settings} alt="Settings" className="h-[20px] w-[20px] cursor-pointer" />
        </div>
        <div className="h-[1px] w-full bg-white opacity-40 mb-5"></div>
        {user.map((user) => (
          <div key={user.id}>
            <p className="text-center font-medium text-[17px] mb-2 text-white">{user.name}</p>
            <p className="text-center text-[13px] mb-5 text-white">{user.email}</p>
            <p className="text-center text-[14px] font-medium text-white">
              {user.role.toUpperCase()}
            </p>
          </div>                                 
        ))}
        <div className="h-[2px] w-full bg-white opacity-40 mt-5"></div>
      </div>
      <div className="flex flex-col gap-[10px] w-full p-[10px]">
        <Menu menuLabel={label} />
      </div>
    </div>
  );
};

export default Sidemenu;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Define the type for each item in the menuLabel array
interface MenuLabel {
  menu: string;
  path: string;
}

// Define the props for the Menu component
interface MenuProps {
  menuLabel: MenuLabel[];
}

const Menu: React.FC<MenuProps> = ({ menuLabel }) => {  
  const location = useLocation();

  return (
    <>
      {menuLabel.map((label, index) => (
        <Link key={index} to={label.path}>
          <button
            className={`h-[40px] w-full rounded-lg cursor-pointer hover:bg-[#FFDE59] text-black
                        hover:text-black transition-all ease-in-out text-[14px] font-medium 
                        ${
                          location.pathname === label.path
                            ? 'bg-[#FFDE59]' 
                            : 'bg-secondary'
                        }`}
          >
            {label.menu}
          </button>
        </Link>
      ))}
    </>
  );
};

export default Menu;

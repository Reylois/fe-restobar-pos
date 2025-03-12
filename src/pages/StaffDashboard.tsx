import Header from "../layouts/Header";
import Sidemenu from "../layouts/Sidemenu";
import Breadcrumb from "../components/Breadcrumb";
import MenuCard from "../components/MenuCard";

interface MenuLabel {
    menu: string;
    path: string;
}

interface Items {
    id: number;
    itemName: string;
    image: string;
    price: string;
}
interface User {
    id: number;
    name: string;
    email: string;
    role: string;
} 

const label: MenuLabel[] = [
  { menu: 'Menu', path: '/staffDashboard' },
  { menu: 'Inventory', path: '/inventory' },    
  { menu: 'Order History', path: '/sales' },
];

const Items: Items[] = [
    { id: 1, itemName: 'Value meal', image: 'src/images/food.png', price: 'P123.00' },
    { id: 2, itemName: 'Value meal', image: 'src/images/food.png', price: 'P123.00' },
    { id: 3, itemName: 'Value meal', image: 'src/images/food.png', price: 'P123.00' },
    { id: 4, itemName: 'Value meal', image: 'src/images/food.png', price: 'P123.00' },
    { id: 5, itemName: 'Value meal', image: 'src/images/food.png', price: 'P123.00' },
    { id: 5, itemName: 'Value meal', image: 'src/images/food.png', price: 'P123.00' },
    { id: 5, itemName: 'Value meal', image: 'src/images/food.png', price: 'P123.00' },
    { id: 5, itemName: 'Value meal', image: 'src/images/food.png', price: 'P123.00' },
    { id: 5, itemName: 'Value meal', image: 'src/images/food.png', price: 'P123.00' },
    { id: 5, itemName: 'value meal', image: 'src/images/food.png', price: 'P123.00' },
];

const user: User[] = [
    { id: 1, name: 'Rey lois Baer', email: 'reyloisbaer@gmail.com', role: 'manager' },
];

const menu = (): string => {
    if (location.pathname === '/staffDashboard') {
      return 'MENU';
    }
    return '';
};

const StaffDashboard: React.FC = () => {

    return (
        <div className="flex flex-col h-screen w-screen gap-2">
            <Header />
                <div className="flex h-full w-full gap-3">
                    <Sidemenu user={user} label={label} />
                    <div className="flex flex-col gap-5 w-[90%] pr-[10px]">
                        <Breadcrumb currentMenu={menu()} />
                        <div className="h-full w-full flex gap-10 p-10 flex-wrap">
                            <MenuCard menu={Items} />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default StaffDashboard;

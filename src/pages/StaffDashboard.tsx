import Header from "../layouts/Header";
import Sidemenu from "../layouts/Sidemenu";
import Breadcrumb from "../components/Breadcrumb";

const StaffDashboard: React.FC = () => {
    interface MenuLabel {
        menu: string;
        path: string;
      }

    const label: MenuLabel[] = [
      { menu: 'Menu', path: '/staffDashboard' },
      { menu: 'Inventory', path: '/inventory' },
      { menu: 'Order History', path: '/sales' },
    ];

    interface User {
        id: number;
        name: string;
        email: string;
        role: string;
      }

    const user: User[] = [
        { id: 1, name: 'Rey lois Baer', email: 'reyloisbaer@gmail.com', role: 'manager' },
      ];

      const menu = (): string => {
        if (location.pathname === '/staffDashboard') {
          return 'MENU';
        }
        return '';
      };

    return (
        <div className="flex flex-col h-screen w-screen gap-2">
            <Header />
                <div className="flex h-full w-full gap-3">
                    <Sidemenu user={user} label={label} />
                    <div className="flex flex-col gap-5 w-[90%] pr-[10px]">
                        <Breadcrumb currentMenu={menu()} />
                    </div>
                </div>
        </div>
    );
}

export default StaffDashboard;

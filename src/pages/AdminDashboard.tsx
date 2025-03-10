import Header from "../layouts/Header";
import AdminSidemenu from "../layouts/AdminSidemenu";
import Card from "../components/card";

const AdminDashboard: React.FC = () => {

    return (
        <div className="flex flex-col h-screen w-screen gap-5">
            <Header />
            <div className="flex">
                <AdminSidemenu />
                <Card category="Sales Revenue" content="Total Orders" subcontent="Inventory Level" />
            </div>
        </div>
    );
}

export default AdminDashboard;

import Header from "../layouts/Header";
import AdminSidemenu from "../layouts/AdminSidemenu";

const AdminDashboard: React.FC = () => {

    return (
        <div className="flex flex-col h-screen w-screen gap-5">
            <Header />
            <AdminSidemenu />
        </div>
    );
}

export default AdminDashboard;

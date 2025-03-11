import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../layouts/Header';
import Sidemenu from '../layouts/AdminSidemenu';
import Breadcrumb from '../components/Breadcrumb';
import Card from '../components/Card';

// Define the type for the user object
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// Define the type for the content array passed to the Card component
interface CardItem {
  category: string;
  value: string;
  sub1: string;
  sub2?: string; // Optional since not all items have sub2
}

const AdminDashboard: React.FC = () => {
  const location = useLocation();

  // Define the user and card data with explicit types
  const user: User[] = [
    { id: 0, name: 'Rolyn Jane Tacastacas', email: 'chidrosafoodservices@gmail.com', role: 'administrator' },
  ];

  const sales: CardItem[] = [
    { category: 'Sales Revenue', value: 'P70, 000.00', sub1: 'Last 30 Days' },
  ];    

  const orders: CardItem[] = [
    { category: 'Total Orders', value: '350', sub1: 'In Store: 200', sub2: 'Deliveries: 150' },
  ];

  const inventoryLevel: CardItem[] = [
    { category: 'Inventory Level', value: 'Low Stock', sub1: 'Stock: 50', sub2: '5-Gallon Bottles' },
  ];

  const delivery: CardItem[] = [
    { category: 'Delivery Performance', value: '93%', sub1: 'Delayed Deliveries: 10', sub2: 'One-Time Deliveries: 140' },
  ];

  const product: CardItem[] = [
    { category: 'Best Selling Product', value: '5-Gallon Refill', sub1: 'Sold: 250', sub2: 'Revenue: P50, 000.00' },
  ];

  // Function to determine the current menu based on the pathname
  const menu = (): string => {
    if (location.pathname === '/adminDashboard') {
      return 'DASHBOARD';
    }
    return '';
  };

  return (
    <div className="h-screen w-screen flex flex-col gap-2">
      <Header />
      <div className="flex w-full h-full gap-3">
        <Sidemenu user={user} />
        <div className="flex flex-col gap-5 w-full pr-[10px]">
          <Breadcrumb currentMenu={menu()} />
          <div className="flex gap-5 flex-wrap">
            <Card content={sales} />
            <Card content={orders} />
            <Card content={inventoryLevel} />
            <Card content={product} />
            <Card content={delivery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
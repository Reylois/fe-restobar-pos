import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../layouts/Header';
import Sidemenu from '../layouts/AdminSidemenu';
import Breadcrumb from '../components/Breadcrumb';
import Card from '../components/Card';
import BarGraph from '../components/BarGraph';

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
    {
      category: 'Current Sales',
      value: '₱50,000.00', // Total sales for the current period
      sub1: 'Dine-In: ₱30,000.00', // Sales from dine-in customers
      sub2: 'Takeout: ₱2,000.00', // Sales from takeout/delivery
    },
  ];
  
  const inventory: CardItem[] = [
    {
      category: 'Inventory Status',
      value: 'Low Stock', // Total value of inventory
      sub1: 'Last 30 Days', // Time frame for inventory tracking
      sub2: 'Low Stock: 5 Items', // Items with low stock levels
    },
  ];
  
  const staffInformation: CardItem[] = [
    {
      category: 'Staff Information',
      value: '15 Employees', // Total number of staff
      sub1: 'Active: 12', // Number of active staff
      sub2: 'On Leave: 3', // Number of staff on leave
    },
  ];
  
  const reports: CardItem[] = [
    {
      category: 'Reports',
      value: '95% Accuracy', // Accuracy of reports
      sub1: 'Generated: 50', // Total reports generated
      sub2: 'Pending: 5', // Reports pending review
    },
  ];
  
  const userActivity: CardItem[] = [
    {
      category: 'User Activity',
      value: '250 Logins', // Total user logins
      sub1: 'Active Users: 200', // Number of active users
      sub2: 'Inactive Users: 50', // Number of inactive users
    },
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
          <div className="flex gap-6 flex-wrap">
            <BarGraph />
            <div className='flex flex-col gap-12'>
              <Card content={inventory} />
              <Card content={sales} />
              <Card content={staffInformation} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
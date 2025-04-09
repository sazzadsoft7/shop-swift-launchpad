
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../components/dashboard/DashboardNav';
import DashboardHeader from '../components/dashboard/DashboardHeader';

const DashboardLayout = () => {
  // This would come from user context/state in a real app
  const storeName = "My Awesome Store";

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardNav />
      
      <div className="flex-1 ml-64 flex flex-col">
        <DashboardHeader storeName={storeName} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

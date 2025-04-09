
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart, 
  Settings, 
  LogOut 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { 
    name: 'Dashboard', 
    href: '/dashboard', 
    icon: <LayoutDashboard className="h-5 w-5" /> 
  },
  { 
    name: 'Products', 
    href: '/dashboard/products', 
    icon: <Package className="h-5 w-5" /> 
  },
  { 
    name: 'Orders', 
    href: '/dashboard/orders', 
    icon: <ShoppingCart className="h-5 w-5" /> 
  },
  { 
    name: 'Customers', 
    href: '/dashboard/customers', 
    icon: <Users className="h-5 w-5" /> 
  },
  { 
    name: 'Analytics', 
    href: '/dashboard/analytics', 
    icon: <BarChart className="h-5 w-5" /> 
  },
  { 
    name: 'Settings', 
    href: '/dashboard/settings', 
    icon: <Settings className="h-5 w-5" /> 
  }
];

const DashboardNav = () => {
  const location = useLocation();
  
  const handleLogout = () => {
    // TODO: Implement actual logout logic
    console.log('Logout clicked');
  };

  return (
    <div className="h-screen flex flex-col bg-white border-r border-gray-200 w-64 fixed">
      <div className="p-4 border-b border-gray-200">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <ShoppingBag className="h-6 w-6 text-purple-600" />
          <span className="text-gray-900">Shop<span className="text-purple-600">Swift</span></span>
        </Link>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <nav className="space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                location.pathname === item.href 
                  ? "bg-purple-50 text-purple-600" 
                  : "text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              )}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <Button
          variant="outline"
          className="w-full justify-start text-gray-700 hover:text-red-600 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Log out
        </Button>
      </div>
    </div>
  );
};

export default DashboardNav;


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Users, TrendingUp, DollarSign, Package, Truck } from 'lucide-react';

const Dashboard = () => {
  // Mock data - in a real app, this would come from an API
  const storeStats = {
    revenue: "$12,450",
    orders: 124,
    customers: 85,
    conversionRate: "3.2%"
  };
  
  const recentOrders = [
    { id: 'ORD-001', customer: 'John Smith', date: '2023-04-08', status: 'Delivered', total: '$125.00' },
    { id: 'ORD-002', customer: 'Emily Johnson', date: '2023-04-07', status: 'Processing', total: '$89.50' },
    { id: 'ORD-003', customer: 'Michael Brown', date: '2023-04-07', status: 'Shipped', total: '$210.75' },
    { id: 'ORD-004', customer: 'Sarah Williams', date: '2023-04-06', status: 'Delivered', total: '$45.99' },
    { id: 'ORD-005', customer: 'David Miller', date: '2023-04-05', status: 'Delivered', total: '$78.25' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your store performance and recent activity.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{storeStats.revenue}</div>
            <p className="text-xs text-muted-foreground">
              +18.1% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{storeStats.orders}</div>
            <p className="text-xs text-muted-foreground">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{storeStats.customers}</div>
            <p className="text-xs text-muted-foreground">
              +25.8% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{storeStats.conversionRate}</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              Your most recent orders across all products.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentOrders.map((order) => (
                <div 
                  key={order.id} 
                  className="flex items-center justify-between p-3 border border-gray-100 rounded-lg"
                >
                  <div className="flex flex-col gap-1">
                    <div className="font-medium text-sm">{order.customer}</div>
                    <div className="text-xs text-gray-500">{order.id} • {order.date}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-medium">{order.total}</div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-700' 
                        : order.status === 'Shipped' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>To-Do List</CardTitle>
            <CardDescription>
              Tasks to help optimize your store.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 border border-gray-100 rounded-lg">
                <div className="bg-blue-50 p-2 rounded-md">
                  <Package className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Add more products</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Stores with 10+ products see higher conversion rates.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 border border-gray-100 rounded-lg">
                <div className="bg-purple-50 p-2 rounded-md">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Complete your profile</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Add your store details to build customer trust.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 border border-gray-100 rounded-lg">
                <div className="bg-green-50 p-2 rounded-md">
                  <Truck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Set up shipping options</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Configure shipping methods and delivery zones.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

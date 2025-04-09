
import React from 'react';
import { 
  ShoppingBag, 
  Smartphone, 
  CreditCard, 
  BarChart, 
  Package, 
  Globe, 
  PaintBucket, 
  Search 
} from 'lucide-react';

const features = [
  {
    icon: <ShoppingBag className="h-8 w-8 text-purple-600" />,
    title: "Instant Store Creation",
    description: "Create your fully functional online store in just 10 seconds without any coding knowledge."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-purple-600" />,
    title: "Mobile-Optimized",
    description: "Every store is perfectly responsive, ensuring great shopping experiences on all devices."
  },
  {
    icon: <CreditCard className="h-8 w-8 text-purple-600" />,
    title: "Multiple Payment Gateways",
    description: "Accept payments with Stripe, PayPal, and local payment methods to serve global customers."
  },
  {
    icon: <BarChart className="h-8 w-8 text-purple-600" />,
    title: "Analytics Dashboard",
    description: "Track sales, customer behavior, and inventory with comprehensive analytics tools."
  },
  {
    icon: <Package className="h-8 w-8 text-purple-600" />,
    title: "Inventory Management",
    description: "Manage your products, track stock levels, and receive low inventory alerts automatically."
  },
  {
    icon: <Globe className="h-8 w-8 text-purple-600" />,
    title: "Custom Domain",
    description: "Connect your own domain or use our free subdomain for your professional online presence."
  },
  {
    icon: <PaintBucket className="h-8 w-8 text-purple-600" />,
    title: "Beautiful Templates",
    description: "Choose from dozens of professional, customizable store templates to match your brand."
  },
  {
    icon: <Search className="h-8 w-8 text-purple-600" />,
    title: "SEO Optimization",
    description: "Built-in SEO tools help your store rank higher in search results and attract more customers."
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Succeed Online
          </h2>
          <p className="text-xl text-gray-600">
            ShopSwift provides all the tools to create, manage, and grow your e-commerce business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-purple-50 p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

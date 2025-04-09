
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const templates = [
  {
    id: 1,
    name: "Modern Boutique",
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlJTIwc3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    category: "Fashion"
  },
  {
    id: 2,
    name: "Tech Galaxy",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Home Essentials",
    image: "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Home & Decor"
  },
  {
    id: 4,
    name: "Tasty Bites",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    category: "Food & Grocery"
  }
];

const TemplatesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beautiful Store Templates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Choose from dozens of professionally designed templates that look great on all devices.
            </p>
          </div>
          <Link to="/templates" className="mt-4 md:mt-0">
            <Button variant="outline" className="font-medium">
              View All Templates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template) => (
            <div 
              key={template.id} 
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={template.image} 
                  alt={template.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="text-sm text-purple-600 font-medium">{template.category}</span>
                <h3 className="text-lg font-semibold mt-1">{template.name}</h3>
                <Link to={`/templates/${template.id}`} className="text-sm text-purple-600 font-medium mt-2 inline-flex items-center">
                  Preview Template
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;

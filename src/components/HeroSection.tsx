
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative pt-24 pb-12 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Launch Your E-commerce Store in 
              <span className="gradient-text"> 10 Seconds</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              No coding, no hassle. Create a fully functional online store instantly with beautiful templates and powerful features.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link to="/register">
                <Button size="lg" className="gradient-bg text-white font-medium">
                  Start Your Free Store
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="font-medium">
                  View Demo Store
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600" />
                <span className="text-gray-600">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600" />
                <span className="text-gray-600">Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600" />
                <span className="text-gray-600">Cancel anytime</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" 
                alt="ShopSwift Demo" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <ShoppingBag className="h-6 w-6 text-purple-600" />
          <span className="text-gray-900">Shop<span className="text-purple-600">Swift</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/features" className="text-gray-600 hover:text-purple-600 transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
            Pricing
          </Link>
          <Link to="/templates" className="text-gray-600 hover:text-purple-600 transition-colors">
            Templates
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" className="font-medium">
              Log in
            </Button>
          </Link>
          <Link to="/register">
            <Button className="font-medium gradient-bg">
              Start Free
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <Link to="/features" className="px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors">
              Pricing
            </Link>
            <Link to="/templates" className="px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors">
              Templates
            </Link>
            <Link to="/contact" className="px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors">
              Contact
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link to="/login">
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link to="/register">
                <Button className="w-full gradient-bg">
                  Start Free
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <ShoppingBag className="h-6 w-6 text-purple-600" />
              <span className="text-gray-900">Shop<span className="text-purple-600">Swift</span></span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Launch your e-commerce store in 10 seconds. No coding required.
              Beautiful templates, powerful features, and seamless integrations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/docs" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} ShopSwift. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/terms" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

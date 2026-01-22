import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <div className="text-[#007acc] text-xl font-bold mb-2">GALA FINANCE GROUP</div>
              <div className="text-gray-400 text-sm tracking-wider">LENDING SIMPLIFIED</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted loan brokerage partner. From gas stations to medical offices, 
              we connect you with lenders who provide the capital that drives your success.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#007acc]" />
                <span className="text-gray-300">105 Kilmayne Dr, Suite C, Cary, NC 27511</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#007acc]" />
                <span className="text-gray-300">(919) 413-2524</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#007acc]" />
                <span className="text-gray-300">info@galafinancegroup.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#007acc] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#007acc] transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#007acc] transition-colors duration-200">
                  Lending Solutions
                </Link>
              </li>
              <li>
                <Link to="/sectors" className="text-gray-300 hover:text-[#007acc] transition-colors duration-200">
                  Investment Sectors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#007acc] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300">Gas Station Financing</span>
              </li>
              <li>
                <span className="text-gray-300">Business Acquisition</span>
              </li>
              <li>
                <span className="text-gray-300">SBA Loans</span>
              </li>
              <li>
                <span className="text-gray-300">Construction Loans</span>
              </li>
              <li>
                <span className="text-gray-300">Equipment Financing</span>
              </li>
              <li>
                <span className="text-gray-300">Real Estate Loans</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-gray-300 text-sm">
              © 2024 Gala Finance Group. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Licensed in All 50 States</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
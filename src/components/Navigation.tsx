import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Home, User, Building, TrendingUp, MessageSquare, Star, FileText } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Close menu when scrolling
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/services', label: 'Lending Solutions', icon: Building },
    { path: '/sectors', label: 'Investment Sectors', icon: TrendingUp },
    { path: '/contact', label: 'Contact', icon: MessageSquare }
  ];

  return (
    <>
      {/* Main navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-[#003366]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="flex flex-col items-center sm:items-start">
                <div className={`text-sm sm:text-lg font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-[#003366]' : 'text-white'
                }`}>
                  GALA FINANCE GROUP
                </div>
                <div className={`text-xs sm:text-xs tracking-wider transition-colors duration-300 ${
                  isScrolled ? 'text-[#007acc]' : 'text-gray-200'
                }`}>
                  LENDING SIMPLIFIED
                </div>
              </div>
            </Link>

            {/* Apply Now Button and Hamburger Menu */}
            <div className="flex items-center space-x-4">
              <Link
                to="/contact"
                className={`px-3 py-1.5 sm:px-6 sm:py-2 rounded text-sm sm:text-base font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-[#007acc] text-white hover:bg-[#005a99]' 
                    : 'bg-white text-[#003366] hover:bg-gray-100'
                }`}
              >
                Apply Now
              </Link>
              
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`transition-colors duration-300 p-1.5 sm:p-2 ${
                  isScrolled 
                    ? 'text-[#003366] hover:text-[#007acc]' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Slide-out Menu */}
        <div className={`fixed top-0 right-0 h-screen w-72 sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-4 sm:p-6 h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <div className="text-[#007acc] font-bold text-base sm:text-lg">Menu</div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#1f1f1f] hover:text-[#007acc] transition-colors duration-200"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
            
            <div className="space-y-3 sm:space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg transition-colors duration-200 ${
                    location.pathname === item.path 
                      ? 'bg-[#f0f0f0] text-[#007acc]' 
                      : 'text-[#1f1f1f] hover:bg-[#f0f0f0] hover:text-[#007acc] text-base sm:text-lg font-medium'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              
              {/* Apply Now Button */}
              <div className="pt-4 mt-4 sm:pt-6 sm:mt-6">
                <Link
                  to="/contact"
                  className="flex items-center space-x-3 px-3 py-2.5 sm:px-4 sm:py-3 bg-[#007acc] text-white rounded-lg hover:bg-[#005a99] transition-colors duration-200 text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-medium">Apply Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
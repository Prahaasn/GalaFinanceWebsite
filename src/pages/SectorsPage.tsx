import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fuel, Building, Car, Utensils, Stethoscope, Baby, Wrench, ShoppingCart, MapPin, TrendingUp, Clock, DollarSign, ArrowRight, CheckCircle, Star } from 'lucide-react';

const SectorsPage = () => {
  const [selectedSector, setSelectedSector] = useState(0);

  const sectors = [
    {
      icon: Fuel,
      title: 'Gas Stations',
      description: 'Fuel retail and convenience store financing',
      image: 'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      loanRange: '$500K - $10M',
      example: 'Secured $2.3M for Shell station acquisition in Charlotte, NC',
      avgLoan: '$1.8M'
    },
    {
      icon: Building,
      title: 'Hotels',
      description: 'Hospitality and lodging financing solutions',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      loanRange: '$1M - $25M',
      example: 'Funded $8.5M Hampton Inn construction in Raleigh, NC',
      avgLoan: '$5.2M'
    },
    {
      icon: Utensils,
      title: 'Quick Service Restaurants',
      description: 'Fast food and QSR franchise financing',
      image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      loanRange: '$250K - $5M',
      example: 'Approved $1.8M for 3-unit Taco Bell expansion in Durham, NC',
      avgLoan: '$850K'
    },
    {
      icon: ShoppingCart,
      title: 'Self-Storage Facilities',
      description: 'Storage facility development and acquisition',
      image: 'https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      loanRange: '$2M - $15M',
      example: 'Financed $4.2M self-storage development in Cary, NC',
      avgLoan: '$3.1M'
    },
    {
      icon: Car,
      title: 'Car Washes',
      description: 'Automated and self-service car wash financing',
      image: 'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      loanRange: '$1M - $8M',
      example: 'Secured $3.1M for express car wash in Greensboro, NC',
      avgLoan: '$2.4M'
    },
    {
      icon: Baby,
      title: 'Daycares',
      description: 'Childcare facility financing and development',
      image: 'https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      loanRange: '$500K - $3M',
      example: 'Funded $950K daycare expansion in Winston-Salem, NC',
      avgLoan: '$750K'
    },
    {
      icon: Stethoscope,
      title: 'Dental & Medical Offices',
      description: 'Healthcare facility and practice financing',
      image: 'https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      loanRange: '$250K - $5M',
      example: 'Approved $1.2M for dental practice acquisition in Asheville, NC',
      avgLoan: '$680K'
    },
    {
      icon: Wrench,
      title: 'Automotive Services',
      description: 'Auto repair and service center financing',
      image: 'https://images.pexels.com/photos/4489765/pexels-photo-4489765.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      loanRange: '$300K - $2M',
      example: 'Secured $750K for auto repair shop expansion in Fayetteville, NC',
      avgLoan: '$520K'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#003366] to-[#007acc]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Investment <span className="text-blue-300">Sectors</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Specialized lender connections across high-growth business sectors
          </p>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded hover:bg-white hover:text-[#003366] transition-all duration-200 font-semibold text-lg"
            onClick={() => window.scrollTo(0, 0)}
          >
            Explore Opportunities
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1f1f1f] mb-4">Industries We Specialize In</h2>
            <p className="text-xl text-[#1f1f1f] max-w-3xl mx-auto">
              Deep brokerage expertise across diverse business sectors with proven lender connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group cursor-pointer transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#007acc] rounded-lg flex items-center justify-center">
                      <sector.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{sector.title}</h3>
                    <p className="text-gray-200 text-sm">{sector.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sector View */}
      <section className="py-20 bg-[#f0f0f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#007acc] rounded-lg flex items-center justify-center mr-4">
                  {React.createElement(sectors[selectedSector].icon, { className: "h-8 w-8 text-white" })}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#1f1f1f]">{sectors[selectedSector].title}</h2>
                  <p className="text-[#1f1f1f]">{sectors[selectedSector].description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <DollarSign className="h-8 w-8 text-[#007acc] mx-auto mb-2" />
                  <p className="text-sm text-[#1f1f1f] mb-1">Loan Range</p>
                  <p className="font-semibold text-[#1f1f1f]">{sectors[selectedSector].loanRange}</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <TrendingUp className="h-8 w-8 text-[#007acc] mx-auto mb-2" />
                  <p className="text-sm text-[#1f1f1f] mb-1">Average Loan</p>
                  <p className="font-semibold text-[#1f1f1f]">{sectors[selectedSector].avgLoan}</p>
                </div>
              </div>

              <div className="bg-[#007acc] text-white p-6 rounded-lg mb-8">
                <h4 className="font-semibold mb-2">Recent Brokerage Success</h4>
                <p className="text-gray-200">{sectors[selectedSector].example}</p>
              </div>

              <div className="flex space-x-4">
                <Link
                  to="/contact"
                  className="bg-[#007acc] text-white px-6 py-3 rounded hover:bg-[#005a99] transition-all duration-200 font-semibold"
                >
                  Find Lenders
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border-2 border-[#007acc] text-[#007acc] px-6 py-3 rounded hover:bg-[#007acc] hover:text-white transition-all duration-200 font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src={sectors[selectedSector].image}
                alt={sectors[selectedSector].title}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-[#007acc]/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-gradient-to-br from-[#004d7a] to-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from our sector-specific brokerage expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-300/30 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#feca57] fill-current" />
                ))}
              </div>
              <p className="text-white mb-6 italic">
                "Gala Finance Group understood our daycare expansion needs perfectly. They connected us with a lender who approved $850K in just 2 weeks when other brokers couldn't even find interested lenders!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#ff6b6b] to-[#48dbfb] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">LM</span>
                </div>
                <div>
                  <p className="text-blue-300 font-semibold">Lisa Martinez</p>
                  <p className="text-gray-300 text-sm">Little Stars Daycare, Greensboro NC</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-300/30 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#feca57] fill-current" />
                ))}
              </div>
              <p className="text-white mb-6 italic">
                "After 6 months of rejections from banks, Gaurang's team connected us with a healthcare-focused lender who approved $3.2M for our medical office building. Their sector expertise made all the difference!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#48dbfb] to-[#feca57] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">RK</span>
                </div>
                <div>
                  <p className="text-blue-300 font-semibold">Dr. Robert Kim</p>
                  <p className="text-gray-300 text-sm">Triangle Medical Center, Cary NC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Invest in Your Future?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's discuss connecting you with lenders who specialize in your preferred sector
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#007acc] text-white px-8 py-4 rounded hover:bg-[#005a99] transition-all duration-200 font-semibold text-lg inline-flex items-center justify-center group"
              onClick={() => window.scrollTo(0, 0)}
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded hover:bg-white hover:text-[#003366] transition-all duration-200 font-semibold text-lg"
            >
              Get Pre-Approved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectorsPage;
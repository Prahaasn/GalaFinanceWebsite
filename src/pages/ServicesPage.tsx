import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, Fuel, Wrench, Banknote, RefreshCw, ShoppingCart, Home, ArrowRight, CheckCircle, Calculator, Clock, Shield, Star, TrendingUp } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';
import AnimatedCounter from '../components/AnimatedCounter';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      icon: Building,
      title: 'Business Acquisitions',
      description: 'Buy a franchise or take over an existing location',
      features: ['Up to $5M financing', 'Franchise & independent businesses', 'Fast pre-approvals', 'Competitive rates'],
      loanRange: '$250K - $5M',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Fuel,
      title: 'Gas Station & C-Store Loans',
      description: 'Specialized financing for fuel and convenience retail',
      features: ['New construction & acquisitions', 'Equipment & inventory financing', 'Branded & unbranded stations', 'Experienced underwriting'],
      loanRange: '$500K - $10M',
      color: 'from-slate-500 to-slate-600',
      image: 'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Banknote,
      title: 'SBA Loans',
      description: 'Government-backed and traditional commercial loans',
      features: ['SBA 7(a) & 504 programs', 'Lower down payments', 'Competitive rates', 'Flexible terms'],
      loanRange: '$150K - $5M',
      color: 'from-indigo-500 to-blue-500',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Wrench,
      title: 'Construction Financing',
      description: 'Ground-up construction and major renovations',
      features: ['New construction projects', 'Expansion & renovation', 'Convert to perm financing', 'Progress-based funding'],
      loanRange: '$1M - $15M',
      color: 'from-blue-600 to-indigo-600',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: ShoppingCart,
      title: 'Equipment Financing',
      description: 'POS systems, kitchen equipment, fuel pumps, and more',
      features: ['New & used equipment', 'Technology upgrades', 'Flexible payment terms', 'Quick approvals'],
      loanRange: '$25K - $2M',
      color: 'from-slate-600 to-blue-600',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: RefreshCw,
      title: 'Refinance & Consolidation',
      description: 'Lower your rate and consolidate multiple loans',
      features: ['Rate reduction opportunities', 'Debt consolidation', 'Cash-out refinancing', 'Improved terms'],
      loanRange: '$250K - $10M',
      color: 'from-blue-500 to-indigo-500',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Home,
      title: 'Commercial Real Estate Lending',
      description: 'Using commercial property as collateral',
      features: ['Commercial real estate', 'Investment properties', 'Purchase & refinance', 'Competitive LTV ratios'],
      loanRange: '$500K - $20M',
      color: 'from-indigo-600 to-blue-600',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const stats = [
    { value: 50, suffix: '', label: 'States Licensed' },
    { value: 500, suffix: '+', label: 'Businesses Helped' },
    { value: 150, suffix: 'M+', label: 'Total Connected', prefix: '$' },
    { value: 20, suffix: '+', label: 'Years Experience' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2d3436] via-[#636e72] to-[#2d3436] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            animation: 'float 8s ease-in-out infinite'
          }}
        ></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-[#ff6b6b] to-[#ee5a24] rounded-full opacity-30 animate-pulse shadow-lg"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-r from-[#48dbfb] to-[#0abde3] rounded-full opacity-30 animate-bounce shadow-lg"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-[#feca57] to-[#ff9ff3] rounded-full opacity-25 animate-ping shadow-lg"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              Brokerage <span className="text-blue-300">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8 drop-shadow-lg">
              Comprehensive lender connections tailored to your business needs
            </p>
            <Link
              to="/contact"
              className="bg-[#007acc] text-white px-10 py-5 rounded-xl hover:bg-[#005a99] transition-all duration-300 font-bold text-xl inline-flex items-center group shadow-2xl"
              onClick={() => window.scrollTo(0, 0)}
            >
              Start Your Application
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#003366] to-[#007acc] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-500/10 rounded-full animate-ping"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="text-center p-8 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-300/30 hover:border-blue-300/50 transition-all duration-300 shadow-lg">
                  <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-3 transition-colors duration-300">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix}
                      duration={3000}
                    />
                  </div>
                  <p className="text-white font-bold transition-colors duration-300">{stat.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-[#004d7a] to-[#003366] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007acc' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'float 10s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full animate-bounce"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Brokerage Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From acquisition to expansion, we connect you with lenders who provide the capital that drives your success
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div
                  className="group p-8 bg-blue-900/30 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-300/30 cursor-pointer relative overflow-hidden"
                  onClick={() => setSelectedService(index)}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                  
                  <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl mb-6 transition-all duration-300 shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-3 transition-all duration-300">{service.title}</h3>
                  <p className="text-gray-300 mb-4 transition-colors duration-300">{service.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Loan Range:</span>
                      <span className="font-semibold text-blue-300">{service.loanRange}</span>
                    </div>
                  </div>
                  
                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5 text-blue-300" />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service View */}
      <section className="py-20 bg-gradient-to-br from-[#003366] via-[#004d7a] to-[#007acc] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-500/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/20 rounded-full animate-bounce"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left">
              <div>
                <div className="flex items-center mb-6">
                  {React.createElement(services[selectedService].icon, { className: "h-12 w-12 text-blue-300 mr-4 animate-pulse" })}
                  <h2 className="text-3xl font-bold text-white drop-shadow-lg">{services[selectedService].title}</h2>
                </div>
                <p className="text-xl text-gray-300 mb-8 drop-shadow-lg">{services[selectedService].description}</p>
                
                <div className="space-y-4">
                  {services[selectedService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-300 animate-pulse" />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex space-x-4">
                  <Link
                    to="/contact"
                    className="bg-[#007acc] text-white px-8 py-4 rounded-xl hover:bg-[#005a99] transition-all duration-300 font-bold shadow-2xl"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Apply Now
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#007acc] transition-all duration-300 font-bold shadow-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={300}>
              <div className="relative">
                <img
                  src={services[selectedService].image}
                  alt={services[selectedService].title}
                  className="w-full h-96 object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b]/20 to-[#48dbfb]/20 rounded-xl"></div>
                
                {/* Loan Details Card */}
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-[#2d3436] mb-4">Loan Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calculator className="h-5 w-5 text-blue-300" />
                      <div>
                        <p className="font-semibold text-[#2d3436] text-sm">Amount</p>
                        <p className="text-[#636e72] text-sm">{services[selectedService].loanRange}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#007acc] to-[#005a99] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500/15 rounded-full animate-ping"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">Our Simple Process</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
                From application to lender connection - fast and efficient
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {['Apply', 'Review', 'Match', 'Connect', 'Close'].map((step, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="text-center group">
                  <div className="relative">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-lg">
                      <span className="text-[#007acc] font-bold text-xl">{index + 1}</span>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-white/50 animate-pulse"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-3 transition-colors duration-300 drop-shadow-lg">{step}</h3>
                  <p className="text-white/90 text-sm transition-colors duration-300">
                    {index === 0 && 'Submit your application'}
                    {index === 1 && 'We review quickly'}
                    {index === 2 && 'Match with ideal lenders'}
                    {index === 3 && 'Connect you directly'}
                    {index === 4 && 'Close with your lender'}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews by Service */}
      <section className="py-20 bg-gradient-to-br from-[#004d7a] to-[#003366] relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Service Reviews</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real feedback from clients across all our brokerage solutions
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={200}>
              <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-300/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#feca57] fill-current" />
                  ))}
                </div>
                <p className="text-white mb-4 italic">
                  "SBA loan connection was seamless. They matched us with the perfect SBA lender in 3 weeks!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#ff6b6b] to-[#48dbfb] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">JW</span>
                  </div>
                  <div>
                    <p className="text-blue-300 font-semibold text-sm">James Wilson</p>
                    <p className="text-gray-300 text-xs">Manufacturing Business</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={400}>
              <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-300/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#feca57] fill-current" />
                  ))}
                </div>
                <p className="text-white mb-4 italic">
                  "Equipment financing connection for our new kitchen was made same day. Amazing brokerage service!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#48dbfb] to-[#feca57] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">MG</span>
                  </div>
                  <div>
                    <p className="text-blue-300 font-semibold text-sm">Maria Garcia</p>
                    <p className="text-gray-300 text-xs">Restaurant Owner</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={600}>
              <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-300/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#feca57] fill-current" />
                  ))}
                </div>
                <p className="text-white mb-4 italic">
                  "They connected us with a construction lender who offered better terms than any bank we approached directly!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#feca57] to-[#ff6b6b] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">BT</span>
                  </div>
                  <div>
                    <p className="text-blue-300 font-semibold text-sm">Brian Thompson</p>
                    <p className="text-gray-300 text-xs">Developer</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#003366] via-[#004d7a] to-[#007acc] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500/20 rounded-full animate-ping"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-2xl">Not Sure Where to Start?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto drop-shadow-lg">
              Let's discuss your financing needs and find the right lender for your business
            </p>
            <Link
              to="/contact"
              className="bg-[#007acc] text-white px-10 py-5 rounded-xl hover:bg-[#005a99] transition-all duration-300 font-bold text-xl inline-flex items-center group shadow-2xl"
              onClick={() => window.scrollTo(0, 0)}
            >
              Schedule a Consultation
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </FadeInSection>
        </div>
      </section>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
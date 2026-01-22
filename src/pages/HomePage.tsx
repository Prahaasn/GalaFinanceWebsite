import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Building, Car, Utensils, Hotel, Stethoscope, TrendingUp, Clock, DollarSign, CheckCircle, Star } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import FadeInSection from '../components/FadeInSection';
import FinancialRatesWidget from '../components/FinancialRatesWidget';

const HomePage = () => {
  const industries = [
    { icon: Building, title: 'Gas Stations', description: 'Fuel retail and convenience stores', color: 'from-blue-500 to-blue-600' },
    { icon: Hotel, title: 'Hotels', description: 'Hospitality and lodging facilities', color: 'from-slate-500 to-slate-600' },
    { icon: Car, title: 'Franchises', description: 'Brand expansion opportunities', color: 'from-blue-600 to-indigo-600' },
    { icon: Utensils, title: 'Restaurants', description: 'Food service establishments', color: 'from-gray-500 to-gray-600' },
    { icon: Building, title: 'Retail Spaces', description: 'Commercial retail properties', color: 'from-slate-600 to-blue-600' },
    { icon: Stethoscope, title: 'Medical Offices', description: 'Healthcare facilities', color: 'from-indigo-500 to-blue-500' }
  ];

  const stats = [
    { value: 150, suffix: 'M+', label: 'Total Connected', prefix: '$' },
    { value: 500, suffix: '+', label: 'Businesses Helped' },
    { value: 50, suffix: '', label: 'States Licensed' },
    { value: 20, suffix: '+', label: 'Years Experience' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#003366] via-[#004d7a] to-[#007acc] overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            animation: 'float 8s ease-in-out infinite'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        
        {/* Subtle Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse shadow-lg"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-slate-500/20 rounded-full animate-bounce shadow-lg"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-2xl">
              Your Vision. <span className="text-blue-300">Our Network.</span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={300}>
            <p className="text-xl md:text-2xl text-gray-100 mb-4 max-w-3xl mx-auto drop-shadow-lg">
              Being a businessman isn't easy, so we made getting a business loan easier.
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-lg">
              We connect you with the right lenders from our extensive network of banks and financial institutions.
            </p>
          </FadeInSection>
          <FadeInSection delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-[#007acc] text-white px-8 py-4 rounded-lg hover:bg-[#005a99] transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center group transform hover:scale-105 shadow-xl"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#003366] transition-all duration-300 font-semibold text-lg transform hover:scale-105 shadow-lg backdrop-blur-sm"
              >
                Explore Lending Options
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Licensed Bar */}
      <section className="py-6 bg-gradient-to-r from-[#007acc] to-[#005a99] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 relative z-10">
            <Shield className="h-8 w-8 text-white animate-bounce" />
            <span className="text-white font-bold text-lg drop-shadow-lg">Licensed Loan Brokerage in All 50 States</span>
            <Shield className="h-8 w-8 text-white animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </section>

      {/* Live Stats Counter */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 animate-pulse"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-slate-500/10 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                Live Brokerage Impact
              </h2>
              <p className="text-xl text-gray-300 drop-shadow-lg">Real-time loan connections facilitated nationwide</p>
            </div>
          </FadeInSection>
          
          {/* Real-Time Counter */}
          <FadeInSection delay={200}>
            <div className="text-center mb-12 p-8 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Loans Being Facilitated Right Now</h3>
              <div className="text-5xl md:text-6xl font-bold text-blue-300 mb-2">
                <AnimatedCounter end={25} duration={3000} />
              </div>
              <p className="text-gray-300">Active lender connections nationwide</p>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/30 hover:border-blue-500/50 transition-all duration-300 shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2 transition-colors duration-300">
                    <AnimatedCounter 
                      end={stat.value} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix}
                      duration={3000}
                    />
                  </div>
                  <p className="text-white font-semibold">{stat.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007acc' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'float 10s ease-in-out infinite'
          }}></div>
        </div>
        
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-slate-500/5 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Specialized loan brokerage services for diverse business sectors
              </p>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl mb-6 transition-all duration-300 shadow-lg`}>
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 transition-colors duration-300">{industry.title}</h3>
                  <p className="text-slate-600 transition-colors duration-300">{industry.description}</p>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-blue-600/10"></div>
        
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-slate-500/10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                Our Brokerage Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg">
                A streamlined approach to connecting you with the right lender
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {['Apply', 'Review', 'Match', 'Connect', 'Close'].map((step, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="text-center group">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-lg">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 opacity-50"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 transition-colors duration-300">{step}</h3>
                  <p className="text-gray-300 text-sm transition-colors duration-300">
                    {index === 0 && 'Submit your application'}
                    {index === 1 && 'We review within 24 hours'}
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

      {/* Customer Reviews */}
      <section className="py-20 bg-gradient-to-br from-[#004d7a] to-[#003366] relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real stories from business owners who used our brokerage services
              </p>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={200}>
              <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-300/30 hover:border-blue-300/50 transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#feca57] fill-current" />
                  ))}
                </div>
                <p className="text-white mb-6 italic">
                  "Gaurang and his team connected me with the perfect lender for my gas station purchase. They understood the industry and got me matched in just 10 days!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ff6b6b] to-[#48dbfb] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">MR</span>
                  </div>
                  <div>
                    <p className="text-blue-300 font-semibold">Mike Rodriguez</p>
                    <p className="text-gray-300 text-sm">Shell Station Owner, Charlotte NC</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={400}>
              <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-300/30 hover:border-blue-300/50 transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#feca57] fill-current" />
                  ))}
                </div>
                <p className="text-white mb-6 italic">
                  "After being turned down by 3 banks, Gala Finance Group found a lender who approved $2.8M for our hotel renovation. Their network is incredible!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#48dbfb] to-[#feca57] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">SP</span>
                  </div>
                  <div>
                    <p className="text-blue-300 font-semibold">Sarah Patel</p>
                    <p className="text-gray-300 text-sm">Hampton Inn Owner, Raleigh NC</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={600}>
              <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-300/30 hover:border-blue-300/50 transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#feca57] fill-current" />
                  ))}
                </div>
                <p className="text-white mb-6 italic">
                  "The team at Gala Finance Group connected us with franchise-friendly lenders for our Subway expansion. They saved us months of searching!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#feca57] to-[#ff6b6b] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">DJ</span>
                  </div>
                  <div>
                    <p className="text-blue-300 font-semibold">David Johnson</p>
                    <p className="text-gray-300 text-sm">Subway Franchise Owner, Durham NC</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#007acc] to-[#005a99] relative overflow-hidden">
        {/* Financial Rates Widget Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <FadeInSection>
                <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">
                  Current Market Rates
                </h2>
                <p className="text-xl text-gray-100 mb-8 max-w-2xl drop-shadow-lg">
                  Stay informed with live financial market rates. Our lender network offers 
                  competitive rates based on current market conditions and your business profile.
                </p>
              </FadeInSection>
            </div>
            <div>
              <FadeInSection delay={300}>
                <FinancialRatesWidget />
              </FadeInSection>
            </div>
          </div>
        </div>
        
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
        
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-2xl">
              Ready to Find Your Lender?
            </h2>
            <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto drop-shadow-lg">
              Let's discuss your financing needs and connect you with the right lender
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#007acc] px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-xl inline-flex items-center group shadow-xl"
              onClick={() => window.scrollTo(0, 0)}
            >
              Start Your Application
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
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
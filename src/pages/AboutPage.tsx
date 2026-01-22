import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Clock, Shield, Heart, ArrowRight, TrendingUp, Building, Star } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';
import AnimatedCounter from '../components/AnimatedCounter';

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Clear communication and honest terms throughout the lending process',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Speed',
      description: 'Quick decisions and streamlined processes to get you funding fast',
      color: 'from-slate-500 to-slate-600'
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Deep industry knowledge and specialized lending solutions',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Heart,
      title: 'Personalized Service',
      description: 'Tailored approach to meet your unique business needs',
      color: 'from-blue-600 to-indigo-600'
    }
  ];

  const achievements = [
    { value: 150, suffix: 'M+', label: 'Total Funded', prefix: '$' },
    { value: 500, suffix: '+', label: 'Happy Clients' },
    { value: 20, suffix: '+', label: 'Years Experience' },
    { value: 50, suffix: '', label: 'States Licensed' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2d3436] via-[#636e72] to-[#2d3436] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
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
              About <span className="text-blue-300">Gala Finance Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg">
              Your trusted loan brokerage partner, connecting businesses with lenders for over two decades
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20 bg-gradient-to-br from-[#003366] to-[#007acc] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-500/10 rounded-full animate-ping"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="text-center p-8 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-300/30 hover:border-blue-300/50 transition-all duration-300 shadow-lg">
                  <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-3 transition-colors duration-300">
                    <AnimatedCounter 
                      end={achievement.value} 
                      prefix={achievement.prefix} 
                      suffix={achievement.suffix}
                      duration={3000}
                    />
                  </div>
                  <p className="text-white font-bold transition-colors duration-300">{achievement.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-br from-[#004d7a] to-[#003366] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007acc' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'float 12s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full animate-bounce"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#feca57] via-[#ff6b6b] to-[#48dbfb] mb-8 animate-pulse">Meet Our Founder</h2>
                <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-blue-300/30 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <h3 className="text-3xl font-bold text-blue-300 mb-6">Gaurang Gala</h3>
                  <p className="text-white text-lg leading-relaxed mb-6">
                    Gaurang Gala, founder and CEO of Gala Finance Group, brings over 20 years of experience
                    in loan brokerage, specializing in gas station, franchise, and commercial lending connections.
                    Known for his strategic insight and personal dedication to each client, Gaurang has helped
                    facilitate over $150 million in loans through his extensive lender network.
                  </p>
                  <p className="text-white text-lg leading-relaxed mb-6">
                    His hands-on approach and extensive network of lenders and banking partners have made
                    him a trusted loan broker for business owners across all industries. Gaurang's expertise
                    in matching borrowers with the right lenders spans gas stations, franchises, hotels, medical offices, and more.
                  </p>
                  <p className="text-white text-lg leading-relaxed">
                    Under his leadership, Gala Finance Group has become a premier loan brokerage for entrepreneurs
                    seeking reliable, fast, and transparent connections to business lenders.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right">
              <div className="flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b6b] via-[#feca57] to-[#48dbfb] rounded-2xl opacity-75 group-hover:opacity-100 blur transition-all duration-500 animate-pulse"></div>
                  <div className="relative">
                    <img
                      src="/images/Gaurang Gala Founder & CEO.png"
                      alt="Gaurang Gala - Founder & CEO"
                      className="rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white/10 transform group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-[#003366] via-[#004d7a] to-[#007acc] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-500/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full animate-ping"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-2xl">Our Mission</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-2xl text-gray-300 leading-relaxed mb-12 drop-shadow-lg">
                  To connect entrepreneurs and investors with the right lenders through clarity, speed, and trust. 
                  We believe that every business deserves access to our extensive network of financial partners 
                  to find the perfect lending match.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b6b] to-[#feca57] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-lg">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-300 mb-3 transition-all duration-300">Clarity</h3>
                    <p className="text-gray-300 transition-colors duration-300">Transparent processes and honest communication</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#feca57] to-[#48dbfb] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-lg">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-300 mb-3 transition-all duration-300">Speed</h3>
                    <p className="text-gray-300 transition-colors duration-300">Quick decisions and streamlined processes</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#48dbfb] to-[#ff6b6b] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-lg">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-300 mb-3 transition-all duration-300">Trust</h3>
                    <p className="text-gray-300 transition-colors duration-300">Building lasting partnerships with our clients</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-[#004d7a] to-[#003366] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500/8 rounded-full animate-ping"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="group text-center p-8 bg-blue-900/30 backdrop-blur-sm rounded-xl hover:shadow-xl transition-all duration-300 border border-blue-300/30 relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                  
                  <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.color} rounded-xl mx-auto mb-6 transition-all duration-300 shadow-lg relative`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-4 transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#004d7a] to-[#003366] relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Testimonials</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear from business owners who've experienced our personalized brokerage service
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={200}>
              <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-300/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#feca57] fill-current" />
                  ))}
                </div>
                <p className="text-white mb-6 italic text-lg">
                  "Gaurang personally walked me through every step of finding the right lender. His 20+ years of brokerage experience really shows - he knew exactly which banks to approach!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ff6b6b] to-[#48dbfb] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">TC</span>
                  </div>
                  <div>
                    <p className="text-blue-300 font-semibold">Tony Chen</p>
                    <p className="text-gray-300 text-sm">Restaurant Owner, Winston-Salem NC</p>
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
                <p className="text-white mb-6 italic text-lg">
                  "The transparency was incredible. They clearly explained their brokerage process and connected us with a lender who had no hidden fees. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#48dbfb] to-[#feca57] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AM</span>
                  </div>
                  <div>
                    <p className="text-blue-300 font-semibold">Angela Martinez</p>
                    <p className="text-gray-300 text-sm">Auto Repair Shop Owner, Fayetteville NC</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#007acc] to-[#005a99] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500/15 rounded-full animate-ping"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-2xl">Ready to Work Together?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto drop-shadow-lg">
              Let's discuss how we can connect you with the right lender for your business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-[#007acc] px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-500 font-bold text-xl inline-flex items-center justify-center group transform hover:scale-110 shadow-2xl hover:shadow-3xl"
                onClick={() => window.scrollTo(0, 0)}
              >
                Schedule a Consultation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-[#007acc] transition-all duration-500 font-bold text-xl transform hover:scale-110 shadow-lg hover:shadow-2xl"
                onClick={() => window.scrollTo(0, 0)}
              >
                Contact Us Today
              </Link>
            </div>
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

export default AboutPage;
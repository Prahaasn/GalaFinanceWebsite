import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, Building, DollarSign, MessageSquare, CheckCircle, Star, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    loanAmount: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Save to Supabase database for records
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.loanType,
            loan_amount: formData.loanAmount,
            message: formData.message
          }
        ]);

      if (dbError) throw dbError;

      // Send email notification via Web3Forms to gaurang@galafinancegroup.com
      const emailData = {
        access_key: '7fbdcddf-f1aa-4898-aed1-0b414139972d',
        subject: `New Loan Application from ${formData.name}`,
        from_name: 'Gala Finance Website',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        loan_type: formData.loanType,
        loan_amount: formData.loanAmount || 'Not specified',
        message: formData.message || 'No additional details provided'
      };

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        loanType: '',
        loanAmount: '',
        message: ''
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const loanTypes = [
    'Gas Station Financing',
    'Hotel/Hospitality',
    'Franchise Loan',
    'Restaurant Financing',
    'Medical/Dental Office',
    'Real Estate Loan',
    'Construction Loan',
    'Equipment Financing',
    'SBA Loan',
    'Refinancing',
    'Other'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '(919) 413-2524',
      description: 'Monday - Friday, 9AM - 6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@galafinancegroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '105 Kilmayne Dr, Suite C',
      description: 'Cary, NC 27511'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '24-48 Hours',
      description: 'Fast pre-approval decisions'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2d3436] via-[#636e72] to-[#2d3436] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            animation: 'float 8s ease-in-out infinite'
          }}
        ></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-[#ff6b6b] to-[#ee5a24] rounded-full opacity-30 animate-pulse shadow-lg"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-r from-[#48dbfb] to-[#0abde3] rounded-full opacity-30 animate-bounce shadow-lg"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-[#feca57] to-[#ff9ff3] rounded-full opacity-25 animate-ping shadow-lg"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            Get Started <span className="text-blue-300">Today</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8 drop-shadow-lg">
            Ready to find the right lender for your business? Let's discuss your needs and connect you with our network.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#1f1f1f] mb-8">Start Your Application</h2>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Get in Touch</h2>
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center">
                    <AlertCircle className="h-6 w-6 text-red-600 mr-3" />
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              )}

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Application Submitted!</h3>
                  <p className="text-green-700">Thank you for your interest. We'll contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-white to-[#f8f9fa] p-8 rounded-xl shadow-2xl border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
                        <User className="inline h-4 w-4 mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007acc] focus:border-transparent transition-all duration-300 hover:border-blue-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                        <Mail className="inline h-4 w-4 mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007acc] focus:border-transparent transition-all duration-300 hover:border-blue-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-2">
                        <Phone className="inline h-4 w-4 mr-2" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007acc] focus:border-transparent transition-all duration-300 hover:border-blue-400"
                        placeholder="(xxx) xxx-xxxx"
                      />
                    </div>
                    <div>
                      <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-800 mb-2">
                        <DollarSign className="inline h-4 w-4 mr-2" />
                        Loan Amount
                      </label>
                      <select
                        id="loanAmount"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007acc] focus:border-transparent transition-all duration-300 hover:border-blue-400"
                      >
                        <option value="">Select amount range</option>
                        <option value="$100K - $500K">$100K - $500K</option>
                        <option value="$500K - $1M">$500K - $1M</option>
                        <option value="$1M - $5M">$1M - $5M</option>
                        <option value="$5M - $10M">$5M - $10M</option>
                        <option value="$10M+">$10M+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="loanType" className="block text-sm font-medium text-gray-800 mb-2">
                      <Building className="inline h-4 w-4 mr-2" />
                      Type of Loan *
                    </label>
                    <select
                      id="loanType"
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007acc] focus:border-transparent transition-all duration-300 hover:border-blue-400"
                    >
                      <option value="">Select loan type</option>
                      {loanTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">
                      <MessageSquare className="inline h-4 w-4 mr-2" />
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007acc] focus:border-transparent transition-all duration-300 hover:border-blue-400"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#007acc] to-[#005a99] text-white py-5 px-8 rounded-xl hover:from-[#005a99] hover:to-[#004080] transition-all duration-500 font-bold text-xl flex items-center justify-center group transform hover:scale-105 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    <Send className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#007acc] rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{info.title}</h3>
                        <p className="text-[#007acc] font-medium mb-1">{info.value}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Reviews */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">Recent Reviews</h3>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#feca57] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic mb-3">
                    "Response time was incredible - they called me back within 2 hours and had me connected with a lender by end of day!"
                  </p>
                  <p className="text-[#007acc] font-semibold text-sm">- Kevin Park, Gas Station Owner</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#feca57] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic mb-3">
                    "Professional, knowledgeable, and genuinely cared about our success. Best brokerage experience we've had!"
                  </p>
                  <p className="text-[#007acc] font-semibold text-sm">- Rachel Davis, Hotel Owner</p>
                </div>
              </div>
            </div>
          </div>
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

export default ContactPage;
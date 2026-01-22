import React, { useState } from 'react';
import { MessageCircle, X, Send, CheckCircle } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !name.trim() || !email.trim()) return;

    setIsSubmitting(true);

    try {
      // Send chat message via Web3Forms to gaurang@galafinancegroup.com
      const emailData = {
        access_key: '7fbdcddf-f1aa-4898-aed1-0b414139972d',
        subject: `Chat Message from ${name}`,
        from_name: 'Gala Finance Chat Widget',
        name: name,
        email: email,
        message: message
      };

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      setIsSubmitted(true);
      setMessage('');
      setName('');
      setEmail('');

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('Error sending chat message:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen ? (
          <div className="bg-white rounded-lg shadow-2xl w-80 h-96 flex flex-col border border-gray-200">
            {/* Header */}
            <div className="bg-[#007acc] text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">How can we help you secure funding today?</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 p-4 overflow-y-auto">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <CheckCircle className="h-12 w-12 text-green-600 mb-3" />
                  <p className="text-green-700 font-semibold text-center">Message sent!</p>
                  <p className="text-gray-600 text-sm text-center mt-2">We'll get back to you soon.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-[#f0f0f0] p-3 rounded-lg">
                    <p className="text-sm text-[#1f1f1f]">
                      Hello! I'm here to help you with your business financing needs. Please fill out the form below to get started.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            {!isSubmitted && (
              <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 space-y-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#007acc] text-sm"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#007acc] text-sm"
                />
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    required
                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#007acc] text-sm"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#007acc] text-white p-2 rounded hover:bg-[#005a99] transition-colors duration-200 disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#007acc] text-white p-4 rounded-full shadow-lg hover:bg-[#005a99] transition-all duration-200 hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        )}
      </div>
    </>
  );
};

export default ChatWidget;
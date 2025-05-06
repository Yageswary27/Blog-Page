import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email && email.includes('@')) {
      setLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-700 rounded-full mb-4">
          <Mail className="text-white" size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
        <p className="text-blue-100 mb-6">
          Subscribe to our newsletter to receive the latest tech news, industry insights, and company updates.
        </p>
        
        {isSubmitted ? (
          <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
            <p className="text-white font-medium">
              Thank you for subscribing! 
            </p>
            <p className="text-blue-100 text-sm mt-1">
              We've sent a confirmation email to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-blue-400 bg-white bg-opacity-10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-blue-600 font-medium py-3 px-4 rounded-md hover:bg-gray-100 transition-colors flex justify-center items-center"
              >
                {loading ? (
                  <span className="inline-block h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"></span>
                ) : null}
                Subscribe Now
              </button>
            </div>
            <p className="text-xs text-blue-100 mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
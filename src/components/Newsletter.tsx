/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from 'react';
import { Mail, Gift, Sparkles } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-400/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/3 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <div className="mb-8">
          <Sparkles className="w-12 h-12 text-yellow-500 mx-auto mb-4 animate-spin-slow" />
          <h2 className="text-4xl font-light text-white mb-4">
            Join Our <span className="text-yellow-500">Exclusive Circle</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Be the first to discover new fragrances, exclusive offers, and insider perfumery secrets
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Gift,
              title: "Exclusive Offers",
              description: "Special discounts and early access to new releases"
            },
            {
              icon: Mail,
              title: "Fragrance Tips",
              description: "Expert advice on choosing and wearing your perfect scent"
            },
            {
              icon: Sparkles,
              title: "VIP Events",
              description: "Invitations to exclusive fragrance launches and workshops"
            }
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <benefit.icon className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="text-white font-medium mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Newsletter Form */}
        <div className="max-w-md mx-auto">
          {isSubscribed ? (
            <div className="bg-green-500/20 border border-green-500/50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-green-400 font-medium mb-2">Welcome to ÉLÉGANCE!</h3>
              <p className="text-gray-400 text-sm">Check your email for a special welcome gift</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:bg-white/20 transition-all duration-300"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium rounded-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Joining...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-3 text-center">
                By subscribing, you agree to our Privacy Policy and Terms of Service
              </p>
            </form>
          )}
        </div>
      </div>

      <style >{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
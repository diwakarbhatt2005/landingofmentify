'use client'

import React from 'react';
import { ShoppingBag, ArrowRight, Sparkles, Bot, Heart } from 'lucide-react';

const Shop: React.FC = () => {
  const handleExploreShop = () => {
    // This will be manually integrated later
    alert('Redirecting to Shop page...');
  };

  const featuredProducts = [
    {
      id: 'main-bot',
      title: 'Main AI Flix Bot',
      description: 'Your comprehensive AI guide with voice, chat, image & video capabilities',
      price: 'Included in all packages',
      badge: 'FEATURED',
      icon: '🤖'
    },
    {
      id: 'business-bundle',
      title: 'Business Success Bundle',
      description: 'Business Mentor + Finance Buddy + Social Media Buddy',
      price: 'From $900/year',
      discount: '25% Bundle Savings',
      icon: '💼'
    },
    {
      id: 'wellness-bundle',
      title: 'Personal Wellness Bundle',
      description: 'Health Buddy + Relationship Buddy + Problem Solver',
      price: 'From $900/year',
      discount: '25% Bundle Savings',
      icon: '🌟'
    },
    {
      id: 'premium-package',
      title: 'Premium Complete Package',
      description: 'All 6 AI Buddies + Personal Buddy Creation Rights',
      price: '$3,800',
      badge: 'BEST VALUE',
      icon: '👑'
    }
  ];

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-blue-50/30 to-white dark:bg-gradient-to-b dark:from-neutral-900 dark:to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-8">
              <ShoppingBag className="w-4 h-4 mr-2" />
              AI Buddy Store
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Mentify AI Shop
            </h2>
            
          </div>

          {/* Featured Products - single line on md+ */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:gap-8 lg:gap-8">
              {featuredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="w-full md:flex-1 md:max-w-[33%] group relative bg-white/90 dark:bg-neutral-900 border border-slate-200/30 dark:border-neutral-800 rounded-3xl p-4 transition-all duration-300 transform hover:-translate-y-2 shadow-lg animate-slide-in-up min-h-[280px] flex flex-col"
                >
                <div className="relative w-full overflow-hidden rounded-2xl mb-4">
                  {/* Make image area full width with fixed aspect ratio and inner padding */}
                  <div className="w-full h-40 bg-transparent flex items-center justify-center transition-all duration-500 relative overflow-hidden">
                    <div className="w-full h-full overflow-hidden rounded-xl">
                      <img 
                        src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                        alt="AI Bot"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02a2bd]/20 to-transparent pointer-events-none rounded-xl"></div>
                    <Bot className="absolute bottom-3 right-3 h-6 w-6 text-white drop-shadow-lg" />
                    <button className="absolute top-3 left-3 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 mt-3">
                    {product.title}
                  </h3>

                  <div className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed mb-2 flex-grow">
                    <p className="text-sm">{product.description}</p>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-col gap-3">
                      <ul className="text-sm text-slate-600 dark:text-neutral-400 space-y-1 mb-3 list-disc list-inside">
                        {(() => {
                          const parts = (product.description || '').split(' + ').flatMap(s => s.split('.').map(p => p.trim()).filter(Boolean));
                          return parts.slice(0, 2).map((line, idx) => (
                            <li key={idx}>{line}</li>
                          ));
                        })()}
                      </ul>
                      <p className="text-sm text-slate-500 dark:text-neutral-400">Learn more about this product or contact us for full details.</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-neutral-900 dark:to-black border border-slate-200 dark:border-neutral-800 rounded-3xl p-12 max-w-4xl mx-auto">
              <div className="mb-8">
                <Sparkles className="w-16 h-16 text-cyan-500 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Ready to Start Your AI Journey?
                </h3>
                <p className="text-slate-600 dark:text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
                  Explore our complete collection of AI Buddies, bundles, and packages. 
                  Find the perfect AI companion for your needs and start transforming your life today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={handleExploreShop}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center"
                >
                  Explore Shop
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 text-slate-900 dark:text-white rounded-full hover:bg-slate-50 dark:hover:bg-neutral-700 transition-all duration-300 font-semibold text-lg">
                  View Pricing Plans
                </button>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-slate-600 dark:text-neutral-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Individual Buddies from $300</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-slate-600 dark:text-neutral-400">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Bundle Packages Available</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-slate-600 dark:text-neutral-400">
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  <span className="text-sm">Premium Package $3,800</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
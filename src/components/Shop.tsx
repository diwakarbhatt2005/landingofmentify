import React from 'react';
import { ShoppingBag, ArrowRight, Sparkles, Star, Zap } from 'lucide-react';

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
              Transform Your Life with <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Buddies</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Choose from individual AI Buddies or complete packages designed to revolutionize your personal and professional growth
            </p>
          </div>

          {/* Featured Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                className="group relative bg-white/90 dark:bg-neutral-900 border border-slate-200/50 dark:border-neutral-800 rounded-3xl p-6 hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 shadow-lg shadow-blue-500/5 animate-slide-in-up"
              >
                {product.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className={`px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                      product.badge === 'FEATURED' 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-cyan-500/25' 
                        : 'bg-gradient-to-r from-violet-500 to-purple-600 shadow-violet-500/25'
                    }`}>
                      <Star className="w-3 h-3 inline mr-1" />
                      {product.badge}
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <div className={`w-16 h-16 ${
                    product.badge 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25' 
                      : 'bg-gradient-to-r from-slate-600 to-slate-700'
                  } rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {product.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>

                  <div className="space-y-3">
                    <div className="text-center">
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                        product.badge
                          ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400'
                          : 'bg-slate-100 dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 text-slate-700 dark:text-neutral-300'
                      }`}>
                        {product.badge && <Zap className="w-4 h-4 mr-1" />}
                        {product.price}
                      </div>
                    </div>

                    {product.discount && (
                      <div className="text-center">
                        <span className="inline-block bg-green-500/20 border border-green-500/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                          {product.discount}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
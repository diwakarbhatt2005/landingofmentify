'use client'

import React from 'react';
import { ExternalLink, Star, Zap } from 'lucide-react';
import { aiBuddies } from '../data/content';

const ProductList: React.FC = () => {
  const handleKnowMore = (productId: string, isMainBot?: boolean) => {
    // This would navigate to shop page with product filter
    // For now, we'll just show an alert
    if (isMainBot) {
      alert(`Redirecting to shop for ${productId}...`);
    } else {
      alert(`Redirecting to shop for ${productId}...`);
    }
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-blue-50/30 dark:bg-gradient-to-b dark:from-black dark:to-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Meet Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Buddies</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Six powerful AI companions and the Main AI Flix Bot, each designed for real human needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiBuddies.map((buddy) => (
              <div 
                key={buddy.id}
                className={`group relative bg-white/90 dark:bg-neutral-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-neutral-700/50 rounded-3xl p-8 hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-all duration-300 transform hover:-translate-y-2 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-cyan-500/10 animate-slide-in-right ${
                  buddy.isMainBot ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {buddy.isMainBot && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center shadow-lg shadow-cyan-500/25">
                      <Star className="w-4 h-4 mr-1" />
                      FEATURED
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-20 h-20 ${
                    buddy.isMainBot 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25' 
                      : 'bg-gradient-to-r from-slate-700 to-slate-600'
                  } rounded-2xl flex items-center justify-center mx-auto mb-4 text-4xl group-hover:scale-110 transition-transform duration-300`}>
                    {buddy.image}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {buddy.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {buddy.description.compact}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                      buddy.isMainBot
                        ? 'bg-cyan-500/30 dark:bg-cyan-500/20 border border-cyan-500/50 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400'
                        : 'bg-slate-200 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600/50 text-slate-700 dark:text-slate-300'
                    }`}>
                      {buddy.isMainBot && <Zap className="w-4 h-4 mr-1" />}
                      {buddy.price}
                    </div>
                  </div>

                  {buddy.discount && (
                    <div className="text-center">
                      <span className="inline-block bg-green-500/30 dark:bg-green-500/20 border border-green-500/50 dark:border-green-500/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                        {buddy.discount}
                      </span>
                    </div>
                  )}

                  <div className="text-center pt-4">
                    <button 
                      onClick={() => handleKnowMore(buddy.id, buddy.isMainBot)}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-200 font-medium w-full justify-center"
                    >
                      Know More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to Transform Your AI Journey?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Choose individual AI Buddies starting at $300/year, or get the complete experience 
                with our Premium Package at $3,800 including Personal Buddy creation rights.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-200 font-semibold text-lg">
                View All Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
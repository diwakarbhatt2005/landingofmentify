import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { businessOpportunities } from '../data/content';

const BusinessOpportunity: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="business" className="py-20 bg-gradient-to-b from-blue-50/50 to-white dark:bg-gradient-to-b dark:from-neutral-900 dark:to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Your Path to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Success</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Discover how you can thrive with Mentify-AI through three distinct opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {businessOpportunities.map((opportunity) => (
              <div 
                key={opportunity.id}
                className={`group bg-white/90 dark:bg-neutral-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-neutral-700/50 rounded-3xl p-8 hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-all duration-300 transform hover:-translate-y-2 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-cyan-500/10 animate-slide-in-left ${
                  expandedCard === opportunity.id ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {opportunity.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {opportunity.description.compact}
                  </p>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedCard === opportunity.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-6 border-t border-slate-300 dark:border-slate-700">
                    <div className="text-left text-slate-700 dark:text-slate-300 space-y-3 text-sm leading-relaxed whitespace-pre-line">
                      {opportunity.description.full}
                    </div>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <button 
                    onClick={() => toggleCard(opportunity.id)}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-200 font-medium"
                  >
                    {expandedCard === opportunity.id ? 'Show Less' : 'Know More'}
                    {expandedCard === opportunity.id ? (
                      <ChevronUp className="w-5 h-5 ml-2" />
                    ) : (
                      <ChevronDown className="w-5 h-5 ml-2" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOpportunity;
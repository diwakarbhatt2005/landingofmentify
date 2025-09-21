import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Building2, Users, Globe } from 'lucide-react';

const AboutUs: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50/50 dark:bg-gradient-to-b dark:from-black dark:to-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Flix</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              The Power Behind Mentify-AI
            </p>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 lg:p-12">
          <div className="bg-white/90 dark:bg-neutral-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-neutral-700/50 rounded-3xl p-8 lg:p-12 shadow-xl shadow-blue-500/5 animate-slide-in-left">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 dark:from-cyan-500/20 to-blue-500/20 dark:to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 dark:border-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Expert Foundation</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Founded by MLM and legal experts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 dark:from-blue-500/20 to-violet-500/20 dark:to-violet-500/20 backdrop-blur-sm border border-blue-500/30 dark:border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AI Empowerment</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Building careers through AI sharing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500/20 dark:from-violet-500/20 to-purple-500/20 dark:to-purple-500/20 backdrop-blur-sm border border-violet-500/30 dark:border-violet-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-violet-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Global Reach</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">USDT transactions worldwide</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                AI Flix, founded by MLM and legal experts, leverages AI to empower individuals. Our mission: 
                enable careers in AI by sharing specialized AI buddies, with all global transactions in USDT.
              </p>

              <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-6 border-t border-slate-300 dark:border-slate-700">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission & Vision</h3>
                  <div className="text-left space-y-4 text-slate-700 dark:text-slate-300">
                    <p>
                      Mentify-AI is a Global Social Commerce Company with a mission to transform the way people see 
                      Artificial Intelligence. At a time when AI is feared for "taking jobs," Mentify-AI flips the 
                      narrative — by empowering people to build stable, long-term careers in AI simply by sharing 
                      our revolutionary AI Buddys'.
                    </p>
                    
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-3">What Makes Us Different</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Unlike generic chatbots, Mentify AI Buddys' are deeply personal, aligned with your date, time, and place of birth</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Each AI Buddy feels like your truest AI companion — always relevant, always connected to you</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Advanced RAG technology ensures conversations stay current and meaningful</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Global platform with secure USDT transactions for worldwide accessibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-200 font-medium mt-6"
              >
                {isExpanded ? 'Show Less' : 'Know More'}
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 ml-2" />
                ) : (
                  <ChevronDown className="w-5 h-5 ml-2" />
                )}
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import React from 'react';
import { NavLink } from '../types';

interface HeroProps {
  onApply: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApply }) => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* Admissions Open Banner */}
          <div className="pt-10 sm:pt-16 lg:pt-20">
            <div className="inline-flex items-center rounded-full p-1 pr-4 bg-blue-50 text-blue-700 border border-blue-100 mb-8 animate-bounce-subtle">
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider mr-3">
                New
              </span>
              <span className="text-sm font-semibold">Admissions Open 2024-25</span>
            </div>
            
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Empower Your Future at</span>{' '}
                  <span className="block text-blue-600 xl:inline">EduStream University</span>
                </h1>
                <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Ignite your passion, gain world-class knowledge, and build a career that matters. Join a community of innovators and leaders.
                </p>
                <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      onClick={onApply}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all hover:scale-105"
                    >
                      Apply Now
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-slate-200 text-base font-bold rounded-full text-blue-600 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10 transition-all">
                      View Courses
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200"
          alt="University Campus"
        />
      </div>
      
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Hero;

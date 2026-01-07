
import React, { useState } from 'react';
import { NavLink } from '../types';

interface NavbarProps {
  activeTab: NavLink;
  setActiveTab: (tab: NavLink) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: NavLink.Home, label: 'Home' },
    { id: NavLink.Courses, label: 'Courses' },
    { id: NavLink.Admission, label: 'Admission' },
    { id: NavLink.About, label: 'About' },
    { id: NavLink.Contact, label: 'Contact' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer" 
              onClick={() => setActiveTab(NavLink.Home)}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <i className="fas fa-graduation-cap text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                EduStream
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  activeTab === item.id 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-slate-600 hover:text-blue-500'
                } py-2`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setActiveTab(NavLink.Admission)}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
            >
              Apply Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-base font-medium ${
                  activeTab === item.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 py-3">
              <button 
                onClick={() => {
                  setActiveTab(NavLink.Admission);
                  setIsOpen(false);
                }}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-center font-bold hover:bg-blue-700"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

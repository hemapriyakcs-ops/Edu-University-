
import React from 'react';
import { COLLEGE_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <i className="fas fa-graduation-cap text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-white">EduStream</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Providing excellence in education since 1995. We nurture the next generation of global leaders with innovative learning and research.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Our Courses</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Admission 2024</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Alumni Network</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Campus Life</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Help & Support</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">FAQ's</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Scholarship Terms</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-500"></i>
                <span>{COLLEGE_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-blue-500"></i>
                <span>{COLLEGE_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-blue-500"></i>
                <span>{COLLEGE_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COLLEGE_INFO.name}. All Rights Reserved. Crafted with <i className="fas fa-heart text-red-500 mx-1"></i> for Education.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

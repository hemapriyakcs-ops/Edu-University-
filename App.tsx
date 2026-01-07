
import React, { useState } from 'react';
import { NavLink } from './types';
import { COURSES, COLLEGE_INFO } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import AdmissionForm from './components/AdmissionForm';
import Footer from './components/Footer';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavLink>(NavLink.Home);

  const renderContent = () => {
    switch (activeTab) {
      case NavLink.Home:
        return (
          <>
            <Hero onApply={() => setActiveTab(NavLink.Admission)} />
            
            {/* Stats Section */}
            <div className="bg-blue-900 py-16">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">25+</div>
                  <div className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">15k+</div>
                  <div className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">150+</div>
                  <div className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Expert Faculties</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">95%</div>
                  <div className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Placement Rate</div>
                </div>
              </div>
            </div>

            {/* Featured Courses Preview */}
            <section className="py-20 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">Our Top Programs</h2>
                  <p className="text-xl text-slate-500 max-w-2xl mx-auto">Choose from a variety of future-ready courses designed for the modern industry.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {COURSES.slice(0, 3).map(course => (
                    <CourseCard 
                      key={course.id} 
                      course={course} 
                      onApply={() => setActiveTab(NavLink.Admission)} 
                    />
                  ))}
                </div>
                <div className="mt-12 text-center">
                  <button 
                    onClick={() => setActiveTab(NavLink.Courses)}
                    className="text-blue-600 font-bold hover:text-blue-700 inline-flex items-center transition-all group"
                  >
                    View All Courses 
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            </section>
          </>
        );

      case NavLink.Courses:
        return (
          <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Available Courses</h1>
              <p className="text-slate-500 max-w-2xl mx-auto">Detailed list of our academic offerings for the session 2024-25.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COURSES.map(course => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  onApply={() => setActiveTab(NavLink.Admission)} 
                />
              ))}
            </div>
          </section>
        );

      case NavLink.Admission:
        return (
          <section className="py-16 px-4 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto">
              <AdmissionForm />
            </div>
          </section>
        );

      case NavLink.About:
        return (
          <div className="bg-white">
            {/* Overview */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1000" 
                    className="rounded-3xl shadow-2xl" 
                    alt="University"
                  />
                </div>
                <div className="lg:w-1/2">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">About Us</span>
                  <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Nurturing Excellence Since 1995</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {COLLEGE_INFO.name} is dedicated to providing quality higher education that prepares students for the challenges of the 21st century. Our campus is a melting pot of cultures, ideas, and aspirations.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-xl mr-4 text-blue-600">
                        <i className="fas fa-eye text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Our Vision</h4>
                        <p className="text-sm text-slate-500">{COLLEGE_INFO.vision}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-xl mr-4 text-blue-600">
                        <i className="fas fa-bullseye text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Our Mission</h4>
                        <p className="text-sm text-slate-500">{COLLEGE_INFO.mission}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Facilities */}
            <section className="bg-slate-50 py-20 px-4">
              <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-12">World-Class Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {COLLEGE_INFO.facilities.map((facility, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600">
                        <i className={`fas fa-${['desktop', 'microscope', 'book-open', 'volleyball-ball', 'wifi', 'first-aid'][idx % 6]}`}></i>
                      </div>
                      <span className="font-semibold text-slate-800">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );

      case NavLink.Contact:
        return (
          <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
              <p className="text-slate-500">Have questions? We're here to help you every step of the way.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Our Campus</h4>
                  <p className="text-slate-500 text-sm">{COLLEGE_INFO.address}</p>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                    <i className="fas fa-phone-alt text-xl"></i>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Call Us</h4>
                  <p className="text-slate-500 text-sm">{COLLEGE_INFO.phone}</p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Email Support</h4>
                  <p className="text-slate-500 text-sm">{COLLEGE_INFO.email}</p>
                </div>
              </div>

              <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-lg h-[600px] border-4 border-white">
                {/* Embedded Google Maps Placeholder */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1682412345678!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
      <Assistant />
    </div>
  );
};

export default App;

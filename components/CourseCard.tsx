
import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onApply: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onApply }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest shadow-lg">
            {course.code}
          </span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {course.name}
        </h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="space-y-3 mb-6 flex-grow">
          <div className="flex items-center text-sm text-slate-700 bg-slate-50 p-2 rounded-lg">
            <i className="far fa-clock text-blue-500 mr-2 w-5"></i>
            <span className="font-medium">{course.duration}</span>
          </div>
          <div className="flex items-start text-sm text-slate-700 bg-slate-50 p-2 rounded-lg">
            <i className="fas fa-check-circle text-green-500 mt-0.5 mr-2 w-5"></i>
            <span className="font-medium">Eligible: <span className="text-slate-500 font-normal">{course.eligibility}</span></span>
          </div>
        </div>
        
        <button 
          onClick={onApply}
          className="w-full py-3 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;

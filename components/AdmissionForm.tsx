
import React, { useState } from 'react';
import { AdmissionFormData } from '../types';
import { COURSES } from '../constants';

const AdmissionForm: React.FC = () => {
  const [formData, setFormData] = useState<AdmissionFormData>({
    fullName: '',
    dob: '',
    gender: '',
    email: '',
    mobile: '',
    address: '',
    course: '',
    photo: null,
    certificates: null
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AdmissionFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof AdmissionFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender selection is required';
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = 'Valid email is required';
    if (!formData.mobile.match(/^\d{10,15}$/)) newErrors.mobile = 'Valid phone number is required (10+ digits)';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.course) newErrors.course = 'Please select a course';
    if (!formData.photo) newErrors.photo = 'Profile photo is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        alert(`Admission Application Submitted Successfully!\n\nCandidate: ${formData.fullName}\nCourse: ${formData.course}\n\nOur admission team will contact you shortly.`);
        setFormData({
          fullName: '',
          dob: '',
          gender: '',
          email: '',
          mobile: '',
          address: '',
          course: '',
          photo: null,
          certificates: null
        });
        setErrors({});
        setIsSubmitting(false);
      }, 1500);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'photo' | 'certificates') => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, [field]: e.target.files![0] }));
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const inputClasses = (error?: string) => `
    w-full px-4 py-3 rounded-xl border-2 transition-all outline-none
    ${error ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-slate-100 bg-slate-50 focus:border-blue-500 focus:bg-white'}
  `;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Student Admission Form</h2>
        <p className="text-slate-500">Fill in the details below to start your academic journey with us.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className={inputClasses(errors.fullName)}
              value={formData.fullName}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.fullName}</p>}
          </div>

          {/* DOB */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">Date of Birth</label>
            <input
              type="date"
              className={inputClasses(errors.dob)}
              value={formData.dob}
              onChange={e => setFormData({ ...formData, dob: e.target.value })}
            />
            {errors.dob && <p className="text-red-500 text-xs mt-1 ml-1">{errors.dob}</p>}
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">Gender</label>
            <select
              className={inputClasses(errors.gender)}
              value={formData.gender}
              onChange={e => setFormData({ ...formData, gender: e.target.value as any })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-xs mt-1 ml-1">{errors.gender}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">Email ID</label>
            <input
              type="email"
              placeholder="john@example.com"
              className={inputClasses(errors.email)}
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
          </div>

          {/* Mobile */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">Mobile Number</label>
            <input
              type="tel"
              placeholder="+1 234 567 8900"
              className={inputClasses(errors.mobile)}
              value={formData.mobile}
              onChange={e => setFormData({ ...formData, mobile: e.target.value })}
            />
            {errors.mobile && <p className="text-red-500 text-xs mt-1 ml-1">{errors.mobile}</p>}
          </div>

          {/* Course Selection */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">Course Selection</label>
            <select
              className={inputClasses(errors.course)}
              value={formData.course}
              onChange={e => setFormData({ ...formData, course: e.target.value })}
            >
              <option value="">Select a Course</option>
              {COURSES.map(course => (
                <option key={course.id} value={course.name}>{course.name} ({course.code})</option>
              ))}
            </select>
            {errors.course && <p className="text-red-500 text-xs mt-1 ml-1">{errors.course}</p>}
          </div>
        </div>

        {/* Address */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 ml-1">Residential Address</label>
          <textarea
            rows={3}
            placeholder="House No, Street, City, State, Zip"
            className={inputClasses(errors.address)}
            value={formData.address}
            onChange={e => setFormData({ ...formData, address: e.target.value })}
          />
          {errors.address && <p className="text-red-500 text-xs mt-1 ml-1">{errors.address}</p>}
        </div>

        {/* File Uploads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">Upload Photo (Passport Size)</label>
            <div className={`relative border-2 border-dashed rounded-xl p-4 transition-all ${errors.photo ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50'}`}>
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={e => handleFileChange(e, 'photo')}
              />
              <div className="flex items-center space-x-3 pointer-events-none">
                <i className="fas fa-image text-slate-400 text-xl"></i>
                <span className="text-sm text-slate-600 truncate">
                  {formData.photo ? formData.photo.name : 'Click to select photo'}
                </span>
              </div>
            </div>
            {errors.photo && <p className="text-red-500 text-xs mt-1 ml-1">{errors.photo}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">Upload Certificates (ZIP/PDF)</label>
            <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-4 bg-slate-50">
              <input
                type="file"
                accept=".pdf,.zip,.rar"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={e => handleFileChange(e, 'certificates')}
              />
              <div className="flex items-center space-x-3 pointer-events-none">
                <i className="fas fa-file-archive text-slate-400 text-xl"></i>
                <span className="text-sm text-slate-600 truncate">
                  {formData.certificates ? formData.certificates.name : 'Click to select certificates'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl text-lg font-bold text-white transition-all shadow-lg active:scale-95 flex items-center justify-center space-x-3 
            ${isSubmitting ? 'bg-slate-400' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200'}`}
        >
          {isSubmitting ? (
            <>
              <i className="fas fa-circle-notch animate-spin"></i>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane"></i>
              <span>Submit Application</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;


import React from 'react';
import { Course } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    name: 'Bachelor of Computer Applications',
    code: 'BCA',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 with Mathematics/Computer Science (Min 50%)',
    description: 'Designed to build a strong foundation in computer science and software development.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Bachelor of Science (IT)',
    code: 'BSc',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 with Science Stream (Min 50%)',
    description: 'Focuses on the technical aspects of information technology and network systems.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Bachelor of Arts',
    code: 'BA',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 from any recognized board (Min 45%)',
    description: 'Explore human culture, history, and social sciences with a flexible curriculum.',
    image: 'https://images.unsplash.com/photo-1491843351663-8c4362820a4c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Bachelor of Commerce',
    code: 'BCom',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 with Commerce/Mathematics (Min 50%)',
    description: 'Gain expertise in finance, accounting, and business management.',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Master of Computer Applications',
    code: 'MCA',
    duration: '2 Years (4 Semesters)',
    eligibility: 'BCA/BSc in CS or Graduation with Maths at 10+2 level',
    description: 'Advanced studies in application development and software engineering.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  }
];

export const COLLEGE_INFO = {
  name: 'EduStream University',
  address: '123 Academic Drive, Knowledge Park, NY 10001',
  phone: '+1 (555) 012-3456',
  email: 'admissions@edustream.edu',
  vision: 'To be a global leader in transformative education and innovative research.',
  mission: 'Empowering students with practical knowledge, ethical values, and leadership skills to thrive in a dynamic global environment.',
  facilities: [
    'Smart Classrooms with Interactive Displays',
    'Advanced Computing & Research Labs',
    'Central Library with 100,000+ Digital Resources',
    'Modern Sports Complex & Olympic-size Pool',
    'High-speed Campus-wide Wi-Fi',
    'On-campus Medical Center & Counseling'
  ]
};

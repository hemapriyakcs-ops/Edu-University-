
export interface Course {
  id: string;
  name: string;
  code: string;
  duration: string;
  eligibility: string;
  description: string;
  image: string;
}

export interface AdmissionFormData {
  fullName: string;
  dob: string;
  gender: 'male' | 'female' | 'other' | '';
  email: string;
  mobile: string;
  address: string;
  course: string;
  photo: File | null;
  certificates: File | null;
}

export enum NavLink {
  Home = 'home',
  Courses = 'courses',
  Admission = 'admission',
  About = 'about',
  Contact = 'contact'
}

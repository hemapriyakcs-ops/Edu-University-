
import { GoogleGenAI } from "@google/genai";
import { COLLEGE_INFO, COURSES } from "../constants";

const getSystemInstruction = () => {
  const coursesStr = COURSES.map(c => `${c.name} (${c.code}): ${c.duration}, Eligibility: ${c.eligibility}`).join('\n');
  return `You are the EduStream University Admissions Assistant. 
    College Name: ${COLLEGE_INFO.name}
    Address: ${COLLEGE_INFO.address}
    Email: ${COLLEGE_INFO.email}
    Available Courses:
    ${coursesStr}
    
    Answer user queries politely and concisely. If you don't know something specific, advise them to contact the admission office at ${COLLEGE_INFO.email}.
    Stay focused on admission, courses, and college details.`;
};

export const chatWithAssistant = async (message: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: message,
    config: {
      systemInstruction: getSystemInstruction(),
      temperature: 0.7,
      maxOutputTokens: 300,
    },
  });
  return response.text;
};

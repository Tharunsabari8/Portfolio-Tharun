import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Timeline() {
  const education = [
    {
      year: '2022 - Present',
      degree: 'B.E. Computer Science (Cybersecurity)',
      institution: 'Sri Krishna College of Engineering and Technology',
      description: 'Currently pursuing Under graduate Program in Computer Science with specialization in Cybersecurity which focuses on network security and ethical hacking.',
    },
    {
      year: '2008 - 2022',
      degree: 'Kinder Garden to Higher Secondary Education',
      institution: 'Mahatma Montessori School - CBSE',
    },
  ];

  return (
    <section id="timeline" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Academic Timeline</h2>
      <div className="max-w-3xl mx-auto">
        {education.map((item, index) => (
          <div key={index} className="relative pl-8 pb-8 fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200" />
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gray-900 border-4 border-white timeline-dot" />
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-102">
              <div className="flex items-center space-x-2 mb-2">
                <GraduationCap className="w-5 h-5 text-gray-900" />
                <span className="text-sm font-medium text-gray-500">{item.year}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
              <div className="text-gray-600 mb-2">{item.institution}</div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
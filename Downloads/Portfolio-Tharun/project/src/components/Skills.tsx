import React from 'react';

export function Skills() {
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'C++', level: 85 },
    { name: 'React JS', level: 88 },
    { name: 'MySQL', level: 75 },
    { name: 'HTML/CSS', level: 92 },
    { name: 'JavaScript', level: 85 },
    { name: 'DSA', level: 80 },
    { name: 'AWS', level: 65 },
    { name: 'Spring Boot', level: 70 },
    { name: 'Cybersecurity', level: 75 },
    { name: 'Selenium', level: 60 },
  ];

  return (
    <section id="skills" className="py-16 gradient-bg">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text font-serif">Skills & Expertise</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium font-sans">{skill.name}</span>
              <span className="text-gray-600 font-sans">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full skill-bar rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
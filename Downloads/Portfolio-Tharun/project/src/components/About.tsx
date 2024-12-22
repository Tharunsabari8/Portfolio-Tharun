import React from 'react';
import { Code, Shield, Brain, Cloud, TestTube } from 'lucide-react';

export function About() {
  const specialties = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Developer',
      description: 'Focusing majorly on Front End development with expertise in modern web technologies.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity Student',
      description: 'Proficient in Security Vulnerabilities, best practices and cybersecurity laws.',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning Enthusiast',
      description: 'Developing fine-tuned models and image processing solutions.',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Computing Enthusiast',
      description: 'Experience in managing AWS cloud resources and infrastructure.',
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: 'Software Tester',
      description: 'Proficient in testing functionalities using Selenium automation.',
    },
  ];

  return (
    <section id="about" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
      Proficient in programming languages such as <b>Java, Python, and C++</b>, with hands-on experience in <b>web development, cloud computing, and data security</b>. 
        Adept at <b>problem-solving, teamwork, and strategic planning</b>, with a proven ability to drive innovative projects and promote awareness in emerging technologies.
        <br/>
        <br/>
        Skilled in leveraging frameworks like <b>React, Spring Boot, and MongoDB for application development</b>, along with practical knowledge of <b>Ethical hacking, Security Vulnerabiities, Mitigation Strategies, Risk Assessment and Machine Learning</b>.
        Recognized for exceptional leadership in organizing hackathons, workshops, and cybersecurity challenges. Strong communicator, capable of presenting technical topics to both technical and non-technical audiences.
        Always eager to learn, apply new skills, and contribute to team success in dynamic, fast-paced environments.
        <br/>
        <div className="flex flex-wrap justify-center mt-16"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialties.map((specialty, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-sm hover-gradient transition-all duration-300"
          >
            <div className="text-gray-900 mb-4">{specialty.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{specialty.title}</h3>
            <p className="text-gray-600">{specialty.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
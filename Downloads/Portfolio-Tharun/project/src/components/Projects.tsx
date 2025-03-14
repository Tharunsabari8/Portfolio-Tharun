import React, { useState } from 'react';
import { Github, X } from 'lucide-react';
import Estatehub from '../Images/EstateHub.png';
import Estatehub1 from '../Images/EstateHub1.png';
import Estatehub2 from '../Images/EstateHub2.png';
import Estatehub3 from '../Images/EstateHub3.png';
import Estatehub4 from '../Images/EstateHub4.png';
import Estatehub5 from '../Images/EstateHub5.png';
import Estatehub6 from '../Images/EstateHub6.png';
import Estatehub7 from '../Images/EstateHub7.png';
import Estatehub8 from '../Images/EstateHub8.png';
import Estatehub9 from '../Images/EstateHub9.png';
import Estatehub10 from '../Images/EstateHub10.png';
import Estatehub11 from '../Images/EstateHub11.png';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Police Performance and Resource Management',
      image: 'https://images.unsplash.com/photo-1557778989-b6e05136c91b?auto=format&fit=crop&q=80&w=800',
      additionalImages: [
        'https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1454117096348-e4abbeba002c?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
      ],
      description: 'An analytical dashboard to monitor police performance and manage resources efficiently.',
      techStack: ['React', 'PHP', 'MySQL'],
      sourceCode: 'https://github.com/KasthuriKrishna/Police_Management_Dashboard.git',
    },
    {
      title: 'PII Detector and Masker',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
      additionalImages: [
        'https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
      ],
      description: 'A software that detects PII in a document, alerts the user, and helps secure it.',
      techStack: ['React', 'Python Flask', 'OpenSSL', 'YARA', 'OpenCV'],
      sourceCode: 'https://github.com/KasthuriKrishna/PII_Detection_and_Maksing.git',
    },
    {
      title: 'AI-Driven Boolean Query Generator for Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      additionalImages: [
        'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1581093458791-4b41ce2c3f07?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=800'
      ],
      description: 'A smart tool that formulates precise Boolean queries for medical research and diagnostics.',
      techStack: ['React', 'Python Flask', 'NLP', 'MongoDB', 'Gemini AI'],
      sourceCode: 'https://github.com/Sivaraman-Ravichandran/Tech-Disruptors-Boolean-query-search',
    },
    {
      title: 'Estate Hub - Real Estate Management',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
      additionalImages: [Estatehub, Estatehub1, Estatehub3, Estatehub2, Estatehub11, Estatehub8, Estatehub9, Estatehub4, Estatehub5, Estatehub6, Estatehub7, Estatehub10],
      description: 'An application with document verification, fraud prevention, and real-time communication features.',
      techStack: ['React', 'CSS', 'Java SpringBoot', 'MySQL', 'Rest API'],
      sourceCode: 'https://github.com/Tharunsabari8/estatehub-full-stack',
    },
    {
      title: 'Gym Fitness Application',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
      additionalImages: [
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800'
      ],
      description: 'A gym app with workout tracking, personalized plans, progress monitoring, and diet recommendations.',
      techStack: ['React', 'CSS', 'Java SpringBoot', 'MySQL', 'Rest API'],
      sourceCode: 'https://github.com/Tharunsabari8/Gym-fitness-App',
    }
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.title} 
            className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md relative group"
          >
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-black transition-all duration-500 rounded-xl pointer-events-none"></div>
            <div className="h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-center flex items-center justify-center space-x-2"
                >
                  <Github className="w-5 h-5" />
                  <span>Source Code</span>
                </a>
                <button 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center"
                  onClick={() => setSelectedProject(project)}
                >
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying project images */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4" 
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative bg-white p-6 rounded-lg max-w-7xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded-full hover:bg-gray-700 transition-colors z-10"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title} Gallery</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {selectedProject.additionalImages.map((img, index) => (
                <div key={index} className="aspect-video overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={img} 
                    alt={`${selectedProject.title} ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
import React, { useState } from 'react';
import { Github, X } from 'lucide-react';
import Estatehub from './images/EstateHub.png';
import Estatehub1 from './images/EstateHub1.png';
import Estatehub2 from './images/EstateHub2.png';
import Estatehub3 from './images/EstateHub3.png';
import Estatehub4 from './images/EstateHub4.png';
import Estatehub5 from './images/EstateHub5.png';
import Estatehub6 from './images/EstateHub6.png';
import Estatehub7 from './images/EstateHub7.png';
import Estatehub8 from './images/EstateHub8.png';
import Estatehub9 from './images/EstateHub9.png';
import Estatehub10 from './images/EstateHub10.png';
import Estatehub11 from './images/EstateHub11.png';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Police Performance and Resource Management',
      image: 'https://kasthurikrishna.github.io/KasthuriPortfolio/assets/pprm-94377278.png',
      description: 'An analytical dashboard to monitor police performance and manage resources efficiently.',
      techStack: ['React', 'PHP', 'MySQL'],
      sourceCode: 'https://github.com/KasthuriKrishna/Police_Management_Dashboard.git',
    },
    {
      title: 'PII Detector and Masker',
      image: '',
      description: 'A software that detects PII in a document, alerts the user, and helps secure it.',
      techStack: ['React', 'Python Flask', 'OpenSSL', 'YARA', 'OpenCV'],
      sourceCode: 'https://github.com/KasthuriKrishna/PII_Detection_and_Maksing.git',
    },
    {
      title: 'AI-Driven Boolean Query Generator for Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
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
          <div key={project.title} className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
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
                {project.additionalImages && (
                  <button 
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Gallery
                  </button>
                )}
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
            className="relative bg-white p-6 rounded-lg max-w-6xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded-full hover:bg-gray-700 transition-colors z-10"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title} Gallery</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 120px)' }}>
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
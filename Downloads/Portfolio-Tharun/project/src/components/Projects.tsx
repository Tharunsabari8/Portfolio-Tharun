import React from 'react';
import { Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'PII Detection and Masking',
      image: 'https://kasthurikrishna.github.io/KasthuriPortfolio/assets/pprm-94377278.png',
      description: 'An analytical dashboard to monitor police performance and manage resources efficiently.',
      techStack: ['React', 'PHP', 'MySQL'],
      sourceCode: 'https://github.com/yourusername/police-dashboard',
    },
    {
      title: 'Police Performance and Resource Management',
      image: 'https://kasthurikrishna.github.io/KasthuriPortfolio/assets/pprm-94377278.png',
      description: 'An analytical dashboard to monitor police performance and manage resources efficiently.',
      techStack: ['React', 'PHP', 'MySQL'],
      sourceCode: 'https://github.com/KasthuriKrishna/PPRM_dashboard',
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
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
              <div className="flex justify-center pt-4">
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-center flex items-center justify-center space-x-2"
                >
                  <Github className="w-5 h-5" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
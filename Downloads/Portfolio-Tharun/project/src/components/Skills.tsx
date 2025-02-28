import React from 'react';
import { 
  Code, Database, Globe, Server, Shield, 
  Coffee, BrainCircuit, Cloud, Workflow, 
  TestTube, Terminal, Bug, Network, FlaskRound, 
  Link, FileCode, Cpu, Blocks
} from 'lucide-react';

export function Skills() {
  const skillIcons = [
    { name: 'Java', icon: <Coffee className="w-12 h-12" /> },
    { name: 'C++', icon: <FileCode className="w-12 h-12" /> },
    { name: 'React JS', icon: <Globe className="w-12 h-12" /> },
    { name: 'MySQL', icon: <Database className="w-12 h-12" /> },
    { name: 'HTML/CSS', icon: <Code className="w-12 h-12" /> },
    { name: 'JavaScript', icon: <Blocks className="w-12 h-12" /> },
    { name: 'BurpSuite', icon: <Bug className="w-12 h-12" /> },
    { name: 'Wireshark', icon: <Network className="w-12 h-12" /> },
    { name: 'AWS', icon: <Cloud className="w-12 h-12" /> },
    { name: 'Spring Boot', icon: <Workflow className="w-12 h-12" /> },
    { name: 'Selenium', icon: <TestTube className="w-12 h-12" /> },
    { name: 'Flask', icon: <FlaskRound className="w-12 h-12" /> },
    { name: 'Linux', icon: <Terminal className="w-12 h-12" /> },
    { name: 'YARA', icon: <Shield className="w-12 h-12" /> },
    { name: 'Networking', icon: <Link className="w-12 h-12" /> },
  ];

  return (
    <section id="skills" className="py-16 gradient-bg">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text font-serif">Skills & Expertise</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
        {skillIcons.map((skill) => (
          <div 
            key={skill.name} 
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="text-gray-800 mb-3">{skill.icon}</div>
            <span className="font-medium text-center text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
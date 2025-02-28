import React from 'react';
import { FileText, ArrowDown } from 'lucide-react';
import photo from './images/Passport size photo - college (1).jpg';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center gradient-bg">
      <div className="text-center space-y-8">
        <div className="mb-8 profile-image">
          <img
            src={photo}
            alt="Sketch Portrait"
            className="w-48 h-48 mx-auto rounded-full border-4 border-gray-900 shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text font-serif">
            Hi, I'm Tharunsabari P
          </h1>
        </div>
        <div className="fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-sans">
            A passionate Full Stack Developer and Cybersecurity enthusiast, combining technical expertise 
            with a deep understanding of security principles to create robust and secure applications.
          </p>
        </div>
        <div className="fade-in flex items-center justify-center space-x-4" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={scrollToContact}
            className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg hover:from-gray-800 hover:to-gray-600 transition-all duration-300 font-sans transform hover:scale-105"
          >
            Contact Me
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 font-sans transform hover:scale-105"
          >
            <FileText className="w-5 h-5" />
            <span>Resume</span>
          </a>
        </div>
        <div className="animate-bounce fade-in" style={{ animationDelay: '0.8s' }}>
          <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold gradient-text">Tharunsabari P</h1>
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Timeline', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-600 hover:text-gray-900 relative group transition-colors"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
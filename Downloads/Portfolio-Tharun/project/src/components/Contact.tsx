import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'tharunsabari8@gmail.com',
      href: 'mailto:tharunsabari8@gmail.com',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/Tharunsabari P',
      href: 'https://www.linkedin.com/in/tharunsabari/',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/Tharunsabari8',
      href: 'https://github.com/Tharunsabari8',
    },
  ];

  return (
    <section id="contact" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Contact Me</h2>
      <div className="max-w-2xl mx-auto grid gap-8">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover-gradient transition-all duration-300"
          >
            <div className="text-gray-900">{contact.icon}</div>
            <div>
              <div className="font-medium">{contact.label}</div>
              <div className="text-gray-600">{contact.value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
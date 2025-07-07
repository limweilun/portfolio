'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/limweilun',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/limweilun',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:limweilun.sg@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gray-900 px-4 py-12 text-white dark:bg-black">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
              Lim Wei Lun
            </h3>
            <p className="leading-relaxed text-gray-400">
              Software Engineer passionate about creating innovative solutions
              and exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Contact'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                    onClick={e => {
                      e.preventDefault();
                      document
                        .getElementById(link.toLowerCase())
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Singapore</p>
              <p>limweilun.sg@gmail.com</p>
              <p>+65 8768 1403</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-8 flex justify-center gap-6">
          {socialLinks.map(social => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:scale-110 hover:bg-gray-700"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-gray-400">
            © {currentYear} Lim Wei Lun. Made with
            <Heart className="h-4 w-4 fill-current text-red-500" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

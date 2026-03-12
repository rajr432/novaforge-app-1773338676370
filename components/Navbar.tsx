"use client";
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Tools', path: '/tools' },
    { name: 'Blog', path: '/blog' },
    { name: 'Experience', path: '/experience' },
    { name: 'Stack', path: '/stack' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-panel border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-black tracking-tighter text-white">
            RAJ <span className="text-blue-500">DUBEY</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4 overflow-x-auto">
            {links.map((link) => (
              <Link key={link.name} href={link.path} className="text-xs uppercase tracking-wider text-gray-300 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
            <a href="https://wa.me/919793327406" target="_blank" rel="noopener noreferrer" className="ml-4 px-4 py-2 bg-whatsapp/20 text-whatsapp border border-whatsapp/50 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-whatsapp hover:text-white transition-all">
              <MessageCircle size={14} /> WhatsApp Chat
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel absolute w-full left-0 border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {links.map((link) => (
              <Link key={link.name} href={link.path} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                {link.name}
              </Link>
            ))}
            <a href="https://wa.me/919793327406" target="_blank" rel="noopener noreferrer" className="mt-4 mx-3 px-4 py-3 bg-whatsapp text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
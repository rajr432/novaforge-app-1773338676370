"use client";
import { MessageCircle } from 'lucide-react';

export default function FloatingWA() {
  return (
    <a
      href="https://wa.me/919793327406"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-whatsapp text-white rounded-full shadow-lg shadow-whatsapp/30 hover:scale-110 transition-transform flex items-center justify-center animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
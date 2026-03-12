"use client";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated submission
    alert('Form functionality simulated in 3D environment.');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 py-20">
      <h1 className="text-4xl md:text-6xl font-black mb-12 text-center">Let's <span className="text-blue-500">Connect</span></h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="text-gray-400">Looking to build an AI product or automate your business? Reach out directly via phone, email, or WhatsApp.</p>
          
          <div className="space-y-6">
            <a href="tel:+919793327406" className="flex items-center gap-4 glass-panel p-4 rounded-xl hover:bg-white/5">
              <div className="p-3 bg-blue-500/20 text-blue-500 rounded-lg"><Phone size={20}/></div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Phone Number</p>
                <p className="font-bold text-lg">+91 9793327406</p>
              </div>
            </a>
            
            <a href="mailto:rd432845@gmail.com" className="flex items-center gap-4 glass-panel p-4 rounded-xl hover:bg-white/5">
              <div className="p-3 bg-blue-500/20 text-blue-500 rounded-lg"><Mail size={20}/></div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Email Address</p>
                <p className="font-bold text-lg">rd432845@gmail.com</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 glass-panel p-4 rounded-xl">
              <div className="p-3 bg-blue-500/20 text-blue-500 rounded-lg"><MapPin size={20}/></div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Location</p>
                <p className="font-bold text-lg">India</p>
              </div>
            </div>
          </div>

          <a href="https://wa.me/919793327406" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 bg-whatsapp text-white rounded-xl font-bold shadow-lg shadow-whatsapp/20 hover:scale-[1.02] transition-transform">
            Chat Directly on WhatsApp
          </a>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-3xl space-y-6">
          <h2 className="text-2xl font-bold">Send a Message</h2>
          <div>
            <label className="block text-xs uppercase text-gray-500 mb-2">Name</label>
            <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500" onChange={e => setForm({...form, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-xs uppercase text-gray-500 mb-2">Email</label>
            <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500" onChange={e => setForm({...form, email: e.target.value})} />
          </div>
          <div>
            <label className="block text-xs uppercase text-gray-500 mb-2">Message</label>
            <textarea required rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500" onChange={e => setForm({...form, message: e.target.value})}></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
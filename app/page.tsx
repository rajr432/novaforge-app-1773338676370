import Link from 'next/link';
import { ArrowRight, Bot, Zap, Code, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] p-6 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl mt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs font-medium text-blue-400 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for freelance opportunities
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter bg-gradient-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
          AI Developer & <br /> Automation Engineer
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          I'm Raj Dubey. I build scalable full-stack applications, intelligent AI agents, and robust automation systems that drive the future.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a href="https://wa.me/919793327406" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            Hire Me on WhatsApp <ArrowRight size={18} />
          </a>
          <Link href="/projects" className="w-full sm:w-auto px-8 py-4 glass-panel rounded-full font-bold hover:bg-white/10 transition-colors text-center">
            View My Work
          </Link>
        </div>
      </section>

      {/* Skills Snapshot Section */}
      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {[ 
          { icon: Bot, title: 'AI Integration', desc: 'LLMs, Custom GPTs, RAG' },
          { icon: Zap, title: 'Automation', desc: 'Zapier, Make, Scripts' },
          { icon: Code, title: 'Full-Stack', desc: 'Next.js, Node, Python' },
          { icon: Shield, title: 'Architecture', desc: 'AWS, Vercel, Microservices' }
        ].map((skill, i) => (
          <div key={i} className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
            <skill.icon className="w-10 h-10 text-blue-500" />
            <h3 className="font-bold text-lg">{skill.title}</h3>
            <p className="text-sm text-gray-400">{skill.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
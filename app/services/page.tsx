import { Workflow, BrainCircuit, Code2, Globe2, Mic } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: BrainCircuit, title: 'AI Agent Development', desc: 'Custom autonomous agents for research, data entry, and customer support.' },
    { icon: Workflow, title: 'Automation Setup', desc: 'End-to-end workflow automation using Zapier, Make.com, and custom Python scripts.' },
    { icon: Globe2, title: 'SaaS Development', desc: 'Full-stack Next.js and Node/FastAPI applications built from scratch to launch.' },
    { icon: Code2, title: 'API Integrations', desc: 'Connecting disjointed software stacks with seamless, secure REST/GraphQL APIs.' },
    { icon: Mic, title: 'Voice AI Systems', desc: 'Interactive voice response systems powered by modern LLMs and TTS engines.' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">My <span className="text-blue-500">Services</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Transforming businesses through intelligent automation and scalable architecture.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <div key={i} className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <svc.icon size={120} />
            </div>
            <svc.icon className="text-blue-500 w-12 h-12 mb-6" />
            <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a href="https://wa.me/919793327406" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-whatsapp text-white rounded-full font-bold text-lg hover:bg-green-600 transition-colors shadow-lg shadow-whatsapp/20">
          Discuss Your Project on WhatsApp
        </a>
      </div>
    </div>
  );
}
import { Terminal, Database, Cpu } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-6 py-20">
      <h1 className="text-4xl md:text-6xl font-black mb-10">About <span className="text-blue-500">Raj Dubey</span></h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p className="text-lg">
            As a Senior AI Developer and Automation Engineer, I specialize in bridging the gap between cutting-edge artificial intelligence and practical business solutions.
          </p>
          <p>
            My journey in tech started with traditional full-stack development, but my fascination with neural networks and workflow optimization led me into the deep end of AI.
          </p>
          <div className="p-6 glass-panel rounded-2xl border-l-4 border-blue-500">
            <h3 className="font-bold text-white mb-2 flex items-center gap-2"><Terminal size={18}/> Mission Statement</h3>
            <p className="text-sm">To build self-healing, autonomous software systems that multiply human potential rather than just replacing manual labor.</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Cpu size={24} className="text-blue-400"/> AI & Automation Expertise</h2>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">• Custom LLM Fine-Tuning</li>
              <li className="flex items-center gap-2">• RAG System Architecture</li>
              <li className="flex items-center gap-2">• Voice AI Agents (Deepgram, ElevenLabs)</li>
              <li className="flex items-center gap-2">• Zapier/Make Complex Workflows</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Database size={24} className="text-blue-400"/> Core Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'Node.js', 'Python', 'FastAPI', 'TensorFlow', 'PostgreSQL', 'Three.js', 'Tailwind'].map(tech => (
                <span key={tech} className="px-3 py-1 glass-panel text-xs rounded-full">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Layers } from 'lucide-react';

export default function Stack() {
  const stacks = {
    'Frontend': ['Next.js 14', 'React', 'Tailwind CSS', 'Framer Motion', 'Three.js / R3F'],
    'Backend & AI': ['Node.js', 'FastAPI', 'Python', 'LangChain', 'LlamaIndex'],
    'Database & Cloud': ['PostgreSQL', 'MongoDB', 'Pinecone', 'Vercel', 'AWS'],
    'Tools': ['Git', 'Docker', 'Postman', 'Zapier', 'Make.com']
  };

  return (
    <div className="max-w-5xl mx-auto p-6 py-20">
      <div className="flex items-center gap-4 mb-10 text-center justify-center md:justify-start">
        <Layers className="w-10 h-10 text-blue-500" />
        <h1 className="text-4xl md:text-6xl font-black">Tech <span className="text-blue-500">Stack</span></h1>
      </div>
      <p className="text-gray-400 mb-12 max-w-2xl text-center md:text-left">A comprehensive list of the technologies, frameworks, and tools I use to build robust, scalable 3D and AI applications.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(stacks).map(([category, items]) => (
          <div key={category} className="glass-panel p-8 rounded-3xl">
            <h2 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">{category}</h2>
            <div className="flex flex-wrap gap-3">
              {items.map(item => (
                <span key={item} className="px-4 py-2 bg-black/40 border border-white/5 rounded-lg text-sm font-medium text-gray-300 hover:text-blue-400 hover:border-blue-500/50 transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
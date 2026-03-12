import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'NeuroCRM AI',
      description: 'An autonomous CRM that reads incoming leads, categorizes them using NLP, and drafts personalized email responses instantly.',
      tech: ['Next.js', 'FastAPI', 'OpenAI API', 'PostgreSQL'],
      demo: '#',
      github: '#'
    },
    {
      title: 'VoiceBot Support Agent',
      description: 'Real-time voice AI support agent capable of handling complex technical troubleshooting over phone calls.',
      tech: ['Python', 'WebSockets', 'ElevenLabs', 'Twilio'],
      demo: '#',
      github: '#'
    },
    {
      title: 'DevForge IDE',
      description: 'Browser-based code editor with self-healing AI capabilities, suggesting structural architecture on the fly.',
      tech: ['React', 'Node.js', 'Docker', 'Three.js'],
      demo: '#',
      github: '#'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 py-20">
      <h1 className="text-4xl md:text-6xl font-black mb-4">Featured <span className="text-blue-500">Projects</span></h1>
      <p className="text-gray-400 mb-12 max-w-2xl">A showcase of my recent work bridging full-stack development with cutting-edge artificial intelligence.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="glass-panel rounded-2xl overflow-hidden flex flex-col group hover:border-blue-500/50 transition-colors">
            <div className="h-48 bg-gray-900/50 relative overflow-hidden">
              {/* 3D placeholder effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-center h-full text-gray-700 font-mono text-xs">
                [3D Render Placeholder]
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-blue-300">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a href={project.github} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"><Github size={16}/> Code</a>
                <a href={project.demo} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"><ExternalLink size={16}/> Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
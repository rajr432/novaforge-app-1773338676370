import { Wrench } from 'lucide-react';

export default function Tools() {
  return (
    <div className="max-w-5xl mx-auto p-6 py-20">
      <div className="flex items-center gap-4 mb-10">
        <Wrench className="w-12 h-12 text-blue-500" />
        <h1 className="text-4xl md:text-6xl font-black">AI <span className="text-blue-500">Tools</span></h1>
      </div>
      <p className="text-gray-400 mb-12 text-lg">Open-source and proprietary tools built by Raj Dubey to accelerate development.</p>

      <div className="space-y-6">
        {[
          { name: 'PromptForge CLI', desc: 'A command-line tool for managing, testing, and version-controlling LLM prompts natively.', tag: 'Open Source' },
          { name: 'ScrapeMind', desc: 'Intelligent web scraper that uses computer vision to parse complex dynamic DOMs.', tag: 'Proprietary' },
          { name: 'React-3D-Boilerplate', desc: 'Minimal boilerplate for integrating Three.js seamlessly with Next.js App Router.', tag: 'Open Source' }
        ].map((tool, i) => (
          <div key={i} className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold">{tool.name}</h3>
                <span className={`text-[10px] px-2 py-1 rounded-full border ${tool.tag === 'Open Source' ? 'border-green-500/50 text-green-400' : 'border-purple-500/50 text-purple-400'}`}>
                  {tool.tag}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{tool.desc}</p>
            </div>
            <button className="px-6 py-2 glass-panel rounded-full text-sm font-medium hover:bg-white/10">
              Explore Tool
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
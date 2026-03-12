export default function Blog() {
  const posts = [
    { title: 'The Future of Autonomous AI Agents', date: 'Nov 12, 2023', read: '5 min read', category: 'AI' },
    { title: 'Optimizing Next.js for 3D Web Experiences', date: 'Oct 28, 2023', read: '8 min read', category: 'Web Dev' },
    { title: 'Building a Self-Healing Codebase', date: 'Sep 15, 2023', read: '6 min read', category: 'Automation' },
    { title: 'Why FastAPI is Perfect for LLM Backends', date: 'Aug 02, 2023', read: '4 min read', category: 'Backend' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 py-20">
      <h1 className="text-4xl md:text-6xl font-black mb-4">Technical <span className="text-blue-500">Blog</span></h1>
      <p className="text-gray-400 mb-12">Thoughts, tutorials, and deep dives into AI, coding, and workflow automation.</p>

      <div className="space-y-8">
        {posts.map((post, i) => (
          <article key={i} className="glass-panel p-8 rounded-3xl hover:border-blue-500/30 transition-all cursor-pointer group">
            <div className="flex items-center gap-4 text-xs text-blue-400 mb-4 font-mono">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.category}</span>
              <span>•</span>
              <span className="text-gray-500">{post.read}</span>
            </div>
            <h2 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{post.title}</h2>
            <p className="text-gray-400 mt-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <div className="mt-6 text-sm font-bold text-white group-hover:underline">
              Read Article ->
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
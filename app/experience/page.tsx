import { Briefcase } from 'lucide-react';

export default function Experience() {
  const roles = [
    {
      title: 'Senior AI Developer',
      company: 'Freelance & Independent',
      date: '2022 - Present',
      desc: 'Architecting end-to-end AI pipelines. Deploying LLM wrappers, building automated workflows for enterprise clients, and integrating vector databases (Pinecone/Weaviate) for deep context retrieval.'
    },
    {
      title: 'Full-Stack Software Engineer',
      company: 'Tech Startups',
      date: '2020 - 2022',
      desc: 'Developed robust React & Next.js frontends paired with scalable Node.js/Express backends. Managed AWS deployments and CI/CD pipelines.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 py-20">
      <div className="flex items-center gap-4 mb-12">
        <Briefcase className="w-10 h-10 text-blue-500" />
        <h1 className="text-4xl md:text-6xl font-black">Work <span className="text-blue-500">Experience</span></h1>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {roles.map((role, i) => (
          <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black glass-panel shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl">
              <div className="flex flex-col mb-2">
                <span className="text-blue-400 font-bold">{role.title}</span>
                <span className="text-sm text-gray-500">{role.company} | {role.date}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {role.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
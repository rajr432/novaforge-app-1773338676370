import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "Are you available for freelance work?",
      a: "Yes, I am currently accepting freelance projects, especially those involving AI agent development, full-stack Next.js applications, and workflow automation. Contact me via WhatsApp for a quick response."
    },
    {
      q: "What is your typical project timeline?",
      a: "A standard web or automation project takes 2-4 weeks. Complex AI integrations or custom LLM setups may take 1-3 months depending on data scale and requirements."
    },
    {
      q: "Do you design as well as code?",
      a: "I am a developer first, but I have a strong eye for UI/UX. I leverage modern frameworks like Tailwind CSS and Three.js to build visually stunning, 3D-first interfaces like this one."
    },
    {
      q: "How does the WhatsApp integration work?",
      a: "You can click any WhatsApp button on this site to be instantly redirected to my direct chat (+91 9793327406). It's the fastest way to get in touch with me."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 py-20">
      <div className="flex items-center justify-center gap-4 mb-12">
        <HelpCircle className="w-10 h-10 text-blue-500" />
        <h1 className="text-4xl md:text-6xl font-black text-center">F<span className="text-blue-500">A</span>Q</h1>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <details key={i} className="glass-panel rounded-2xl group cursor-pointer">
            <summary className="text-lg font-bold p-6 list-none flex justify-between items-center">
              {faq.q}
              <span className="text-blue-500 group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
            </summary>
            <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-6">Still have questions?</p>
        <a href="https://wa.me/919793327406" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-whatsapp text-white rounded-full font-bold shadow-lg shadow-whatsapp/20 hover:-translate-y-1 transition-transform">
          Ask Me on WhatsApp
        </a>
      </div>
    </div>
  );
}
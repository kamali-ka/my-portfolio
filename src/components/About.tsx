import { Code2, Zap, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              I'm a <span className="font-semibold text-slate-900">Software Developer at Strivelabs.ai</span>,
              specializing in frontend development with technologies like React, Next.js, TypeScript, and TailwindCSS.
            </p>
            <p>
              I started my career in tech in 2024 at the <span className="font-semibold text-slate-900">Freshworks STS Software Academy</span>,
              where I built a strong foundation in modern web development and software engineering practices.
            </p>
            <p>
              I'm passionate about building intuitive, scalable, and SEO-friendly interfaces that make complex systems
              feel effortless to use. I enjoy creating products that not only look good but also improve internal
              efficiency and user experience.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
              <Code2 className="text-slate-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Technical Excellence</h3>
              <p className="text-slate-600">
                Building robust, maintainable codebases with modern frameworks and best practices
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
              <Zap className="text-slate-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Performance Focused</h3>
              <p className="text-slate-600">
                Optimizing applications for speed, SEO, and exceptional user experiences
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
              <Target className="text-slate-700 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Product Minded</h3>
              <p className="text-slate-600">
                Combining user empathy with technical precision to build impactful solutions
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Looking Ahead</h3>
          <p className="text-lg text-slate-200 leading-relaxed">
            I want to advance my expertise in front-end architecture and product performance, especially around
            SEO optimization, accessibility, and scalable design systems. I'm driven by opportunities where I can
            combine user empathy with technical precision, and eventually grow into the best frontend engineer who bridges
            design, backend, and data analytics — shaping products that are both beautiful and measurable.
          </p>
        </div>
      </div>
    </section>
  );
}

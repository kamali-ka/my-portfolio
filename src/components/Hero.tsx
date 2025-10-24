import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            K
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            Hi, I'm Kamalika
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 mb-6">
            Software Developer
          </p>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Frontend specialist at Strivelabs.ai, building intuitive, scalable, and SEO-friendly interfaces with React, Next.js, TypeScript, and TailwindCSS
          </p>
        </div>

        <div className="flex gap-6 justify-center mb-12 animate-fade-in-delay">
          <a
            href="https://github.com/kamali-ka"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-slate-700 hover:text-slate-900"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/kamalika-t-9764b631b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-slate-700 hover:text-slate-900"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:kamalikaazhakar@gmail.com"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-slate-700 hover:text-slate-900"
          >
            <Mail size={24} />
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in-delay-2"
        >
          Learn More
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}

import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
          Let's Connect
        </h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just chatting about frontend development and product engineering.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:kamalikaazhakar@gmail.com"
            className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border-2 border-slate-200 hover:border-slate-700 hover:shadow-xl transition-all duration-300"
          >
            <Mail className="mx-auto mb-4 text-slate-700 group-hover:scale-110 transition-transform duration-300" size={40} />
            <h3 className="font-bold text-slate-900 mb-2">Email</h3>
            <p className="text-slate-600">kamalikaazhakar@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/kamalika-t-9764b631b/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border-2 border-slate-200 hover:border-slate-700 hover:shadow-xl transition-all duration-300"
          >
            <Linkedin className="mx-auto mb-4 text-slate-700 group-hover:scale-110 transition-transform duration-300" size={40} />
            <h3 className="font-bold text-slate-900 mb-2">LinkedIn</h3>
            <p className="text-slate-600">kamalika-T</p>
          </a>

          <a
            href="https://github.com/kamali-ka"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border-2 border-slate-200 hover:border-slate-700 hover:shadow-xl transition-all duration-300"
          >
            <Github className="mx-auto mb-4 text-slate-700 group-hover:scale-110 transition-transform duration-300" size={40} />
            <h3 className="font-bold text-slate-900 mb-2">GitHub</h3>
            <p className="text-slate-600">kamali-ka</p>
          </a>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Something Great?</h3>
          <p className="text-slate-200 mb-6 text-lg">
            Whether you're looking for a frontend developer who can deliver production-ready solutions or someone
            who brings product thinking to technical execution, I'd love to hear from you.
          </p>
          <a
            href="mailto:kamalikaazhakar@gmail.com"
            className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Send Me a Message
          </a>
        </div>
      </div>
    </section>
  );
}

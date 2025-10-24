import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Technical', href: '#technical-skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 text-white text-xl font-bold shadow-lg">
              K
            </div>
            <div>
              <p className="text-xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                Kamalika
              </p>
              <p className="text-sm font-medium text-slate-500">Frontend Developer</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-full border border-slate-200 bg-white/60 text-sm font-semibold text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-900/40 hover:text-slate-900 hover:shadow-md"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© 2025 Kamalika. Built with React & TailwindCSS</p>
        </div>
      </footer>
    </div>
  )
}

export default App

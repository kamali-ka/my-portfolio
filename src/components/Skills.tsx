export default function Skills() {
  const technicalSkills = [
    { name: 'HTML5', level: 70 },
    { name: 'CSS3', level: 65 },
    { name: 'JavaScript (ES6+)', level: 75 },
    { name: 'React.js', level: 65 },
    { name: 'TypeScript', level: 63 },
    { name: 'Node.js', level: 50 },
    { name: 'Fastify', level: 40 }
  ]

  const skillCategories = [
    {
      category: 'Frontend Craft',
      summary: 'Designing resilient interfaces that balance usability, performance, and accessibility across devices',
      skills: ['Next.js', 'TailwindCSS', 'Responsive Design', 'Component Architecture', 'Design Systems', 'State Management']
    },
    {
      category: 'Product Delivery',
      summary: 'Driving end-to-end execution with cross-functional communication and iterative delivery practices',
      skills: ['Agile/Scrum', 'Roadmapping', 'Stakeholder Alignment', 'Product Discovery', 'Documentation', 'Mentoring']
    },
    {
      category: 'Technical Operations',
      summary: 'Observability, tooling, and automation to elevate reliability while accelerating developer workflows',
      skills: ['Git/GitHub', 'CI/CD Pipelines', 'PostHog', 'Sentry', 'REST APIs', 'Testing Strategies']
    },
    {
      category: 'Experience Optimization',
      summary: 'Translating data into rapid UI improvements with SEO-forward, accessible, and performant experiences',
      skills: ['SEO Optimization', 'Accessibility', 'Performance Auditing', 'A/B Testing', 'User Research', 'Analytics Dashboards']
    }
  ]

  return (
    <>
      <section id="technical-skills" className="py-24 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-12">
            <div className="max-w-3xl space-y-4">
              <p className="uppercase tracking-[0.35em] text-sm text-slate-400">Technical Proficiency</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Stack Mastery Snapshot</h2>
              <p className="text-lg text-slate-300">
                A concise view of the technologies I rely on daily, blending strong fundamentals with modern frameworks to ship production-ready experiences
              </p>
            </div>
            <div className="px-5 py-3 rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-slate-200 shadow-lg shadow-slate-900/30">
              Continuously leveling up through hands-on projects
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {technicalSkills.map((skill) => (
              <div
                key={skill.name}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/40"
              >
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-cyan-400/50 via-blue-500/30 to-purple-500/40" />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{skill.name}</span>
                    <span className="text-sm font-bold text-cyan-200">{skill.level}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <span className="inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                    <span>Hands-on experience building production interfaces and services</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="uppercase tracking-[0.35em] text-xs text-slate-500">Core Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Skills & Expertise</h2>
            <p className="text-lg text-slate-600">
              Combining architectural thinking, system observability, and product sense to create experiences that ship fast without compromising quality
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <div
                key={category.category}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-slate-900/20 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-slate-900 text-white flex items-center justify-center text-lg font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{category.category}</h3>
                      <p className="text-sm text-slate-500">{category.summary}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-700 transition-colors duration-200 group-hover:border-slate-900/30 group-hover:bg-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

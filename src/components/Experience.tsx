import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Strivelabs.ai',
      role: 'Software Developer',
      period: '2024 - Present',
      description: 'Specializing in frontend development with React, Next.js, TypeScript, and TailwindCSS',
      achievements: [
        'Developed end-to-end Admin Portal eliminating direct database access, implementing secure form handling, dynamic UI logic, and role-based access control',
        'Contributed major frontend functionality to Monday.com by Strivelabs app in Zendesk Marketplace, implementing ticket sync, board selection, and user configuration flows',
        'Migrated monitoring from Sentry to PostHog, enabling feature-level tracking and event-based analytics for data-driven product decisions',
        'Built intuitive, scalable, and SEO-friendly interfaces improving internal efficiency and user experience'
      ]
    },
    {
      company: 'Freshworks STS Software Academy',
      role: 'Software Engineering Trainee',
      period: '2024',
      description: 'Intensive training program focused on modern web development and software engineering practices',
      achievements: [
        'Completed comprehensive training in JavaScript, React, and full-stack development',
        'Built multiple projects demonstrating proficiency in modern web technologies',
        'Gained strong foundation in software engineering principles and best practices'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-slate-700 font-semibold mb-2">
                    <Briefcase size={20} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 mt-2 md:mt-0">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-slate-600 mb-6 text-lg">{exp.description}</p>

              <div className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-slate-700 flex-shrink-0" />
                    <p className="text-slate-600 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

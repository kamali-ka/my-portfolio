import { ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Admin Portal - Strivelabs.ai',
      description: 'End-to-end internal tool eliminating direct database access for employees',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'REST APIs'],
      highlights: [
        'Secure form handling with validation and error management',
        'Dynamic UI logic adapting to user roles and permissions',
        'Role-based access control ensuring data integrity',
        'Streamlined operations for creating AI agents and managing workflows',
        'Eliminated manual database editing, reducing errors by 95%'
      ],
      impact: 'Improved operational efficiency and maintained data integrity across the organization',
      featured: true
    },
    {
      title: 'Monday.com by Strivelabs - Zendesk Integration',
      description: 'Marketplace app connecting Zendesk with Monday.com for seamless workflow management',
      technologies: ['React', 'Next.js', 'TypeScript', 'Zendesk API', 'Monday.com API'],
      highlights: [
        'Implemented ticket sync functionality between platforms',
        'Built board selection and mapping interface',
        'Created user configuration flows with real-time preview',
        'Optimized performance for large-scale ticket processing',
        'Enhanced team productivity by 40% through automation'
      ],
      impact: 'Published in Zendesk Marketplace, serving multiple enterprise customers',
      featured: true
    },
    {
      title: 'Analytics Migration - Sentry to PostHog',
      description: 'Complete monitoring and analytics infrastructure overhaul',
      technologies: ['PostHog', 'React', 'TypeScript', 'Event Tracking'],
      highlights: [
        'Implemented feature-level tracking across all components',
        'Set up event-based analytics for user behavior insights',
        'Created custom dashboards for product metrics',
        'Integrated performance monitoring and error tracking',
        'Enabled data-driven decision making for product team'
      ],
      impact: 'Provided 360° view of application performance and user engagement',
      featured: true
    },
    {
      title: 'JavaScript Portfolio Projects',
      description: 'Collection of projects demonstrating modern JavaScript expertise',
      technologies: ['JavaScript', 'React', 'Node.js', 'APIs', 'Responsive Design'],
      highlights: [
        'Interactive web applications with complex state management',
        'RESTful API integration and data handling',
        'Responsive and accessible user interfaces',
        'Performance optimization and best practices',
        'Clean, maintainable, and well-documented code'
      ],
      impact: 'Showcases versatility and strong foundation in modern web development',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-900">
          Featured Projects
        </h2>
        <p className="text-center text-slate-600 text-lg mb-16 max-w-3xl mx-auto">
          A selection of impactful projects demonstrating end-to-end development, technical depth, and product thinking
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border-2 hover:shadow-2xl transition-all duration-300 ${
                project.featured
                  ? 'border-slate-700 hover:border-slate-900'
                  : 'border-slate-200 hover:border-slate-400'
              }`}
            >
              {project.featured && (
                <div className="inline-block px-3 py-1 bg-slate-900 text-white text-sm font-semibold rounded-full mb-4">
                  Featured
                </div>
              )}

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm font-medium border border-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-700 flex-shrink-0" />
                    <p className="text-sm text-slate-600">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-300">
                <div className="flex items-start gap-2">
                  <Code2 size={20} className="text-slate-700 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-slate-900">
                    Impact: <span className="font-normal text-slate-600">{project.impact}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Open to New Opportunities</h3>
            <p className="text-slate-200 mb-6 max-w-2xl">
              I'm excited to bring my expertise in frontend development, product thinking, and user-centric design
              to a team that values innovation and quality.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              Get in Touch
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { personalInfo, experience, projects, skills } from "./data/content";

// --- Components ---

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 md:mb-20">
    <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">{title}</h2>
    {subtitle && <p className="text-muted text-lg max-w-2xl font-light">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-card text-card-foreground border border-border/50 rounded-2xl p-6 md:p-8 hover:bg-card-hover hover:border-primary/20 transition-all duration-300 backdrop-blur-sm shadow-sm ${className}`}>
    {children}
  </div>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold border border-primary/20 whitespace-nowrap tracking-wide">
    {children}
  </span>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary transition-colors duration-300">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pb-24">
        
        {/* --- Hero Section --- */}
        <section className="min-h-[85vh] flex flex-col justify-center pt-32 md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-muted font-medium mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Open to Work
            </div>

            <h1 className="text-5xl md:text-8xl font-display font-bold text-foreground tracking-tighter mb-8 leading-[1.1]">
              Full-Stack <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Architect</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed mb-10 font-light">
              I build scalable cloud infrastructure and high-performance applications. 
              Currently optimizing production systems for 1200+ users.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-12">
              <a href="#projects" className="px-8 py-4 bg-foreground text-background font-bold text-lg rounded-full hover:opacity-90 transition-all flex items-center gap-2 min-w-[160px] justify-center shadow-lg shadow-primary/5">
                View Projects
              </a>
              <a 
                href={personalInfo.resume}
                download
                className="px-8 py-4 bg-card border border-border text-foreground font-bold text-lg rounded-full hover:bg-muted/10 transition-all flex items-center gap-2 min-w-[160px] justify-center group"
              >
                <Download className="group-hover:scale-110 transition-transform" size={20} />
                Download CV
              </a>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Github, href: personalInfo.github },
                { icon: Linkedin, href: personalInfo.linkedin },
                { icon: Mail, href: `mailto:${personalInfo.email}` }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  className="text-muted hover:text-primary transition-colors p-2 hover:bg-muted/10 rounded-full"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
        </section>


        {/* --- Experience Section (Shortened) --- */}
        <section id="experience" className="py-24 border-t border-border/40">
          <SectionTitle title="Experience" subtitle="My professional journey in tech." />

          <div className="grid gap-4">
            {experience.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="group flex items-center justify-between p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                     <span className="text-sm font-mono text-muted w-32 shrink-0">{job.duration}</span>
                     <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                           {job.role}
                        </h3>
                        <p className="text-muted text-sm">{job.company}</p>
                     </div>
                  </div>
                  
                  <div className="hidden md:flex gap-2">
                      {job.skills.slice(0, 3).map(skill => (
                          <span key={skill} className="text-xs text-muted/60 bg-muted/10 px-2 py-1 rounded">
                              {skill}
                          </span>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* --- Projects Section --- */}
        <section id="projects" className="py-24 border-t border-border/40">
          <SectionTitle title="Selected Work" subtitle="Infrastructure, AI, and Full-Stack solutions." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {projects.map((project) => (
               <Card key={project.id} className="group cursor-pointer min-h-[300px] flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <Github size={20} />
                      </div>
                      <ArrowUpRight className="text-muted group-hover:text-primary transition-colors" />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map(t => (
                      <span key={t} className="text-xs font-mono text-muted/60 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
               </Card>
             ))}
          </div>
        </section>


        {/* --- Skills Compact View --- */}
        <section id="skills" className="py-24 border-t border-border/40">
           <div className="rounded-3xl bg-card border border-border p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                 <div>
                    <h2 className="text-3xl font-display font-bold text-foreground mb-6">Technical Stack</h2>
                    <p className="text-muted mb-8">
                       My preferred technologies for building robust, scalable applications. 
                       Always learning and adapting to the best tools for the job.
                    </p>
                    <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                       Get in touch <ArrowUpRight size={16} />
                    </a>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                    {Object.entries(skills).slice(0, 4).map(([category, items]) => (
                       <div key={category}>
                          <h4 className="text-foreground font-medium mb-3 text-sm uppercase tracking-wider opacity-80">{category}</h4>
                          <ul className="space-y-2">
                             {items.slice(0, 4).map(skill => (
                                <li key={skill} className="text-muted text-sm">{skill}</li>
                             ))}
                          </ul>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>


        {/* --- Simple Footer --- */}
        <footer className="pt-24 pb-12 flex justify-between items-end border-t border-border/40 text-muted text-sm">
           <div>
              <div className="text-foreground font-bold text-lg mb-2">MM.</div>
              <p>© {new Date().getFullYear()} Meer Modi</p>
           </div>
           <div className="flex flex-col text-right gap-2">
              <a href="#" className="hover:text-foreground transition-colors">Back to top</a>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-foreground transition-colors">Email me</a>
           </div>
        </footer>

      </div>
    </div>
  );
}

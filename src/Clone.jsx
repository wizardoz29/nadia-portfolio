import React, { useState } from 'react';
import { 
  ArrowRight, 
  Linkedin, 
  Menu, 
  X, 
  ExternalLink, 
  Instagram, 
  Globe, 
  Award, 
  ChevronRight,
  Twitter,
  Palette
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const myLinks = {
    email: "Khadijat.raji00@gmail.com",
    linkedin: "https://www.linkedin.com/in/raji-khadijat-23ab80322",
    instagram: "https://instagram.com/Nadine9.7",
    twitter: "https://x.com/spoil_missk?s=21",
    vizzy: "https://vizzy.com/@khadijat00"
  };

  const projects = [
    {
      id: 'saas',
      title: "SaaS Activation Strategy",
      role: "Product Researcher",
      tag: "SaaS / Optimization",
      overview: "Improving activation for an early-stage workflow automation tool by reducing time-to-value.",
      pdfUrl: "uploaded:Khadijat_Raji_Product_Case.pdf.pdf",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      summary: "Addressed high drop-off rates in early-stage SaaS onboarding. Proposed a simplified 'Aha' moment checklist that prioritizes speed and clarity to drive long-term user retention."
    },
    {
      id: 'size',
      title: "AI Size Recommendation Engine",
      role: "Lead Product Student",
      tag: "Fashion Tech / PRD",
      overview: "A strategic B2B solution reducing fashion returns by 30% through predictive fit algorithms.",
      notionUrl: "https://discreet-saxophone-b78.notion.site/26e7a6a3a83b804f8986e168995e6137",
      imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
      summary: "Identified a critical $B leakage in e-commerce sizing. This PRD outlines an AI-driven engine that leverages historical purchase data and user biometric measurements to provide instant, high-confidence size suggestions."
    },
    {
      id: 'skin',
      title: "Seoul Therapy: Skincare MVP",
      role: "Product Owner",
      tag: "Wellness / MVP Testing",
      overview: "Bridging the gap between clinical efficacy and therapeutic skincare for sensitive demographics.",
      notionUrl: "https://www.notion.so/Seoul-Therapy-Building-a-Viable-Skincare-MVP-from-Concept-to-Sample-Testing-2707a6a3a83b81fb8c26cb6490503099",
      imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
      summary: "Managed the end-to-end product lifecycle for a 'Sensitive Skin' demographic. Coordinated clinical ingredient sourcing and iterative user-testing for an MVP focused on high-trust therapeutic honesty."
    },
    {
      id: 'chore',
      title: "ChoreCheck: Household Harmony",
      role: "UX Strategist & PM",
      tag: "Productivity / B2C",
      overview: "An automated task-rotation system designed to eliminate friction in shared living environments.",
      notionUrl: "https://discreet-saxophone-b78.notion.site/ChoreCheck-Solving-Roommate-Chore-Conflict-2707a6a3a83b80278d60f1b5d13e0fab",
      imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      summary: "Conceptualized a gamified task-rotation app to solve roommate friction. Developed a dynamic algorithm to ensure fair labor distribution, making 'invisible' household labor visible and objective."
    }
  ];

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-stone-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
          <button 
            onClick={() => navigateTo('home')} 
            className="font-black uppercase tracking-tighter text-xl group"
          >
            Khadijat <span className="text-stone-300 group-hover:text-stone-900 transition-colors">Raji</span>
          </button>
          
          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
            <button onClick={() => navigateTo('home')} className={activeTab === 'home' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-900 transition-colors'}>Home</button>
            <button onClick={() => navigateTo('projects')} className={activeTab === 'projects' || activeTab.startsWith('project-') ? 'text-stone-900' : 'text-stone-400 hover:text-stone-900 transition-colors'}>Projects</button>
            <button onClick={() => navigateTo('contact')} className="px-6 py-2.5 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all hover:px-8">Get In Touch</button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-60 p-8 flex flex-col justify-center gap-10 animate-in fade-in zoom-in-95">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8"><X size={32}/></button>
          <button onClick={() => navigateTo('home')} className="text-5xl font-black tracking-tighter text-left">Home.</button>
          <button onClick={() => navigateTo('projects')} className="text-5xl font-black tracking-tighter text-left">Projects.</button>
          <button onClick={() => navigateTo('contact')} className="text-5xl font-black tracking-tighter text-left underline underline-offset-8">Contact.</button>
        </div>
      )}

      <main>
        {activeTab === 'home' && (
          <div className="animate-in fade-in duration-1000">
            {/* Hero Section */}
            <section className="pt-48 pb-32 px-6 max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 bg-stone-50 border border-stone-100 text-stone-500 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                  <Globe size={14} className="text-stone-300" /> Product Manager
                </div>
                <h1 className="text-6xl md:text-[5.5rem] font-bold leading-[0.9] mb-10 tracking-tighter">
                  Engineering <span className="italic font-serif font-light text-stone-400">clarity</span> from complex digital <span className="text-stone-200">friction.</span>
                </h1>
                <p className="text-xl md:text-2xl text-stone-500 mb-12 leading-relaxed max-w-2xl font-light">
                  Product Manager focused on consumer behavior, AI personalization, and the small details that build user trust.
                </p>
                <div className="flex flex-wrap gap-5">
                  <button onClick={() => navigateTo('projects')} className="bg-stone-900 text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-stone-800 transition-all shadow-xl shadow-stone-200">
                    Explore Projects <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="py-32 px-6 border-y border-stone-100 bg-stone-50/30">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-4 sticky top-32">
                  <h2 className="text-xs font-black uppercase tracking-[0.4em] text-stone-300 mb-6">About Me</h2>
                  <div className="w-12 h-1 bg-stone-900 mb-10"></div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-stone-400 font-bold text-[10px] uppercase tracking-widest">
                      <Award size={16} /> 4.75 CGPA Scholar
                    </div>
                    <div className="flex items-center gap-3 text-stone-400 font-bold text-[10px] uppercase tracking-widest">
                      <Globe size={16} /> Product Strategy
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-3xl md:text-4xl font-light leading-snug text-stone-900 mb-10">
                    I am a product manager with a strong interest in <span className="text-stone-400 font-serif italic">consumer behavior</span>, personalization, and the small details that make digital experiences feel trustworthy and effortless.
                  </p>
                  <div className="grid md:grid-cols-2 gap-12 text-stone-500 leading-relaxed text-lg font-light">
                    <p>
                      I enjoy working on products that help people make better choices—whether that means choosing the right size, treating dark facial sunburn, or managing shared household responsibilities.
                    </p>
                    <p>
                      My approach blends empathy, clarity, aesthetic awareness, and cross‑functional thinking. I am especially drawn to beauty, wellness, AI personalization, SaaS, and products that make the universe a better place.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Projects Grid */}
            <section className="py-40 px-6 max-w-7xl mx-auto">
              <div className="flex justify-between items-end mb-20">
                <div>
                  <h2 className="text-xs font-black uppercase tracking-[0.4em] text-stone-300 mb-4">Case Studies</h2>
                  <h3 className="text-4xl font-bold tracking-tighter">Selected Artifacts</h3>
                </div>
                <button onClick={() => navigateTo('projects')} className="hidden md:flex items-center gap-2 font-bold text-sm border-b-2 border-stone-900 pb-1">View Archive</button>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {projects.map(p => (
                  <div key={p.id} className="group cursor-pointer" onClick={() => navigateTo(`project-${p.id}`)}>
                    <div className="relative aspect-video bg-stone-50 rounded-[2.5rem] mb-8 overflow-hidden border border-stone-100">
                      <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
                    </div>
                    <div className="space-y-3">
                      <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">{p.tag}</p>
                      <h3 className="text-2xl font-bold tracking-tight flex items-center justify-between group-hover:underline decoration-stone-200 underline-offset-8">
                        {p.title} <ArrowRight size={20} className="text-stone-200 group-hover:text-stone-900 transition-colors" />
                      </h3>
                      <p className="text-stone-500 leading-relaxed font-light">{p.overview}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Academic Section */}
            <section className="py-40 px-6 bg-stone-900 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-125 h-125 bg-white/5 rounded-full -mr-64 -mt-64 blur-3xl"></div>
              <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                 <h2 className="text-xs font-black uppercase tracking-[0.5em] text-white/30 mb-12">Academic Excellence</h2>
                 <p className="text-3xl md:text-5xl font-serif italic mb-16 max-w-3xl leading-tight">
                   Applying Business Administration principles to modern product life-cycles.
                 </p>
                 <div className="flex flex-col md:flex-row gap-12 md:gap-32 items-center">
                    <div>
                      <div className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none mb-4">4.75</div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Current CGPA / 5.0 Scale</p>
                    </div>
                    <div className="text-left max-w-xs space-y-6">
                      <div className="border-l border-white/20 pl-6">
                        <p className="text-lg font-bold">Summit University</p>
                        <p className="text-white/40 text-sm font-light">B.Sc. Business Administration (2022—2026)</p>
                      </div>
                      <div className="border-l border-white/20 pl-6">
                        <p className="text-lg font-bold">Specialization</p>
                        <p className="text-white/40 text-sm font-light">Strategic Operations & Consumer Psychology</p>
                      </div>
                    </div>
                 </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto animate-in fade-in duration-500">
            <h1 className="text-6xl md:text-[8rem] font-bold mb-32 tracking-tighter text-stone-100">The Archive.</h1>
            <div className="space-y-40">
               {projects.map((p, idx) => (
                  <div key={p.id} className="grid lg:grid-cols-2 gap-20 items-center group cursor-pointer" onClick={() => navigateTo(`project-${p.id}`)}>
                    <div className={`relative rounded-[3rem] overflow-hidden border border-stone-100 shadow-xl ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                      <img src={p.imageUrl} alt={p.title} className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                    </div>
                    <div>
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-stone-300 mb-8 block">{p.tag}</span>
                        <h3 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-none">{p.title}</h3>
                        <p className="text-xl text-stone-500 leading-relaxed mb-10 font-light">{p.overview}</p>
                        <button className="flex items-center gap-4 text-xs font-black uppercase tracking-widest border-b-2 border-stone-900 pb-2 group-hover:gap-8 transition-all">
                          Read Case Study <ChevronRight size={16}/>
                        </button>
                    </div>
                  </div>
               ))}
            </div>
          </div>
        )}

        {activeTab.startsWith('project-') && (
          <div className="pt-40 pb-32 px-6 max-w-6xl mx-auto animate-in fade-in duration-500">
            {(() => {
              const project = projects.find(p => p.id === activeTab.split('-')[1]);
              if (!project) return null;

              return (
                <div>
                  <button onClick={() => navigateTo('projects')} className="text-stone-300 font-bold text-[10px] uppercase tracking-widest mb-20 flex items-center gap-2 hover:text-stone-900 transition-colors">
                    <ArrowRight className="rotate-180" size={14}/> Return to Archive
                  </button>
                  
                  <div className="mb-32">
                    <h1 className="text-5xl md:text-[6.5rem] font-bold mb-16 tracking-tighter leading-[0.85]">{project.title}</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-y border-stone-100">
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-stone-300 mb-3">Core Role</h4>
                        <p className="font-bold">{project.role}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-stone-300 mb-3">Industry</h4>
                        <p className="font-bold">{project.tag.split(' / ')[0]}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-stone-300 mb-3">Scope</h4>
                        <p className="font-bold">{project.tag.split(' / ')[1]}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-stone-300 mb-3">Status</h4>
                        <p className="font-bold italic">Artifact Ready</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-24 mb-32">
                    <div className="lg:col-span-2 space-y-16">
                      <p className="text-3xl md:text-4xl font-serif text-stone-800 italic leading-tight border-l-4 border-stone-100 pl-10">
                        "{project.summary}"
                      </p>
                      
                      <div className="bg-stone-50 p-12 md:p-20 rounded-[4rem] border border-stone-100">
                        <h3 className="text-4xl font-bold tracking-tighter mb-8 italic text-stone-300 underline decoration-stone-200 underline-offset-8">The Strategy</h3>
                        <p className="text-stone-600 text-lg leading-relaxed font-light mb-12">
                          This artifact represents my ability to translate vague user frustrations into tactical product requirements. I focus on measurable outcomes and intuitive flows.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          {project.notionUrl && (
                            <a 
                              href={project.notionUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex bg-stone-900 text-white px-12 py-6 rounded-full font-bold items-center gap-3 shadow-2xl shadow-stone-300 hover:scale-105 transition-all"
                            >
                              View Notion Artifact <ExternalLink size={20} />
                            </a>
                          )}
                          {project.pdfUrl && (
                             <a 
                               href={project.pdfUrl} 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="inline-flex border border-stone-200 bg-white text-stone-900 px-12 py-6 rounded-full font-bold items-center gap-3 hover:bg-stone-50 transition-all"
                             >
                               View Case PDF <FileText size={20} />
                             </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-12">
                      <div className="p-10 border border-stone-100 rounded-[3rem] space-y-8">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-300">Methodology</h4>
                        <ul className="space-y-4 text-sm font-medium text-stone-600">
                          <li className="flex items-center gap-3"><ChevronRight size={14} className="text-stone-300" /> User Persona Analysis</li>
                          <li className="flex items-center gap-3"><ChevronRight size={14} className="text-stone-300" /> Iterative Prototyping</li>
                          <li className="flex items-center gap-3"><ChevronRight size={14} className="text-stone-300" /> Market Gap Research</li>
                          <li className="flex items-center gap-3"><ChevronRight size={14} className="text-stone-300" /> KPI Definition</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Embed Container */}
                  <div className="rounded-[4rem] overflow-hidden border border-stone-100 bg-stone-50 h-200 shadow-inner relative group">
                    <iframe 
                        src={project.pdfUrl || project.notionUrl} 
                        className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity bg-stone-100"
                        title={`${project.title} Artifact`}
                        loading="lazy"
                    />
                    <div className="absolute top-10 right-10 flex gap-4">
                        <a 
                            href={project.pdfUrl || project.notionUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/80 backdrop-blur shadow-md px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-stone-900 hover:text-white transition-all"
                        >
                            Open In Full Screen <ExternalLink size={14}/>
                        </a>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-48 pb-32 px-6 max-w-7xl mx-auto animate-in slide-in-from-bottom-8">
            <div className="grid lg:grid-cols-2 gap-32">
              <div className="flex flex-col">
                <h1 className="text-7xl md:text-[9rem] font-bold mb-16 tracking-tighter leading-none">Hello.</h1>
                <p className="text-2xl text-stone-500 font-light leading-snug mb-20 max-w-md italic">
                  I'm actively seeking remote Product PM opportunities globally.
                </p>
                
                <div className="space-y-10 mt-auto">
                  <div className="group flex flex-col gap-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-stone-300">Email Address</p>
                    <p className="text-2xl font-bold tracking-tight">{myLinks.email}</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-50 p-16 rounded-[4rem] border border-stone-100 flex flex-col justify-between">
                <div>
                   <h2 className="text-xs font-black uppercase tracking-[0.4em] text-stone-300 mb-12">Connect Elsewhere</h2>
                   <div className="grid grid-cols-1 gap-6">
                      <a href={myLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-8 bg-white border border-stone-100 rounded-3xl flex items-center justify-between group hover:shadow-lg transition-all">
                        <div className="flex items-center gap-4">
                          <Linkedin size={28} className="text-stone-300 group-hover:text-blue-600 transition-colors"/>
                          <span className="font-bold text-lg">LinkedIn</span>
                        </div>
                        <ArrowRight size={20} className="text-stone-200"/>
                      </a>
                      <a href={myLinks.vizzy} target="_blank" rel="noopener noreferrer" className="p-8 bg-white border border-stone-100 rounded-3xl flex items-center justify-between group hover:shadow-lg transition-all">
                        <div className="flex items-center gap-4">
                          <Palette size={28} className="text-stone-300 group-hover:text-purple-600 transition-colors"/>
                          <span className="font-bold text-lg">Vizzy Portfolio</span>
                        </div>
                        <ArrowRight size={20} className="text-stone-200"/>
                      </a>
                      <a href={myLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-8 bg-white border border-stone-100 rounded-3xl flex items-center justify-between group hover:shadow-lg transition-all">
                        <div className="flex items-center gap-4">
                          <Twitter size={28} className="text-stone-300 group-hover:text-stone-900 transition-colors"/>
                          <span className="font-bold text-lg">X (Twitter)</span>
                        </div>
                        <ArrowRight size={20} className="text-stone-200"/>
                      </a>
                      <a href={myLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-8 bg-white border border-stone-100 rounded-3xl flex items-center justify-between group hover:shadow-lg transition-all">
                        <div className="flex items-center gap-4">
                          <Instagram size={28} className="text-stone-300 group-hover:text-rose-500 transition-colors"/>
                          <span className="font-bold text-lg">Instagram</span>
                        </div>
                        <ArrowRight size={20} className="text-stone-200"/>
                      </a>
                   </div>
                </div>
                <p className="mt-12 text-sm text-stone-400 font-medium">Open to Remote & Global Relocation</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="py-32 px-6 border-t border-stone-100 bg-stone-50/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.6em] text-stone-300 mb-4 italic">KHADIJAT RAJI Portfolio 2025</p>
            <p className="text-xs text-stone-400 font-medium">Built with Product-First Thinking.</p>
          </div>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
             <button onClick={() => navigateTo('home')} className="hover:text-stone-900">Home</button>
             <button onClick={() => navigateTo('projects')} className="hover:text-stone-900">Archive</button>
             <a href={`mailto:${myLinks.email}`} className="hover:text-stone-900">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
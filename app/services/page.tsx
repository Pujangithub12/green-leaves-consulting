import {
  Sun,
  Wind,
  Leaf,
  Network,
  CheckCircle2,
  Building2,
  ArrowRight,
  FileSpreadsheet
} from "lucide-react";
import Link from "next/link";

const serviceCategories = [
  {
    title: "Solar Energy Development & Advisory",
    subtitle: "Utility & Distributed PV Engineering",
    icon: Sun,
    bullets: [
      "Feasibility studies and site assessment for complex rooftop and ground-mounted solar PV projects.",
      "Technical design, specialized engineering, and procurement support for comprehensive solar PV setups.",
      "Grid connection optimization and rigorous interconnection studies for solar power plants.",
      "Operation and maintenance (O&M) advisory alongside continuous performance monitoring paradigms."
    ]
  },
  {
    title: "Wind Energy Development & Advisory",
    subtitle: "Resource Assessment & Asset Integration",
    icon: Wind,
    bullets: [
      "Wind resource potential assessment and macro/micro site identification for wind farm projects.",
      "Comprehensive feasibility studies and techno-economic analysis for commercial wind configurations.",
      "Environmental and social impact assessments scoped specifically for wind energy developments.",
      "Grid integration analysis and grid transmission evacuation planning for wind generation assets."
    ]
  },
  {
    title: "Environmental & Sustainability Consulting",
    subtitle: "EIA, Climate Planning & Compliance",
    icon: Leaf,
    bullets: [
      "Full-scale Environmental Impact Assessments (EIA) for solar, wind, and mixed renewable plants.",
      "Climate-smart planning matrices, carbon footprint analysis, and corporate emissions reduction audits.",
      "Baseline surveying, standalone project feasibility modeling, and rigorous monitoring & evaluation (M&E).",
      "Strategic grant writing, technical proposal architecture, and institutional investor/donor liaison support."
    ]
  },
  {
    title: "Transmission, Grid & Green Building",
    subtitle: "Infrastructure Design In Collaboration with JDNE",
    icon: Network,
    isPartnered: true,
    bullets: [
      "Advisory on high-voltage transmission lines, substations, and evacuation infrastructure.",
      "Green building design and deep energy efficiency optimization consulting for commercial or industrial structures.",
      "Seamless integration of complex solar and wind grid solutions into live industrial and manufacturing operations."
    ]
  }
];

export default function Services() {
  return (
    <div className="bg-white min-h-screen text-leaf-900 selection:bg-leaf-150 antialiased">
      
      {/* 1. HERO HEADER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-leaf-50 via-white to-white py-20 lg:py-24 border-b border-leaf-100/30">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-leaf-100 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-leaf-200/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf-100 px-4 py-1.5 text-sm font-semibold text-leaf-800 mb-5 border border-leaf-200">
            <FileSpreadsheet className="w-4 h-4 text-leaf-600" /> Capabilities Brochure
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-leaf-900">
            Our Advisory <span className="text-leaf-600 font-medium">& Engineering Services</span>
          </h1>
          <p className="text-leaf-700 mt-5 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            End-to-end institutional energy solutions tailored to enterprises, developmental organizations, government bodies, and private sector developers across Nepal.
          </p>
        </div>
      </section>

      {/* 2. SERVICES ASYMMETRIC GRID ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {serviceCategories.map((cat, i) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={i}
                className="group relative bg-white border border-leaf-100 rounded-3xl p-8 lg:p-10 shadow-sm hover:border-leaf-300 hover:shadow-xl hover:shadow-leaf-900/[0.02] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Top Row Context */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="p-3.5 bg-leaf-50 group-hover:bg-leaf-600 group-hover:text-white text-leaf-700 rounded-2xl transition-all duration-300 shrink-0 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {cat.isPartnered ? (
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-leaf-900 px-3 py-1 text-xs font-semibold text-leaf-50 border border-leaf-800 shadow-sm animate-pulse">
                        <Building2 className="w-3.5 h-3.5 text-leaf-400" /> Co-engineered with JDNE
                      </span>
                    ) : (
                      <span className="text-xs font-semibold tracking-wider uppercase text-leaf-500 bg-leaf-50 px-2.5 py-1 rounded-md">
                        Core Advisory
                      </span>
                    )}
                  </div>

                  {/* Headers */}
                  <h3 className="text-2xl font-bold text-leaf-900 tracking-tight mb-1 group-hover:text-leaf-900">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-semibold text-leaf-600 mb-6 tracking-wide uppercase">
                    {cat.subtitle}
                  </p>

                  {/* Bullet Sub-items */}
                  <ul className="space-y-4 border-t border-leaf-50 pt-6">
                    {cat.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-leaf-800 text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-leaf-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SYNERGY COLLABORATION BANNER */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-leaf-800 to-leaf-900 p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] hidden md:block" />
          
          <div className="max-w-3xl relative z-10">
            <span className="text-xs uppercase tracking-widest bg-leaf-700/60 text-leaf-100 px-3 py-1 rounded-md font-semibold border border-leaf-600/30">
              Institutional Integration
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-4 text-leaf-50 tracking-tight">
              Leveraging the Engineering Architecture of JDNE
            </h2>
            <p className="text-leaf-200 text-sm md:text-base leading-relaxed mb-8">
              Through our direct structural sister-relationship with <strong>Janda Devi Nepal Energy Pvt. Ltd.</strong>, Green Leaves unlocks immediate access to tier-1 procurement capabilities, advanced technical personnel networks, and large-scale EPC implementation data. This minimizes deployment risk for all development partners.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-leaf-600 hover:bg-leaf-500 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all shadow-md shadow-leaf-950/20 active:scale-[0.98]"
              >
                Request Technical Engagement
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
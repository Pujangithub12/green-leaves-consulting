"use client";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Compass,
  Layers,
  Activity,
  Award,
  Globe,
  Sun,
  Zap,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#fafdfb] text-slate-950 antialiased font-sans">
      {/* 1. HERO SECTION (DEEP EMERALD ARCHITECTURE) */}
      <section className="relative bg-emerald-950 text-white overflow-hidden min-h-[85vh] flex items-center border-b border-emerald-900">
        {/* Architectural Glow Effects */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-mint-400/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero Left: Core Message */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 bg-emerald-900/60 border border-emerald-700/50 text-emerald-300 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />{" "}
              Sustainable Energy Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
              Powering progress with{" "}
              <span className="font-semibold text-emerald-400 block mt-1">
                engineered solar frameworks.
              </span>
            </h1>
            <p className="text-emerald-100/80 text-sm md:text-base max-w-lg leading-relaxed">
              We deliver high-yield utility scale scoping, localized grid
              integration infrastructure, and certified structural performance
              benchmarks across Nepal.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-emerald-500 text-emerald-950 text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-xl hover:bg-emerald-400 transition-all duration-150 shadow-lg shadow-emerald-500/20 flex items-center gap-2 group"
              >
                <span>Initialize Scoping Brief</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="bg-emerald-900/40 border border-emerald-700 text-emerald-100 text-xs font-semibold uppercase tracking-widest px-6 py-4 rounded-xl hover:bg-emerald-900/70 transition-all"
              >
                Engineering Capabilities
              </Link>
            </div>
          </div>

          {/* Hero Right: Dynamic Layered Imagery */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-emerald-800 shadow-2xl shadow-emerald-950/50">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent z-10 opacity-60" />
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
                alt="High capacity solar arrays"
                className="w-full h-full object-cover scale-105"
              />

              {/* Context Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-emerald-900/90 backdrop-blur-md p-4 rounded-2xl border border-emerald-700/50 shadow-xl z-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                    <Sun className="w-4 h-4 animate-spin-slow" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                      Grid Yield Metric
                    </p>
                    <p className="text-xs font-medium text-white mt-0.5">
                      Sustainable Infrastructure
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-emerald-500 text-emerald-950 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES CAPABILITIES (HIGH VISUAL DISCOVERY GRID) */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
              Technical Portfolios
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Validated Solutions. <br />
              Sustainable Engineering Footprint.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Compass,
              title: "Grid Infrastructure Layouts",
              desc: "Precise digital calculations, structural slope profiling, and site configuration matrices engineered for maximal solar irradiance.",
              img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop",
            },
            {
              icon: Layers,
              title: "Statutory Environmental Audits",
              desc: "Complete regulatory navigation through ministry requirements, managing all baseline IEE/EIA framework logs cleanly.",
              img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop",
            },
            {
              icon: Zap,
              title: "Industrial Storage Solutions",
              desc: "High-density multi-megawatt backup containment architectures designed to stabilize system evacuation parameters safely.",
              img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-emerald-100/60 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-200/80 transition-all duration-300 flex flex-col group"
            >
              <div className="h-48 overflow-hidden relative border-b border-emerald-50">
                <div className="absolute inset-0 bg-emerald-950/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* 4. BALANCED CONTEXT BLOCK (GREEN ACCENT GRAPHICS) */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Institutional Technical Asset Advisory
          </h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            We eliminate downstream engineering bottlenecks by pre-auditing all
            regional topography scales, local interconnect nodes, and grid
            capacities before significant capital allocation occurs.
          </p>

          <div className="space-y-3 pt-2">
            {[
              {
                title: "NEA Parameter Compliance",
                desc: "Guaranteed tracking with strict statutory framework bounds.",
              },
              {
                title: "Spatial Data Analytics",
                desc: "Advanced programmatic charts identifying geographic anomalies.",
              },
              {
                title: "Risk Mitigation Routines",
                desc: "Isolating environmental degradation threats pre-deployment.",
              },
            ].map((text, idx) => (
              <div key={idx} className="flex gap-3 text-xs text-slate-700">
                <div className="w-5 h-5 rounded-md bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-3 h-3 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{text.title}</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    {text.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop"
            alt="Infrastructure development monitoring"
            className="w-full h-64 object-cover rounded-2xl border border-emerald-100 shadow-md relative z-10"
          />
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=600&auto=format&fit=crop"
            alt="Site layout assessment analysis"
            className="w-full h-64 object-cover rounded-2xl border border-emerald-100 shadow-md mt-8 relative z-10"
          />
        </div>
      </section>

      {/* 5. CALL TO ACTION (POWERFUL GREEN GRADIENT BLOCK) */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 text-white rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl border border-emerald-800">
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Project Integration Gateway
            </span>
            <h3 className="text-2xl md:text-4xl font-light tracking-tight leading-tight">
              Ready to map your structural{" "}
              <span className="font-semibold text-emerald-400">
                energy assets?
              </span>
            </h3>
            <p className="text-emerald-100/70 text-xs md:text-sm max-w-lg leading-relaxed">
              Connect directly with our technical directory to securely align
              project footprints, grid matching parameters, and statutory
              scoping deliverables.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="bg-emerald-500 text-emerald-950 text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl hover:bg-emerald-400 transition-all duration-150 inline-flex items-center gap-2 shadow-md shadow-emerald-950/40"
              >
                <span>Initialize Scope Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

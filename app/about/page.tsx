"use client";
import {
  Target,
  Eye,
  Award,
  Users,
  Leaf,
  ShieldCheck,
  Lightbulb,
  Building2,
  MapPin,
  Briefcase,
} from "lucide-react";

export default function About() {
  const coreValues = [
    {
      icon: Leaf,
      title: "Sustainability",
      text: "We integrate environmental stewardship into every single aspect of our work.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      text: "We operate with total transparency, honesty, and professional ethics at all times.",
    },
    {
      icon: Award,
      title: "Excellence",
      text: "We pursue the highest benchmarks in technical quality and client satisfaction.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      text: "We embrace modern practices, cutting-edge tech, and research-driven solutions.",
    },
    {
      icon: Users,
      title: "Community",
      text: "We place the well-being and prosperity of local communities at the heart of our designs.",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-leaf-900 selection:bg-leaf-200 antialiased">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-leaf-50 via-white to-white py-20 lg:py-28">
        {/* Decorative background blurs */}
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-leaf-100/50 blur-3xl" />
        <div className="absolute top-1/2 left-0 -z-10 h-72 w-72 rounded-full bg-leaf-200/30 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf-100 px-4 py-1.5 text-sm font-semibold text-leaf-800 mb-6 border border-leaf-200">
            <Leaf className="w-4 h-4 text-leaf-600" /> About Our Company
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-leaf-900 max-w-4xl mx-auto leading-tight">
            Green Leaves{" "}
            <span className="text-leaf-600 font-medium">
              Consulting Services
            </span>
          </h1>
          <p className="text-leaf-700 mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Accelerating Nepal’s transition to clean, reliable, and sustainable
            energy through evidence-based engineering, consultancy, and
            environmental advisory.
          </p>
        </div>
      </section>

      {/* 2. CORPORATE PROFILE & SYNERGY */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Main Story Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-leaf-600 font-bold uppercase tracking-wider text-sm mb-3">
              <Building2 className="w-4 h-4" /> Company Overview
            </div>
            <h2 className="text-4xl font-bold text-leaf-900 mb-6">
              Engineering a Greener Legacy for Nepal
            </h2>
            <p className="text-leaf-800 mb-5 leading-relaxed text-base text-xl">
              Green Leaves Consulting Services Pvt. Ltd. is a registered private
              limited company incorporated in Nepal on January 1, 2021, under
              the Companies Act, 2006.
            </p>
            <p className="text-leaf-800 mb-5 leading-relaxed text-base text-xl">
              Our multidisciplinary team brings together highly qualified
              professionals with deep, hands-on experience in solar and wind
              energy engineering, renewable energy project development, and
              complex environmental advisory.
            </p>
            <p className="text-leaf-800 leading-relaxed text-base text-xl">
              We collaborate tightly with developers, global institutions, and
              the progressive private sector to deploy realistic, high-impact,
              results-driven engineering frameworks.
            </p>
          </div>

          {/* Sister Company / Corporate Metadata Card */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-3xl bg-gradient-to-br from-leaf-800 to-leaf-900 p-8 text-white flex flex-col justify-between shadow-xl shadow-leaf-900/10 relative overflow-hidden">
              {/* Graphic element background overlay */}
              <div className="absolute -right-10 -bottom-10 text-leaf-700/20 text-[16rem] font-bold pointer-events-none select-none">
                RE
              </div>

              <div>
                <span className="bg-leaf-700 text-leaf-100 text-xs uppercase tracking-widest px-3 py-1 rounded-md font-semibold">
                  Institutional Strength
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3 text-leaf-50">
                  Sister Company of JDNE
                </h3>
                <p className="text-leaf-200 text-md leading-relaxed mb-6">
                  By drawing directly on the robust project management expertise
                  and foundational infrastructure of{" "}
                  <strong>Janda Devi Nepal Energy Pvt. Ltd. (JDNE)</strong>—one
                  of Nepal's premiere renewable energy project development and
                  EPC forces—we offer unmatched technical security.
                </p>
              </div>

              {/* Corporate Metadata Grid */}
              <div className="border-t border-leaf-700/60 pt-6 space-y-3.5 text-[14px] text-leaf-200">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-leaf-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white">
                      Headquarters Address
                    </span>
                    Ward No. 32, Jadibuti, Kathmandu Metropolitan City, Nepal
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Briefcase className="w-4 h-4 text-leaf-400 shrink-0" />
                  <div>
                    <span className="block font-medium text-white">
                      Tax Jurisdiction
                    </span>
                    Inland Revenue Office, Koteshwor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION SECTION */}
      <section className="bg-leaf-50/70 border-y border-leaf-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-leaf-100 flex gap-6 items-start">
              <div className="p-3 bg-leaf-100 text-leaf-700 rounded-xl shrink-0">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-leaf-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-leaf-800 text-lg md:text-base leading-relaxed">
                  To provide high-quality, evidence-based consultancy services
                  in solar, wind, and renewable energy that accelerate Nepal’s
                  transition to clean, reliable, and sustainable power, while
                  delivering lasting value to communities, businesses, and the
                  broader South Asian region.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-leaf-100 flex gap-6 items-start">
              <div className="p-3 bg-leaf-100 text-leaf-700 rounded-xl shrink-0">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-leaf-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-leaf-800 text-lg md:text-base leading-relaxed">
                  To be Nepal’s most trusted and impactful renewable energy
                  consultancy, recognized for transforming the nation’s energy
                  landscape through innovation, technology, and a deep
                  commitment to sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-leaf-900">Our Core Values</h2>
          <p className="text-leaf-600 mt-2 max-w-md mx-auto text-sm md:text-base">
            The foundational principles that guide every single analysis,
            project, and client interaction we anchor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {coreValues.map((value, i) => {
            const IconComponent = value.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white border border-leaf-100 hover:border-leaf-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-xl bg-leaf-50 flex items-center justify-center text-leaf-600 mb-5 group-hover:bg-leaf-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-leaf-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-leaf-700 text-[15px] leading-relaxed">
                    {value.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

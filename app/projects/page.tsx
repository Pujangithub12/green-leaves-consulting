"use client";

import { useState } from "react";
import {
  Briefcase,
  MapPin,
  Zap,
  Calendar,
  Layers,
  Sun,
  Network,
  Building,
} from "lucide-react";

// Project Data set selecting exactly 12 high-impact entries with mapped archetype image assets
const projectsData = [
  {
    id: 1,
    title: "Jhapa Solar PV Project",
    category: "utility",
    location: "Shivasatakshi, Jhapa",
    capacity: "12 MWp",
    status: "Completed (2023)",
    desc: "A utility-scale solar plant developed across 15.57 hectares, comprising 22,232 solar modules and two 5 MVA inverters. Connected directly to the NEA 33 kV grid infrastructure.",
    image: "image_agent_tag_6080529532816389333",
  },
  {
    id: 2,
    title: "Beldiya Solar Project",
    category: "utility",
    location: "Nawalpur",
    capacity: "12 MWp",
    status: "Ongoing",
    desc: "A grid-connected utility solar PV development engineered to generate over 20 GWh of clean electricity annually, stabilizing regional grid loads.",
    image: "image_agent_tag_6080529532816389333",
  },
  {
    id: 3,
    title: "Butwal Solar PV Project",
    category: "utility",
    location: "Tillottama, Rupandehi",
    capacity: "8.5 MW",
    status: "Completed",
    desc: "Large-scale generation plant spanning 17.2 hectares with 31,280 advanced solar modules. Power evacuated systematically via the 33 kV Amuwa Substation.",
    image: "image_agent_tag_6080529532816389333",
  },
  {
    id: 4,
    title: "Janaki Solar Project",
    category: "utility",
    location: "Banke",
    capacity: "6 MWp",
    status: "Ongoing",
    desc: "An ongoing grid-connected infrastructure project expected to generate over 10 GWh annually, reducing baseline transmission stress in western zones.",
    image: "image_agent_tag_6080529532816389333",
  },
  {
    id: 5,
    title: "Dabur Nepal Pvt. Ltd. Solar Setup",
    category: "rooftop",
    location: "Jeetpur Simara",
    capacity: "976 kWp",
    status: "Partially Completed",
    desc: "Features a 736 kWp active rooftop system yielding ~1,010 MWh annually, with a 240 kWp ground-mounted auxiliary array currently under system implementation.",
    image: "image_agent_tag_6080529532816391923",
  },
  {
    id: 6,
    title: "College of Medical Sciences Solar",
    category: "rooftop",
    location: "Bharatpur, Chitwan",
    capacity: "500 kWp",
    status: "Ongoing",
    desc: "Engineering and design of a high-capacity institutional rooftop framework expected to generate 682,460 kWh annually for medical operations.",
    image: "image_agent_tag_6080529532816391923",
  },
  {
    id: 7,
    title: "Hotel Holiday Inn Express Rooftop",
    category: "rooftop",
    location: "Naxal, Kathmandu",
    capacity: "60 kWp",
    status: "Completed (2026)",
    desc: "A premium grid-connected commercial array generating roughly 88,351 kWh annually, yielding significant operational savings for the hospitality asset.",
    image: "image_agent_tag_6080529532816391923",
  },
  {
    id: 8,
    title: "Galaxy Garden Resort Solar",
    category: "rooftop",
    location: "Bharatpur",
    capacity: "100 kWp",
    status: "Ongoing",
    desc: "A targeted rooftop deployment engineered to produce 169,755 kWh annually, optimized for a calculated financial payback period under three years.",
    image: "image_agent_tag_6080529532816391923",
  },
  {
    id: 9,
    title: "Shanta Complex Solar Plant",
    category: "rooftop",
    location: "Putalisadak, Kathmandu",
    capacity: "50.7 kWp",
    status: "Completed (2024)",
    desc: "High-density urban rooftop engineering generating 73.81 MWh annually, mitigating long-term peak electricity tariffs within a commercial hub.",
    image: "image_agent_tag_6080529532816391923",
  },
  {
    id: 10,
    title: "33 kV Transmission Line (Butwal)",
    category: "grid",
    location: "Butwal Power Plant",
    capacity: "Single Circuit",
    status: "Completed",
    desc: "Full structural route mapping, easement advisory, and physical development of a 33 kV single circuit link for total integration of the solar asset.",
    image: "image_agent_tag_6080529532816390628",
  },
  {
    id: 11,
    title: "33 kV Bay — Amuwa Substation",
    category: "grid",
    location: "Tinahu River Basin",
    capacity: "Substation Bay",
    status: "Completed",
    desc: "Turnkey advisory and technical delivery of a dedicated 33 kV substation bay layout, enabling secure power evacuation across vulnerable geographical basins.",
    image: "image_agent_tag_6080529532816390628",
  },
  {
    id: 12,
    title: "33 kV Beldiya–Mukundapur Line",
    category: "grid",
    location: "Nawalpur Corridor",
    capacity: "5.6 km Grid",
    status: "Completed",
    desc: "Structural engineering design, clearance configuration, and transmission network layouts connecting the Beldiya Solar arrays to the NEA Substation.",
    image: "image_agent_tag_6080529532816390628",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projectsData.filter(
    (p) => filter === "all" || p.category === filter,
  );

  return (
    <div className="bg-white min-h-screen text-leaf-900 selection:bg-leaf-100 antialiased">
      {/* 1. SECTION HEADER */}
      <section className="bg-gradient-to-b from-leaf-50 via-white to-white py-16 lg:py-20 border-b border-leaf-100/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf-100 px-3.5 py-1.5 text-xs font-semibold text-leaf-800 mb-4 border border-leaf-200">
            <Briefcase className="w-3.5 h-3.5 text-leaf-600" /> Track Record
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-leaf-900">
            Our Infrastructure{" "}
            <span className="text-leaf-600 font-medium">Portfolio</span>
          </h1>
          <p className="text-leaf-700 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Explore a selection of our premium engineering deployments, serving
            industrial clients, national grid assets, and utility-scale
            investors across Nepal.
          </p>

          {/* DYNAMIC FILTER MECHANISM */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 mt-10">
            {[
              { id: "all", label: "All Projects", icon: Layers },
              { id: "utility", label: "Utility-Scale Solar", icon: Sun },
              { id: "rooftop", label: "Commercial Rooftop", icon: Building },
              { id: "grid", label: "Grid & Transmission", icon: Network },
            ].map((btn) => {
              const Icon = btn.icon;
              const isActive = filter === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => setFilter(btn.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? "bg-leaf-900 text-white border-leaf-900 shadow-md shadow-leaf-950/10"
                      : "bg-white text-leaf-800 border-leaf-100 hover:border-leaf-300 hover:bg-leaf-50/50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. COMPREHENSIVE CARDS PORTFOLIO GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white border border-leaf-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-leaf-200 transition-all duration-300"
            >
              {/* Image Window */}
              <div className="h-52 w-full relative bg-leaf-50 overflow-hidden">
                <img
                  src={
                    project.image === "image_agent_tag_6080529532816389333"
                      ? "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR1fOuV8BNXeIMMKZ_09OZwLL3lCCkCh2dFMU5e7PpKuJKxcDmlaHsU_XYgH6hUjnS6BspyDh-KX5cAHJM"
                      : project.image === "image_agent_tag_6080529532816391923"
                        ? "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQJyjc6azCxWhw5gt8U7vDN1t5nNlw8xQnPr7cygdskMH2uBfkQTkc1nvRttSjyX7bfghvw1hbEBHFscZw"
                        : "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRi5NwcQ3CilROJw1XqY6bMaL1wk0G9X5S4VuMI_8S5XsuI7_J2SYjyh44lqpjZXspzrDsat-1YIkxfRWg"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Structural Overlay Tag */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-leaf-900 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase shadow-sm border border-leaf-100">
                  {project.category}
                </div>
              </div>

              {/* Data Text Layout Block */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-shadow-black mb-3 tracking-tight group-hover:text-leaf-700 transition-colors duration-150">
                    {project.title}
                  </h3>
                  <p className="text-shadow-black text-xs leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                {/* Bottom Technical Specifications Matrix */}
                <div className="border-t border-leaf-50 pt-4 mt-auto space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-medium text-leaf-800">
                    <span className="flex items-center gap-1.5 text-leaf-500">
                      <MapPin className="w-3.5 h-3.5" /> Location
                    </span>
                    <span className="text-right font-semibold text-leaf-900">
                      {project.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-medium text-leaf-800">
                    <span className="flex items-center gap-1.5 text-leaf-500">
                      <Zap className="w-3.5 h-3.5" /> Parameters
                    </span>
                    <span className="text-right font-bold text-leaf-600">
                      {project.capacity}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-medium text-leaf-800">
                    <span className="flex items-center gap-1.5 text-leaf-500">
                      <Calendar className="w-3.5 h-3.5" /> Execution
                    </span>
                    <span
                      className={`text-right font-semibold px-2 py-0.5 rounded ${
                        project.status.includes("Completed")
                          ? "bg-leaf-50 text-leaf-700"
                          : "bg-amber-50 text-amber-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

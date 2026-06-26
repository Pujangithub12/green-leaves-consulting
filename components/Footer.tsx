import Link from "next/link";
import { Leaf, MapPin, Mail, Building2 } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-leaf-900 text-leaf-100 mt-24 border-t border-leaf-800">
      {/* MAIN DATA GRID */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* BRAND COLUMN */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 text-white font-bold text-xl tracking-tight">
            <div className="p-1.5 rounded-lg bg-white border border-leaf-700">
              <Image
                          src="/green-leaves-consulting-logo.png" // 1. Use a static image file
                          alt="Green Leaves Logo"
                          width={40} // 3. Provide explicit width
                          height={40} // 4. Provide explicit height
                          className="w-16 h-16 object-contain group-hover:scale-105 transition-transform duration-300"
                        />  
            </div>
            <span>
              Green <span className="text-leaf-400 font-medium">Leaves</span>
            </span>
          </div>
          <p className="text-md text-leaf-200/90 leading-relaxed max-w-sm">
            Green Leaves Consulting Services Pvt. Ltd. provides evidence-based
            engineering, technical advisory, and compliance frameworks for
            grid-scale solar and wind developments across Nepal.
          </p>
          <div className="inline-flex items-center gap-1.5 pt-2 text-[14px] text-leaf-300 font-medium">
            <Building2 className="w-3.5 h-3.5 text-leaf-400" />
            <span>Sister Company of JDNE</span>
          </div>
        </div>

        {/* QUICK NAVIGATION LINKS */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
            Advisory Desk
          </h4>
          <ul className="space-y-3 text-md">
            {[
              { href: "/about", label: "Corporate Profile" },
              { href: "/services", label: "Core Capabilities" },
              { href: "/projects", label: "Project Portfolio" },
              { href: "/contact", label: "Request Consultation" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-leaf-200 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                >
                  <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-150 text-leaf-400">
                    &middot;
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CORPORATE CONTACT SPECS */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
            Headquarters
          </h4>
          <ul className="space-y-4 text-md text-leaf-200">
            <li className="flex items-start gap-2.5 leading-relaxed">
              <MapPin className="w-4 h-4 text-leaf-400 shrink-0 mt-0.5" />
              <span>
                Ward No. 32, Jadibuti,
                <br />
                Kathmandu Metropolitan City,
                <br />
                Kathmandu, Nepal
              </span>
            </li>
            <li className="flex items-center gap-2.5 break-all">
              <Mail className="w-4 h-4 text-leaf-400 shrink-0" />
              <a
                href="mailto:greenleavesconsultingservices@gmail.com"
                className="hover:text-white transition-colors"
              >
                greenleavesconsultingservices@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* REGULATORY & SOCIAL MEDIA */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
            Statutory & Media
          </h4>
          <p className="text-[14px] text-leaf-300/80 leading-relaxed mb-5">
            Incorporated under the Companies Act, 2006. Registered under Inland
            Revenue Office, Koteshwor Jurisdiction.
          </p>
          <div className="flex gap-2.5">
            {[
              { icon: FaLinkedinIn, url: "#" },
              { icon: FaXTwitter, url: "#" },
              { icon: FaFacebookF, url: "#" },
              { icon: FaInstagram, url: "#" },
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.url}
                  className="p-2.5 bg-leaf-800 hover:bg-leaf-700 hover:text-white rounded-xl text-leaf-200 transition-all duration-200 border border-leaf-700/50 shadow-sm"
                  aria-label="Social Link"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM LEGAL STRIP */}
      <div className="border-t border-leaf-800/80 py-6 bg-leaf-950/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-leaf-400">
          <div>
            © {new Date().getFullYear()} Green Leaves Consulting Services Pvt.
            Ltd. All rights reserved.
          </div>
          <div className="flex gap-4 text-[11px] text-leaf-400/70">
            <span>Reg No: Companies Act 2006</span>
            <span>&middot;</span>
            <span>Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { FaTwitter, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const footerLinks = {
  "Company Resources": [
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Case Studies", to: "/projects" },
    { label: "Pricing", to: "/pricing" },
    { label: "Blog", to: "/blog" },
  ],
  Connect: [
    { label: "Contact Us", to: "/contact" },
    { label: "LinkedIn", to: "#" },
    { label: "Twitter / X", to: "#" },
    { label: "GitHub", to: "#" },
  ],
};

const socialLinks = [
  { icon: <FaTwitter />, link: "#" },
  { icon: <FaGithub />, link: "#" },
  { icon: <FaLinkedin />, link: "#" },
  { icon: <FaFacebook />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
];

function MapCard() {
  return (
    <div className="relative w-full h-48 card-glass rounded-2xl overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Grid */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border-white/5"
            style={{
              left: `${(i % 4) * 25}%`,
              top: `${Math.floor(i / 4) * 50}%`,
              width: "25%",
              height: "50%",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          />
        ))}
      </div>

      {/* Location */}
      <div className="relative flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-[#C8FF57] flex items-center justify-center">
          <svg
            className="w-5 h-5 text-[#0D1117]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span className="text-white font-display font-semibold text-sm">
          Vastrapur, Ahmedabad
        </span>
        <span className="text-slate-500 text-xs">
          340 Pine Street, Suite 800
        </span>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-md bg-[#C8FF57] flex items-center justify-center">
                <span className="text-[#0D1117] font-display font-bold text-sm">
                  R
                </span>
              </span>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                Ronix<span className="text-[#C8FF57]">Solution</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              We build high-performance digital products that drive growth. From
              concept to deployment — we ship fast and ship right.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-display font-semibold text-sm mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Map */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-display font-semibold text-sm mb-4">
              Our Location
            </h4>
            <MapCard />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} RonixSolution. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms-of-service" className="hover:text-white transition">
              Terms of Service
            </a>
            <span>|</span>
            <a href="/cookie-policy" className="hover:text-white transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

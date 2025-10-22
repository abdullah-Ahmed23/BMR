import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { text: "Home", path: "/" },
      { text: "Services", path: "/services" },
      { text: "How It Works", path: "/how-it-works" },
      { text: "About", path: "/about" },
      { text: "Contact", path: "/contact" },
      { text: "FAQ", path: "/faq" },
    ],
    services: [
      { text: "Market Research & Brand Strategy", path: "/services#brand-strategy" },
      { text: "Brand Identity Design", path: "/services#brand-identity" },
      { text: "Social Media Management", path: "/services#social-media" },
      { text: "Web & App Development", path: "/services#web-dev" },
      { text: "Ad Campaigns", path: "/services#ad-campaigns" },
      { text: "Performance Analytics", path: "/services#analytics" },
    ],
    resources: [
      { text: "Case Studies", path: "/case-studies" },
      { text: "Blog", path: "/blog" },
      { text: "Free Strategy Call", path: "/strategy-call" },
    ],
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              BMRGrowth
            </h3>
            <p className="text-white/80 text-sm mb-6">
              Branding, Marketing & Revenue Growth. Building brands that dominate through strategic positioning, compelling design, and performance-driven marketing.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/bmrgrowth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/bmrgrowth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary-light transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/80 hover:text-primary-light transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/80 hover:text-primary-light transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@bmrgrowth.com"
                  className="text-sm text-white/80 hover:text-primary-light transition-colors flex items-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>hello@bmrgrowth.com</span>
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              © 2025 BMRGrowth. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-white/60 hover:text-primary-light transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-white/60 hover:text-primary-light transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

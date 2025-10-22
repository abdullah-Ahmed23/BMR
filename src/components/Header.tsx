import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { IoCloseCircle } from "react-icons/io5";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Services", path: "/services" },
    { text: "How It Works", path: "/how-it-works" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
    { text: "FAQ", path: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : isHomePage
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              BMRGrowth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-primary"
                    : isHomePage && !isScrolled
                    ? "text-white hover:text-white/90"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.text}
              </Link>
            ))}
            <Link to="/strategy-call">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Book a Strategy Call
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${
              isHomePage && !isScrolled ? "text-white" : "text-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="relative z-50 lg:hidden p-5 rounded-lg border-t border-border bg-background animate-slide-down">
              <IoCloseCircle className="absolute right-0 -top-[57px] text-[40px] cursor-pointer "   onClick={() => setIsMobileMenuOpen(false)} />

              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {link.text}
                  </Link>
                ))}
                <Link
                  to="/strategy-call"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-transform"
                  >
                    Book a Strategy Call
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

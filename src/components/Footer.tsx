import { Github, Linkedin, Mail, Twitter, MapPin, Phone } from "lucide-react";
import logoImage from "@/assets/Logo.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12 px-4 border-t border-border bg-gradient-to-b from-background to-primary-glow/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-1 flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm border border-primary/20">
                <img
                  src={logoImage}
                  alt="HousingHub Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold gradient-text">HousingHub</h3>
            </div>

            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Find your perfect PG or house with GPS-based discovery, verified owners, and secure payments.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Vadodara, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <a
                  href="tel:+911234567890"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  +91 9898236835
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Resources</h4>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="mailto:harshparmar.dev@gmail.com"
                className="hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Email HousingHub"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>

            </div>
            <p className="text-sm text-muted-foreground">
              Follow us for updates and housing tips!
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 md:pt-8 border-t border-border text-center text-xs md:text-sm text-muted-foreground">
          <p>© {currentYear} HousingHub. All rights reserved. Made with ❤️ by Harsh Parmar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

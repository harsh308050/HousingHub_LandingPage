import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@/assets/Logo.png";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { label: "Features", id: "features" },
        { label: "How It Works", id: "how-it-works" },
        { label: "Pricing", id: "pricing" },
        { label: "Testimonials", id: "testimonials" },
        { label: "FAQ", id: "faq" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("hero")}
                        className="flex items-center gap-2 group"
                        aria-label="HousingHub Home"
                    >
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-1 flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm border border-primary/20">
                            <img
                                src={logoImage}
                                alt="HousingHub Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="text-lg md:text-xl font-bold gradient-text">
                            HousingHub
                        </span>
                    </button>                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            variant="outline"
                            onClick={() => scrollToSection("pricing")}
                            className="border-2"
                        >
                            Get Started
                        </Button>
                        <Button onClick={() => window.open("https://drive.google.com/uc?export=download&id=14hoaeZXC2sYIAiwONUtJiveXC4mMu1dL", "_blank")} className="hover-glow">
                            Download App
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg"
                    >
                        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="flex flex-col gap-2 mt-4">
                                <Button
                                    onClick={() => window.open("https://drive.google.com/uc?export=download&id=14hoaeZXC2sYIAiwONUtJiveXC4mMu1dL", "_blank")}
                                    className="w-full hover-glow"
                                >
                                    Download App
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

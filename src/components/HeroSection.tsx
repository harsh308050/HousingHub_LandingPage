import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, MessageSquare, Play, Download } from "lucide-react";
import { motion } from "framer-motion";
import heroCityImage from "@/assets/hero-city.jpg";

const HeroSection = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary-glow/20"
    >
      {/* Hero City Background Image with Blend */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroCityImage})`,
          opacity: 0.15,
          mixBlendMode: 'luminosity',
        }}
      />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-primary-glow/40" />

      {/* Animated Glow Effects */}
      <div
        className={`absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl ${prefersReducedMotion ? "" : "animate-pulse"
          }`}
      />
      <div
        className={`absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent-violet/20 rounded-full blur-3xl ${prefersReducedMotion ? "" : "animate-pulse"
          }`}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.2, duration: prefersReducedMotion ? 0 : 0.8 }}
            className="inline-block mb-4 md:mb-6"
          >
            <Badge variant="secondary" className="py-2 px-4 text-sm glass-card">
              🎉 Now available
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.2, duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 gradient-text"
          >
            Find • Rent • Book
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.4, duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4"
          >
            GPS-based discovery. Verified owners. Bank-grade security.
            <br />
            <span className="text-base md:text-lg text-muted-foreground/80">
              Your perfect PG or house is just a tap away.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.6, duration: prefersReducedMotion ? 0 : 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-10 md:mb-16 px-4"
          >
            <Button
              size="lg"
              onClick={() => window.open("https://drive.google.com/uc?export=download&id=14hoaeZXC2sYIAiwONUtJiveXC4mMu1dL", "_blank")}
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 hover-glow group"
              aria-label="Download the HousingHub app"
            >
              <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Download App
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("how-it-works")}
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground group"
              aria-label="Watch how HousingHub works"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              See How It Works
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.8, duration: prefersReducedMotion ? 0 : 0.8 }}
            className="flex flex-wrap justify-center gap-3 md:gap-6 px-4"
          >
            <Badge variant="secondary" className="py-2 px-3 md:px-4 text-xs md:text-sm glass-card hover-glow">
              <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2" aria-hidden="true" />
              Verified Owners
            </Badge>
            <Badge variant="secondary" className="py-2 px-3 md:px-4 text-xs md:text-sm glass-card hover-glow">
              <Zap className="w-3 h-3 md:w-4 md:h-4 mr-2" aria-hidden="true" />
              Instant Booking
            </Badge>
            <Badge variant="secondary" className="py-2 px-3 md:px-4 text-xs md:text-sm glass-card hover-glow">
              <MessageSquare className="w-3 h-3 md:w-4 md:h-4 mr-2" aria-hidden="true" />
              24/7 Support
            </Badge>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {!prefersReducedMotion && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
          onClick={() => scrollToSection("stats")}
          aria-label="Scroll to next section"
        >
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </motion.button>
      )}
    </section>
  );
};

export default HeroSection;

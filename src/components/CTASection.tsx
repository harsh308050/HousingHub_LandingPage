import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, User } from "lucide-react";

const CTASection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="cta" className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-primary-glow/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent-violet/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-medium text-primary">🚀 Ready to get started?</span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">
            Start Your Housing Journey Today
          </h2>
          <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-7 px-4 max-w-2xl mx-auto">
            Join thousands of happy users finding their perfect home with verified listings,
            secure payments, and 24/7 support. Download now and get started in minutes!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-8">
            <Button
              size="lg"
              onClick={() => window.open("https://drive.google.com/uc?export=download&id=14hoaeZXC2sYIAiwONUtJiveXC4mMu1dL", "_blank")}
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 hover-glow group"
              aria-label="Download the HousingHub mobile app"
            >
              <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Download App
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              ✓ Free to download
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              ✓ No credit card required
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              ✓ Available on iOS & Android
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

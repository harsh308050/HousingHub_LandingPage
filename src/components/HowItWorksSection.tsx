import { motion } from "framer-motion";
import { MapPin, Filter, MessageSquare, FileText, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  { icon: MapPin, title: "Search Smart", description: "GPS finds nearby properties" },
  { icon: Filter, title: "Filter Precisely", description: "Choose by price & amenities" },
  { icon: MessageSquare, title: "Chat Directly", description: "Message owners instantly" },
  { icon: FileText, title: "Upload Docs", description: "Submit documents once" },
  { icon: CreditCard, title: "Pay Securely", description: "Complete via Razorpay" },
  { icon: CheckCircle, title: "Get Confirmed", description: "Receive PDF receipt" },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-20 px-4 bg-gradient-to-b from-primary-glow/10 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 gradient-text">
            How It Works
          </h2>
          <p className="text-base md:text-xl text-muted-foreground px-4">
            Six simple steps to your new home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-4 md:p-6 glass-card rounded-2xl hover-glow transition-all duration-300 hover:scale-105"
            >
              <div className="relative mb-4 md:mb-6">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <step.icon className="w-7 h-7 md:w-8 md:h-8 text-white" aria-hidden="true" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 rounded-full bg-accent text-white text-xs md:text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

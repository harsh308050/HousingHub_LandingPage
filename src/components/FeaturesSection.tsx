import { motion } from "framer-motion";
import { MapPin, Zap, CreditCard, MessageSquare, Shield, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: MapPin,
    title: "GPS Discovery",
    description: "Find properties near you instantly",
    gradient: "from-primary to-primary-variant",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Book in minutes, not hours",
    gradient: "from-primary-variant to-accent",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Bank-grade security",
    gradient: "from-accent to-success",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Chat",
    description: "Direct owner communication",
    gradient: "from-success to-warning",
  },
  {
    icon: Shield,
    title: "Verified Owners",
    description: "Government ID verified",
    gradient: "from-warning to-destructive",
  },
  {
    icon: FileText,
    title: "PDF Receipts",
    description: "Auto-generated confirmations",
    gradient: "from-destructive to-accent-violet",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-12 md:py-20 px-4 bg-gradient-to-b from-background to-primary-glow/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 gradient-text">
            Powerful Features
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Everything you need for seamless housing discovery and booking
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="h-full"
            >
              <Card className="glass-card hover-glow h-full group cursor-pointer transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-2.5 md:p-3 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg md:text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

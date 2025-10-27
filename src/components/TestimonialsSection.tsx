import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Student, Delhi University",
    text: "The GPS feature is a game-changer! Found a PG near my college in minutes. The verification process gave me confidence, and the real-time chat made everything so easy. Highly recommend!",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Rahul Verma",
    role: "IT Professional, Bangalore",
    text: "I've used multiple housing apps, but HousingHub stands out. Uploading documents once and using them for all bookings saved me hours. The payment process is seamless and secure.",
    rating: 5,
    initials: "RV",
  },
  {
    name: "Anjali Patel",
    role: "Property Owner, Mumbai",
    text: "As an owner, the dashboard is incredibly intuitive. Managing bookings, chatting with tenants, and tracking payments—all in one place. Best investment for my rental business!",
    rating: 5,
    initials: "AP",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 md:py-20 px-4 bg-gradient-to-b from-primary-glow/10 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 gradient-text">
            Loved by Users
          </h2>
          <p className="text-base md:text-xl text-muted-foreground px-4">
            Real feedback from our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover-glow h-full transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" aria-hidden="true" />

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" aria-hidden="true" />
                    ))}
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground mb-6 flex-1 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 md:w-12 md:h-12">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-bold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-base md:text-lg">{testimonial.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

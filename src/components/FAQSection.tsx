import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How does GPS-based property discovery work?",
        answer:
            "Our app uses your device's GPS to show you verified PGs and houses within your desired radius. You can filter by distance, price range, amenities, and more. Properties are updated in real-time, ensuring you see the latest available options near your location.",
    },
    {
        question: "Is my payment information secure?",
        answer:
            "Absolutely! We use Razorpay, a PCI-DSS compliant payment gateway with bank-grade encryption. Your payment details are never stored on our servers. All transactions are processed through secure, encrypted channels with multi-layer authentication.",
    },
    {
        question: "How are property owners verified?",
        answer:
            "Every owner must complete government ID verification (Aadhaar/PAN) and property ownership proof before listing. We also verify contact details via OTP. Our team manually reviews each listing to ensure authenticity and quality standards.",
    },
    {
        question: "Can I communicate with owners directly?",
        answer:
            "Yes! Our built-in real-time chat allows you to message owners instantly. You can discuss property details, negotiate terms, schedule visits, and clarify doubts—all within the app. We also support voice calls and video tours for select properties.",
    },
    {
        question: "What happens if I need to cancel my booking?",
        answer:
            "Cancellation policies vary by property. Most owners offer free cancellation up to 24-48 hours before move-in. You can review the specific policy before booking. Refunds are processed within 5-7 business days to your original payment method.",
    },
    {
        question: "How do I upload and manage my documents?",
        answer:
            "Upload your ID proof, photos, and other documents once in your profile. When booking, select from your saved documents or upload new ones. All files are encrypted and stored securely. You can update or delete documents anytime from your account settings.",
    },

];

const FAQSection = () => {
    return (
        <section id="faq" className="py-12 md:py-20 px-4 bg-gradient-to-b from-primary-glow/10 to-background">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 gradient-text">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base md:text-xl text-muted-foreground px-4">
                        Everything you need to know about HousingHub
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="glass-card p-4 md:p-8 rounded-2xl"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-10 md:mt-12"
                >
                    <p className="text-muted-foreground mb-4">Still have questions?</p>
                    <a
                        href="mailto:support@housinghub.com"
                        className="text-primary hover:text-primary-variant underline font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                        Contact our support team
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Home, MapPin, Star } from "lucide-react";

interface StatItemProps {
    icon: React.ElementType;
    end: number;
    label: string;
    suffix?: string;
    prefix?: string;
}

const StatItem = ({ icon: Icon, end, label, suffix = "", prefix = "" }: StatItemProps) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const duration = 2000; // 2 seconds

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 md:p-8 glass-card rounded-2xl hover-glow transition-all duration-300 hover:scale-105"
        >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" aria-hidden="true" />
            </div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {prefix}{count.toLocaleString()}{suffix}
            </div>
            <p className="text-sm md:text-base text-muted-foreground">{label}</p>
        </motion.div>
    );
};

const StatsSection = () => {
    const stats = [
        { icon: Users, end: 50000, label: "Happy Users", suffix: "+" },
        { icon: Home, end: 10000, label: "Properties Listed", suffix: "+" },
        { icon: MapPin, end: 150, label: "Cities Covered", suffix: "+" },
        { icon: Star, end: 4.8, label: "Average Rating", suffix: "/5" },
    ];

    return (
        <section id="stats" className="py-12 md:py-20 px-4 bg-gradient-to-b from-background to-primary-glow/10">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 gradient-text">
                        Trusted by Thousands
                    </h2>
                    <p className="text-base md:text-xl text-muted-foreground px-4">
                        Join our growing community of happy renters and owners
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <StatItem key={index} {...stat} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default StatsSection;

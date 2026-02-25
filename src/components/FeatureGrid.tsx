import { Eye, Mic, ScanFace, Fence, Activity, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Eye className="w-8 h-8" />,
        title: "5MP Full HD Pro",
        desc: "Crystalline 2880×1624 resolution with next-gen sensor for unmatched detail in every frame."
    },
    {
        icon: <Fence className="w-8 h-8" />,
        title: "Electronic Fence",
        desc: "Draw custom polygon zones. Get instant alerts if anyone enters or exits protected areas."
    },
    {
        icon: <ScanFace className="w-8 h-8" />,
        title: "AI Face Detection",
        desc: "Advanced facial recognition algorithms ensure clear identification without overexposure."
    },
    {
        icon: <Activity className="w-8 h-8" />,
        title: "Human Tracking",
        desc: "Intelligent auto-tracking follows human movement seamlessly across the field of view."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Passenger Flow",
        desc: "Built-in statistics to count people entering and exiting, perfect for business intelligence."
    },
    {
        icon: <Mic className="w-8 h-8" />,
        title: "Dual-Way Voice",
        desc: "Crystal clear audio two-way communication with customizable voice broadcast alarms."
    }
];

export default function FeatureGrid() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-black text-intex-dark mb-4 uppercase tracking-tighter font-sans">
                        Advanced AI Surveillance
                    </h2>
                    <div className="w-20 h-1.5 bg-intex-blue mx-auto rounded-full mb-6" />
                    <p className="text-gray-600 text-lg font-medium font-inter">
                        Experience the power of Intelligent Security. The Intex Pro series brings enterprise-grade AI applications to your home and business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-intex-blue shadow-sm mb-6 group-hover:bg-intex-blue group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-black text-intex-dark mb-3 underline decoration-intex-blue/0 group-hover:decoration-intex-blue transition-all uppercase tracking-tight font-sans">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm font-medium font-inter">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { useState } from 'react';

export default function CollectionSEOContent() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const faqs = [
        { q: "What does CCTV stand for?", a: "The full form of CCTV is closed-circuit television." },
        { q: "Can you tell me which type of CCTV camera is the best?", a: "The answer depends on your requirements. The best CCTV provides security for the location you want covered and aligns with your budget. Dome cameras are great indoors; Bullet cameras are ideal outdoors." },
        { q: "Which is the best security camera for home?", a: "Choose dome cameras for indoor use. For gates, gardens, and outdoor locations, choose bullet cameras." },
        { q: "Is it better to have wired or wireless security cameras?", a: "Wireless cameras are convenient but costly and limited by cloud storage and network instability. Wired cameras offer stronger LAN connections, longer life (5-7 years), and reliable live monitoring." },
        { q: "Can CCTV cameras work without internet connection?", a: "Yes. CCTV cameras can record to an SD card or hard drive and function without internet." },
        { q: "Can CCTV work without electricity?", a: "No. CCTV cameras require electricity to operate." },
        { q: "Which is the best security camera without a subscription?", a: "Intex CCTV cameras do not require any subscription." },
        { q: "How can I buy CCTV online?", a: "To buy online, scroll up to the CCTV cameras section and pick the one that fits your needs. You can also speak to our representative at +91-9355-596-674." }
    ];

    return (
        <div className="bg-white py-16 font-sans">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-12 text-center mb-20">
                <h2 className="text-[42px] leading-tight font-black text-gray-900 mb-6 tracking-tight">
                    Best CCTV Cameras in India
                </h2>
                <p className="text-sm font-medium text-gray-600">
                    Intex Technologies — Smart, reliable & made-in-India security and surveillance solutions.
                </p>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 lg:px-12 space-y-24">
                {/* What Is CCTV Section */}
                <div className="space-y-6 max-w-7xl">
                    <h3 className="text-[28px] font-black text-gray-900 tracking-tight">What Is CCTV?</h3>
                    <div className="space-y-4 text-sm font-medium text-gray-600 leading-relaxed max-w-7xl">
                        <p>
                            The word CCTV, meaning video surveillance, stands for closed-circuit television. CCTV surveillance ensures protection for people and their properties.
                        </p>
                        <p>
                            Previously, mostly big companies and public places, like streets or railway platforms, had CCTVs installed. With security camera footage spilling more and more truth over time, surveillance cameras security has today become a necessity for every home, apartment, and living space as well.
                        </p>
                        <p>
                            Those of you who want to stay connected to people and places you care about, no matter the distance, investing in the best security cameras is a smart move.
                        </p>
                        <p className="font-black text-gray-900 pt-2 cursor-pointer hover:text-red-600 transition-colors uppercase tracking-wider text-[11px]">
                            Read Blog: Top 5 Features to Look for Before Buying a CCTV Camera
                        </p>
                    </div>
                </div>

                {/* Intex CCTV Cameras Secure Section */}
                <div className="space-y-8 max-w-7xl">
                    <h3 className="text-[28px] font-black text-gray-900 tracking-tight">Intex CCTV Cameras Secure Your Home & Office</h3>
                    <div className="space-y-6">
                        <p className="text-sm font-medium text-gray-600 leading-relaxed max-w-7xl">
                            Your search for the most reliable and affordable security cameras for homes and offices in India ends here. Perfect as home security cameras and business security cameras, our made-in-India CCTV cameras are designed to be the best surveillance cameras systems that:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                            {[
                                "Let you view every corner with multi-camera coverage and crystal-clear footage.",
                                "Connect seamlessly through high-speed LAN for stable performance.",
                                "Offer smarter security at the lowest human detection CCTV price.",
                                "Deliver trusted quality from a reliable CCTV camera brand.",
                                "Pair effortlessly with Intex NVRs/DVRs (video recorders*).",
                                "Ensure accurate color tone and brightness at all hours.",
                                "Enjoy nonstop surveillance with battery backup.",
                                "Are backed by 500+ service centers across India."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start space-x-3 text-sm font-medium text-gray-600 leading-relaxed">
                                    <div className="w-1.5 h-1.5 bg-black mt-1.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-[11px] italic font-medium text-gray-500 pt-2">
                            *Enjoy AI Instrastream with Intex DVRs and NVRs – store, manage, and review your CCTV footage in real time with smart AI-assisted monitoring.
                        </p>
                    </div>
                </div>

                {/* Comparison Section */}
                <div className="space-y-8 max-w-7xl">
                    <h3 className="text-[28px] font-black text-gray-900 tracking-tight">Which Type Of CCTV Camera Is Best For You?</h3>
                    <p className="text-sm font-medium text-gray-600 leading-relaxed max-w-7xl">
                        Choosing the right CCTV will ensure your care goes beyond your presence. At Intex, we offer two main types of CCTV cameras – Dome and Bullet, both wired. Being wired means stronger LAN connectivity and expanded storage capacity.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-100">
                            <thead>
                                <tr className="bg-white border-b border-gray-100">
                                    <th className="p-4 text-left text-xs font-black uppercase tracking-widest text-gray-900">Camera Type</th>
                                    <th className="p-4 text-left text-xs font-black uppercase tracking-widest text-gray-900">Ideal Location</th>
                                    <th className="p-4 text-left text-xs font-black uppercase tracking-widest text-gray-900">Connection Type</th>
                                    <th className="p-4 text-left text-xs font-black uppercase tracking-widest text-gray-900">Best For</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-medium text-gray-600">
                                <tr className="border-b border-gray-100">
                                    <td className="p-4 font-bold text-gray-900">Dome CCTV Cameras</td>
                                    <td className="p-4 leading-relaxed">Indoors – living rooms, offices, hallways, shops, tuition centres</td>
                                    <td className="p-4">Wired</td>
                                    <td className="p-4 leading-relaxed">Indoor spaces like living rooms, offices, and shops. Monitoring pets, children, or valuables inside your home. Areas with regular movement where 360° visibility helps.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-gray-900">Bullet CCTV Cameras</td>
                                    <td className="p-4 leading-relaxed">Outdoors – building entrances, driveways, parking areas, gates</td>
                                    <td className="p-4">Wired</td>
                                    <td className="p-4 leading-relaxed">Outdoor locations like gates, parking areas, and building entrances. Long-distance monitoring such as driveways or open fields. Low-light zones needing clear footage even at night.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 5 Reasons Section */}
                <div className="space-y-8 max-w-7xl">
                    <h3 className="text-[28px] font-black text-gray-900 tracking-tight">5 Reasons Why You Should Invest in CCTV Cameras</h3>
                    <p className="text-sm font-medium text-gray-600 leading-relaxed max-w-7xl mb-8">
                        Installing CCTV cameras ensures safety, reduces risk, and protects your property effectively.
                    </p>
                    <div className="space-y-6">
                        {[
                            { t: "Behind Your Back Is Always In Front Of Your Eyes:", d: "Whether it’s checking on kids, pets, or staff, you are always aware." },
                            { t: "Insurance Premiums Savings:", d: "Properties with CCTV are safer. Many insurers offer lower premiums when your home or office is monitored." },
                            { t: "All Evidence Secured:", d: "Cameras record everything. Footage can help in disputes, accidents, or theft claims. It acts as proof for police or insurance." },
                            { t: "Stop Thieves, Stop Threats:", d: "Visible cameras act as a warning. CCTV cameras keep intruders away by showing they are being watched." },
                            { t: "Convenience & You!:", d: "Watch live or recorded footage on your phone or computer anytime you want." }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start space-x-3 text-sm leading-relaxed">
                                <span className="font-black text-gray-900 flex-shrink-0">{i + 1}.</span>
                                <p className="font-medium text-gray-600">
                                    <span className="font-black text-gray-900 mr-2">{item.t}</span>
                                    {item.d}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* People Also Ask Section */}
                <div className="space-y-8 max-w-7xl pb-24 border-b border-gray-100">
                    <h3 className="text-[28px] font-black text-gray-900 tracking-tight">People Also Ask</h3>
                    <div className="space-y-4">
                        {faqs.map((item, i) => (
                            <div key={i} className="border-b border-gray-50 last:border-0 pb-4">
                                <button
                                    onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                                    className="flex items-center w-full text-left text-sm font-bold text-gray-900 cursor-pointer group py-2"
                                >
                                    <div className={`w-1.5 h-1.5 border-t-2 border-r-2 border-gray-900 transition-transform duration-300 mr-3 mt-0.5 ${expandedIndex === i ? 'rotate-[135deg]' : 'rotate-45'}`} />
                                    {item.q}
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedIndex === i ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-sm font-medium text-gray-600 pl-4 leading-relaxed">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="font-black text-gray-900 pt-6 cursor-pointer hover:text-red-600 transition-colors uppercase tracking-wider text-[11px]">
                        Read Blog: Top 5 Features to Look for Before Buying a CCTV Camera
                    </p>
                </div>
            </div>
        </div>
    );
}

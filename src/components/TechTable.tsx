export default function TechTable() {
    const specs = [
        { label: "Model Name", value: "IP Bullet 5MP Pro Outdoor Intelligent Camera" },
        { label: "Resolution", value: "5MP Full HD (2880 × 1624)" },
        { label: "AI Applications", value: "Electronic Fence, Human Tracking, Face Detection, Flow Statistics" },
        { label: "Night Vision", value: "Black light full-color, Intelligent dual light, IR mode" },
        { label: "Video Compression", value: "H.265 / H.264 High Profile" },
        { label: "Image Settings", value: "WDR, DWDR, Auto White Balance, Backlight Compensation" },
        { label: "Storage Support", value: "MicroSD up to 512GB, NVR recording supported" },
        { label: "Network Protocol", value: "ONVIF, P2P, CGI, HTTP, TCP/IP, IPv4, RTSP" },
        { label: "Interface", value: "RJ-45 10M/100M Auto-adaptive Ethernet" },
        { label: "Operating Temp", value: "-20°C to 60°C (-4°F to 140°F)" }
    ];

    return (
        <section id="specs" className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-intex-dark mb-4 uppercase tracking-tight">Full Specifications</h2>
                    <p className="text-gray-600 font-medium">Technical excellence in every detail.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                    <table className="w-full text-left table-fixed">
                        <thead>
                            <tr className="bg-intex-blue text-white">
                                <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest w-1/3">Feature</th>
                                <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest">Detail</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {specs.map((spec, index) => (
                                <tr key={index} className="hover:bg-blue-50/80 transition-all group even:bg-gray-50/50">
                                    <td className="px-8 py-5 text-sm font-bold text-intex-dark group-hover:text-intex-blue transition-colors">
                                        {spec.label}
                                    </td>
                                    <td className="px-8 py-5 text-sm text-gray-600 leading-relaxed italic">
                                        {spec.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 p-8 bg-white rounded-2xl border-l-8 border-intex-blue shadow-lg flex items-start space-x-6">
                    <div className="bg-intex-blue/10 p-3 rounded-xl">
                        <svg className="w-8 h-8 text-intex-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-intex-dark mb-1">Compliance & Compatibility</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Fully ONVIF compliant for seamless integration with third-party NVRs. Supports Intex Smart App on iOS 12+ and Android 8.0+. High-performance H.265 compression reduces bandwidth by 50%.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

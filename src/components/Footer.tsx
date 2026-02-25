import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
    onNavigate?: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
    const footerLinks = [
        {
            title: "COMPANY",
            links: [
                { name: "About Us", view: "company-about" },
                { name: "Read Our Blog", view: "company-blog" },
                { name: "Our Milestones", view: "company-milestones" },
                { name: "International", view: "company-international" },
                { name: "Terms & Conditions", view: "company-terms" },
                { name: "Corporate Investor", view: "company-investor" }
            ]
        },
        {
            title: "SHOP",
            links: [
                { name: "IP Cameras", view: "landing" },
                { name: "HD Cameras", view: "landing" },
                { name: "PTZ Cameras", view: "landing" },
                { name: "NVR & DVR Systems", view: "landing" },
                { name: "Biometrics & Access", view: "landing" }
            ]
        },
        {
            title: "HELP",
            links: [
                { name: "FAQs", view: "help-faqs" },
                { name: "Contact Us", view: "help-contact" },
                { name: "Bulk Enquiry", view: "help-enquiry" },
                { name: "Careers", view: "help-careers" },
                { name: "Support", view: "help-support" }
            ]
        },
        {
            title: "SERVICES",
            links: [
                { name: "Installation Request", view: "services-installation" },
                { name: "Online Complaint", view: "services-complaint" },
                { name: "Register A Product", view: "services-register" }
            ]
        }
    ];

    return (
        <footer className="bg-[#f0f2f5] pt-16 pb-8 font-sans">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-6 mb-16">
                    {footerLinks.map((column, idx) => (
                        <div key={idx} className="space-y-6">
                            <h4 className="text-[14px] font-black text-[#555] uppercase tracking-wider mb-8">
                                {column.title}
                            </h4>
                            <ul className="space-y-3">
                                {column.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <button
                                            onClick={() => onNavigate && onNavigate(link.view)}
                                            className="text-[13px] font-medium text-[#777] hover:text-red-600 transition-colors text-left"
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Info Section */}
                    <div className="col-span-2 space-y-8 lg:pl-10">
                        <div className="space-y-4">
                            <h4 className="text-[14px] font-black text-[#555] tracking-widest leading-tight">
                                Intex Technologies.
                            </h4>

                            <div className="space-y-4 pt-2">
                                <div>
                                    <p className="text-[13px] font-black text-[#555] mb-1">For Sales Enquiry:</p>
                                    <p className="text-[13px] font-medium text-red-600 font-black">+91-9355-596-674</p>
                                </div>

                                <div>
                                    <p className="text-[13px] font-black text-[#555] mb-1">For Customer Support:</p>
                                    <p className="text-[13px] font-medium text-[#777]">0120-489-5555</p>
                                </div>

                                <div>
                                    <p className="text-[13px] font-black text-[#555] mb-1">Corporate Office:</p>
                                    <p className="text-[12px] font-medium text-[#777] leading-relaxed">
                                        A-61, Pocket D, Okhla Phase II, <br />
                                        Okhla Industrial Estate, New <br />
                                        Delhi, Delhi 110020
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-2">
                            <h4 className="text-[12px] font-black text-[#555] uppercase tracking-widest">FOLLOW US</h4>
                            <div className="flex space-x-4">
                                <Facebook className="w-4 h-4 text-[#777] hover:text-blue-600 transition-colors cursor-pointer" />
                                <Twitter className="w-4 h-4 text-[#777] hover:text-blue-400 transition-colors cursor-pointer" />
                                <Instagram className="w-4 h-4 text-[#777] hover:text-pink-600 transition-colors cursor-pointer" />
                                <Linkedin className="w-4 h-4 text-[#777] hover:text-blue-800 transition-colors cursor-pointer" />
                                <Youtube className="w-4 h-4 text-[#777] hover:text-red-600 transition-colors cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 flex justify-between items-center text-[10px] uppercase font-black text-[#333] tracking-widest">
                    <div className="flex space-x-2">
                        <span>Copyright © 2026, Intex Technologies.</span>
                        <span className="text-gray-400 font-medium">Site Credit</span>
                    </div>
                    <div className="cursor-pointer hover:text-red-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
}

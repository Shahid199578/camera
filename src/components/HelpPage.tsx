import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Props {
    activeTab: string;
}

const TABS = [
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'enquiry', label: 'Bulk Enquiry' },
    { id: 'careers', label: 'Careers' },
    { id: 'support', label: 'Support' }
];

export default function HelpPage({ activeTab }: Props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeTab]);

    return (
        <div className="bg-[#f8f9fa] min-h-screen py-16 font-sans">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-12">

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-3xl lg:text-4xl font-black uppercase text-gray-900 tracking-tight">Help Center</h1>
                    <div className="h-1 w-16 bg-red-600 mt-4" />
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Sidebar Navigation */}
                    <div className="w-full lg:w-1/4 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-[160px]">
                        <nav className="flex flex-col">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => window.location.hash = `help-${tab.id}`}
                                    className={`flex items-center justify-between p-5 text-left transition-colors border-b border-gray-50 last:border-0 ${activeTab === tab.id
                                        ? 'bg-red-50 text-red-600 border-l-4 border-l-red-600'
                                        : 'text-gray-600 hover:bg-gray-50 border-l-4 border-l-transparent'
                                        }`}
                                >
                                    <span className="font-bold text-sm tracking-wide">{tab.label}</span>
                                    <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === tab.id ? 'translate-x-1' : ''}`} />
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-3/4 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12 min-h-[600px]">
                        <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">
                            {TABS.find(t => t.id === activeTab)?.label || 'FAQs'}
                        </h2>

                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-600 leading-relaxed text-[15px] mb-8">
                                How can we help you with {TABS.find(t => t.id === activeTab)?.label}?
                            </p>

                            {activeTab === 'faqs' && <FaqSection />}
                            {activeTab === 'contact' && <ContactForm />}
                            {activeTab === 'enquiry' && <EnquiryForm />}
                            {activeTab === 'careers' && <CareersSection />}
                            {activeTab === 'support' && <SupportSection />}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

// --- TAB COMPONENTS ---

function FaqSection() {
    const faqs = [
        { q: "What is the warranty period for Intex Security Cameras?", a: "Intex offers a standard 1-year manufacturing warranty on all IP and AHD CCTV cameras. Extended warranty options are available at the time of purchase." },
        { q: "Do you provide installation services?", a: "Yes, we provide professional installation services across major cities in India. You can book an installation request directly through our Services page." },
        { q: "How do I claim warranty or register a complaint?", a: "You can register your product and lodge complaints online through the Services section on our website. Our support team will contact you within 24-48 hours." },
        { q: "Are Intex cameras compatible with third-party NVRs?", a: "Most of our IP cameras support the ONVIF protocol, ensuring broad compatibility with standard third-party NVR systems. Please check specific product specifications for details." },
        { q: "Do you offer bulk discounts for commercial projects?", a: "Yes, we have a dedicated B2B division for large-scale enterprise, residential society, and commercial installations. Please submit a Bulk Enquiry for specialized pricing." }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-100 rounded-xl overflow-hidden">
                    <button
                        className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <span className="font-bold text-gray-900 text-sm tracking-wide">{faq.q}</span>
                        <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${openIndex === index ? 'rotate-90' : ''}`} />
                    </button>
                    {openIndex === index && (
                        <div className="p-5 pt-0 bg-white text-gray-600 text-[14px] leading-relaxed border-t border-gray-50">
                            {faq.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

function ContactForm() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Get in Touch</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Name *</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3.5 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Email Address *</label>
                        <input type="email" className="w-full bg-gray-50 border border-gray-200 p-3.5 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Message *</label>
                        <textarea className="w-full bg-gray-50 border border-gray-200 p-3.5 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors min-h-[120px]" required />
                    </div>
                    <button type="submit" className="bg-red-600 text-white px-8 py-3.5 font-black uppercase text-[12px] tracking-widest hover:bg-red-700 transition-colors w-full">
                        Send Message
                    </button>
                </form>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 h-fit">
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">Contact Information</h3>

                <div className="space-y-6">
                    <div>
                        <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-1.5">Corporate Office</p>
                        <p className="text-[13px] font-medium text-gray-900 leading-relaxed">
                            A-61, Pocket D, Okhla Phase II,<br />
                            Okhla Industrial Estate, New Delhi,<br />
                            Delhi 110020
                        </p>
                    </div>

                    <div>
                        <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-1.5">Sales Enquiry</p>
                        <p className="text-[14px] font-black text-red-600">+91-9355-596-674</p>
                    </div>

                    <div>
                        <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-1.5">Customer Support</p>
                        <p className="text-[14px] font-black text-gray-900">0120-489-5555</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function EnquiryForm() {
    return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="bg-red-50 border border-red-100 p-5 rounded-xl mb-8">
                <p className="text-sm text-red-800 font-medium">
                    Please provide detailed requirements for your commercial or bulk deployment. Our B2B sales team will contact you within 24 hours.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Company / Org Name *</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" required />
                </div>
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Contact Person *</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" required />
                </div>
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Phone Number *</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" required />
                </div>
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Email Address *</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" required />
                </div>
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Requirement Category *</label>
                    <select className="w-full bg-gray-50 border border-gray-200 p-4 text-sm text-gray-600 focus:border-red-600 focus:ring-0 outline-none transition-colors" required>
                        <option value="">Select Category</option>
                        <option value="cctv">CCTV Cameras (IP/AHD)</option>
                        <option value="nvr">NVR/DVR Systems</option>
                        <option value="biometrics">Biometrics & Access Control</option>
                        <option value="complete">Complete Security Solution</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Estimated Quantity</label>
                    <input type="number" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" placeholder="e.g. 50" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Project Details *</label>
                <textarea className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors min-h-[120px]" placeholder="Describe your installation scope and specific requirements..." required />
            </div>

            <button type="submit" className="bg-red-600 text-white px-10 py-4 font-black uppercase text-[12px] tracking-widest hover:bg-red-700 transition-colors w-full md:w-auto">
                Submit Enquiry
            </button>
        </form>
    );
}

function CareersSection() {
    const roles = [
        { title: "Senior Embedded Engineer", dept: "R&D", location: "New Delhi", type: "Full-time" },
        { title: "Area Sales Manager (B2B)", dept: "Sales", location: "Mumbai", type: "Full-time" },
        { title: "Technical Support Executive", dept: "Customer Service", location: "Noida", type: "Full-time" }
    ];

    return (
        <div className="space-y-8">
            <div className="prose prose-gray max-w-none">
                <p>Join India's leading security and surveillance brand. We are always looking for passionate innovators to help secure the nation with cutting-edge technology.</p>
            </div>

            <div className="space-y-4">
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Current Openings</h3>

                {roles.map((role, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-gray-100 rounded-xl hover:border-red-200 hover:shadow-md transition-all">
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg">{role.title}</h4>
                            <div className="flex flex-wrap gap-3 mt-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                <span className="bg-gray-100 px-2.5 py-1 rounded">{role.dept}</span>
                                <span className="bg-gray-100 px-2.5 py-1 rounded">{role.location}</span>
                                <span className="bg-gray-100 px-2.5 py-1 rounded">{role.type}</span>
                            </div>
                        </div>
                        <button className="mt-4 md:mt-0 px-6 py-2.5 bg-gray-900 text-white text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-colors rounded">
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center mt-8">
                <p className="text-sm font-medium text-gray-600 mb-3">Don't see a role that fits? Send us your resume anyway.</p>
                <a href="mailto:careers@intex.in" className="text-red-600 font-bold hover:underline">careers@intex.in</a>
            </div>
        </div>
    );
}

function SupportSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-3">Register Product</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Register your CCTV or Biometric device for warranty validation and faster technical support.</p>
                <a href="#services-register" className="inline-block text-xs font-black uppercase tracking-widest text-red-600 hover:text-red-700 border-b-2 border-red-600 pb-0.5">Go to Registration</a>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-3">Service & Repairs</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Book an installation or lodge a complaint for any technical issues with your purchased equipment.</p>
                <a href="#services-installation" className="inline-block text-xs font-black uppercase tracking-widest text-red-600 hover:text-red-700 border-b-2 border-red-600 pb-0.5">Book Service</a>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-3">User Manuals</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Download PDF manuals, technical specifications, and configuration guides for all product models.</p>
                <a href="#" className="inline-block text-xs font-black uppercase tracking-widest text-red-600 hover:text-red-700 border-b-2 border-red-600 pb-0.5">Browse Manuals</a>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
                <h3 className="text-lg font-black text-white mb-2">Need Immediate Help?</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Call our 24/7 toll-free support center.</p>
                <div className="text-2xl font-black text-white">0120-489-5555</div>
            </div>
        </div>
    );
}

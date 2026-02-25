import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface Props {
    activeTab: string;
}

const TABS = [
    { id: 'installation', label: 'Installation Request' },
    { id: 'complaint', label: 'Online Complaint' },
    { id: 'register', label: 'Register A Product' }
];

export default function ServicesPage({ activeTab }: Props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeTab]);

    return (
        <div className="bg-[#f8f9fa] min-h-screen py-16 font-sans">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-12">

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-3xl lg:text-4xl font-black uppercase text-gray-900 tracking-tight">Services</h1>
                    <div className="h-1 w-16 bg-red-600 mt-4" />
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Sidebar Navigation */}
                    <div className="w-full lg:w-1/4 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-[160px]">
                        <nav className="flex flex-col">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => window.location.hash = `services-${tab.id}`}
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
                            {TABS.find(t => t.id === activeTab)?.label || 'Installation Request'}
                        </h2>

                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-600 leading-relaxed text-[15px] mb-8">
                                Fill out the form below for your {TABS.find(t => t.id === activeTab)?.label}. Our team will get back to you shortly.
                            </p>

                            {activeTab === 'installation' && <InstallationForm />}
                            {activeTab === 'complaint' && <ComplaintForm />}
                            {activeTab === 'register' && <RegisterForm />}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

// --- FORM COMPONENTS ---

function InstallationForm() {
    return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Full Name *</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Phone Number *</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Product Category *</label>
                    <select className="w-full bg-gray-50 border border-gray-200 p-4 text-sm text-gray-600 focus:border-red-600 focus:ring-0 outline-none transition-colors" required>
                        <option value="">Select Category</option>
                        <option value="ip_camera">IP Camera</option>
                        <option value="hd_camera">HD Camera</option>
                        <option value="ptz_camera">PTZ Camera</option>
                        <option value="nvr_dvr">NVR / DVR System</option>
                        <option value="biometrics">Biometrics Device</option>
                        <option value="accessories">Surveillance Accessories</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Complete Address *</label>
                <textarea className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors min-h-[120px]" placeholder="Enter your full installation address..." required />
            </div>

            <button type="submit" className="bg-red-600 text-white px-10 py-4 font-black uppercase text-[12px] tracking-widest hover:bg-red-700 transition-colors w-full md:w-auto">
                Submit Request
            </button>
        </form>
    );
}

function ComplaintForm() {
    return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Registered Phone *</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Product Model *</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" placeholder="e.g., IT-2616 SUF" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Invoice Number (Optional)</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" placeholder="Enter invoice number if available" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Complaint Description *</label>
                <textarea className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors min-h-[150px]" placeholder="Please describe the issue you are facing in detail..." required />
            </div>

            <button type="submit" className="bg-red-600 text-white px-10 py-4 font-black uppercase text-[12px] tracking-widest hover:bg-red-700 transition-colors w-full md:w-auto">
                Lodge Complaint
            </button>
        </form>
    );
}

function RegisterForm() {
    return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl mb-8">
                <p className="text-sm text-blue-800 font-medium">
                    Registering your product ensures quicker support and warranty validation. Please have your purchase invoice ready.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Full Name *</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Phone Number *</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Product Model *</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" placeholder="e.g., IT-2616 SUF" required />
                </div>
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Serial Number *</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" placeholder="Enter product serial number" required />
                </div>
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Date of Purchase *</label>
                    <input type="date" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors text-gray-600" required />
                </div>
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-700 uppercase tracking-widest">Dealer Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-red-600 focus:ring-0 outline-none transition-colors" placeholder="Name of store or website" />
                </div>
            </div>

            <div className="space-y-2 border-2 border-dashed border-gray-300 p-8 text-center rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-gray-400 group-hover:text-red-600 transition-colors mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <p className="text-sm font-bold text-gray-700">Click to upload invoice *</p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG or PDF (Max 5MB)</p>
                </div>
            </div>

            <button type="submit" className="bg-red-600 text-white px-10 py-4 font-black uppercase text-[12px] tracking-widest hover:bg-red-700 transition-colors w-full md:w-auto mt-6">
                Register Product
            </button>
        </form>
    );
}

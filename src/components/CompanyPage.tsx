import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface Props {
    activeTab: string;
}

const TABS = [
    { id: 'about', label: 'About Us' },
    { id: 'blog', label: 'Read Our Blog' },
    { id: 'milestones', label: 'Our Milestones' },
    { id: 'international', label: 'International' },
    { id: 'terms', label: 'Terms & Conditions' },
    { id: 'investor', label: 'Corporate Investor' }
];

export default function CompanyPage({ activeTab }: Props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeTab]);

    return (
        <div className="bg-[#f8f9fa] min-h-screen py-16 font-sans">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-12">

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-3xl lg:text-4xl font-black uppercase text-gray-900 tracking-tight">Company</h1>
                    <div className="h-1 w-16 bg-red-600 mt-4" />
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Sidebar Navigation */}
                    <div className="w-full lg:w-1/4 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-[160px]">
                        <nav className="flex flex-col">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => window.location.hash = `company-${tab.id}`}
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
                            {TABS.find(t => t.id === activeTab)?.label || 'About Us'}
                        </h2>

                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                Information regarding {TABS.find(t => t.id === activeTab)?.label} will be displayed here.
                                This section is dynamically rendered based on the selected tab in the sidebar layout.
                            </p>
                            {/* Detailed content blocks will be injected here per tab */}
                            <div className="mt-8 p-12 bg-gray-50 rounded-xl border border-dashed border-gray-300 flex items-center justify-center text-gray-400 font-medium">
                                Content Area Placeholder
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

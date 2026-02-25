import { useState } from 'react';

export default function ProductTabs() {
    const [activeTab, setActiveTab] = useState('OVERVIEW');

    return (
        <div className="sticky top-[80px] z-40 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex space-x-12">
                    {['OVERVIEW', 'SPECIFICATIONS'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-4 text-xs font-black uppercase tracking-[0.2em] relative transition-colors ${activeTab === tab ? 'text-red-600' : 'text-white hover:text-red-500'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-4 left-0 right-0 h-0.5 bg-red-600" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

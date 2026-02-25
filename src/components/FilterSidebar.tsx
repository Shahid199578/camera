import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FilterSidebar({ isOpen, onClose }: FilterSidebarProps) {
    const filterSections = [
        { title: 'FEATURES', options: ['Camera'] },
        { title: 'PRICE', options: ['₹0 - ₹5,000', '₹5,000 - ₹10,000', '₹10,000+'] },
        { title: 'OPERATING SYSTEM', options: ['Android', 'iOS', 'Windows'] },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 z-[150]"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-white z-[160] shadow-2xl flex flex-col"
                    >
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-widest">Filter By</h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-12">
                            {filterSections.map((section) => (
                                <div key={section.title} className="space-y-6">
                                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">
                                        {section.title}
                                    </h3>
                                    <div className="space-y-4">
                                        {section.options.map((option) => (
                                            <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                                                <div className="w-5 h-5 border-2 border-gray-200 rounded flex items-center justify-center group-hover:border-intex-blue transition-colors">
                                                    <div className="w-2.5 h-2.5 bg-intex-blue rounded-sm scale-0 group-hover:scale-100 transition-transform" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-700">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                            <button className="py-4 text-xs font-black uppercase tracking-widest text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                Clear All
                            </button>
                            <button className="py-4 text-xs font-black uppercase tracking-widest text-white bg-intex-blue rounded-lg shadow-lg hover:bg-intex-light-blue transition-colors">
                                Apply Filters
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

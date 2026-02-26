import { Facebook, Twitter, Linkedin, PhoneCall, Download, Info, Scale, Heart, Check } from 'lucide-react';

export default function ProductInfo({ title, price }: { title?: string, price?: string }) {
    const displayTitle = title || "";
    const displayPrice = price || "";

    return (
        <div className="flex flex-col space-y-6">
            {/* Title & Top Icons */}
            <div className="flex justify-between items-start pt-2">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
                    {displayTitle}
                </h1>
                <div className="flex items-center space-x-4 mt-2">
                    <button className="text-gray-400 hover:text-intex-blue transition-colors">
                        <Scale className="w-6 h-6" />
                    </button>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-100 mt-2" />

            {/* Pricing Section */}
            <div className="space-y-2 py-4">
                <div className="flex items-center">
                    <span className="text-3xl font-black text-gray-900 tracking-tighter">{displayPrice}</span>
                </div>
                <p className="text-xs font-bold text-gray-900 opacity-90">
                    MRP (Per Unit) Inclusive of all taxes
                </p>
            </div>

            {/* CTA Button - Enquire Now with Checkmark */}
            <div className="pt-4 pb-8">
                <button className="w-full bg-[#111] text-white py-4 rounded-full font-bold flex items-center justify-center space-x-3 hover:bg-black transition-all shadow-xl group">
                    <Check className="w-4 h-4 text-white" />
                    <span className="uppercase tracking-[0.15em] text-xs">ENQUIRE NOW</span>
                </button>
            </div>

            {/* Brochure & Info Links */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-6 border-y border-gray-50">
                <button className="flex items-center space-x-2 group">
                    <Download className="w-5 h-5 text-gray-400 group-hover:text-intex-blue transition-colors" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">Download Brochure</span>
                </button>
                <button className="flex items-center space-x-2 group">
                    <Info className="w-5 h-5 text-gray-400 group-hover:text-intex-blue transition-colors" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">Manufacturing Information</span>
                </button>
            </div>

            {/* Social Share Section */}
            <div className="pt-8 space-y-4">
                <span className="text-[10px] uppercase font-black tracking-widest text-gray-500 block">Share:</span>
                <div className="flex space-x-3">
                    {[Facebook, Twitter, PhoneCall, Linkedin].map((Icon, i) => (
                        <div key={i} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-intex-blue hover:text-intex-blue transition-all cursor-pointer bg-white group shadow-sm hover:shadow-md">
                            <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function CollectionHero() {
    return (
        <div className="bg-white border-b border-gray-100">
            {/* Red Camera Title & Breadcrumbs Section */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <nav className="flex items-center space-x-2 text-[11px] font-medium text-gray-500 mb-6 font-sans">
                    <a onClick={() => window.location.href = '/'} className="hover:text-intex-blue transition-colors cursor-pointer text-gray-400">Home</a>
                    <span className="text-gray-300 mx-1">/</span>
                    <span className="text-red-600 font-bold">Camera</span>
                </nav>

                <h1 className="text-3xl md:text-4xl font-black text-red-600 mb-8 uppercase tracking-tighter font-sans">Camera</h1>
            </div>

            {/* Banner Section */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="relative w-full aspect-[21/9] sm:aspect-[32/10] rounded-2xl overflow-hidden bg-gray-900 group">
                    <img
                        src="https://www.intex.in/cdn/shop/collections/CCTV_Camera_Banner.jpg?v=1658482635"
                        alt="Intex Camera Collection"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/20 flex flex-col justify-center px-12 md:px-24">
                        <div className="max-w-2xl">
                            {/* Styled Text from Screenshot */}
                            <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic font-sans">
                                Doubt Nahi <br />
                                <span className="text-white bg-transparent border-b-8 border-intex-blue">NAZAR RAKHO</span>
                            </h2>
                            <p className="text-white/90 text-sm md:text-lg mt-4 font-black tracking-[0.2em] uppercase font-sans">
                                Because Protection Should Feel Like Care, Not Tension.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

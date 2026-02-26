interface CollectionHeroProps {
    categoryId?: string;
}

export default function CollectionHero({ categoryId }: CollectionHeroProps) {
    const defaultData = {
        title: 'Camera',
        image: 'https://www.intex.in/cdn/shop/collections/CCTV_Camera_Banner.jpg?v=1658482635',
        heading: <>Doubt Nahi <br /><span className="text-white bg-transparent border-b-8 border-intex-blue">NAZAR RAKHO</span></>,
        subheading: 'Because Protection Should Feel Like Care, Not Tension.'
    };

    const categoryData: Record<string, any> = {
        'cctv': defaultData,
        'biometrics': {
            title: 'Biometrics',
            image: '/assets/biometrics.png',
            heading: <>Secure <br /><span className="text-white bg-transparent border-b-8 border-intex-blue">YOUR WORKSPACE</span></>,
            subheading: 'Advanced Access Control & Attendance Systems.'
        },
        'led-tvs': {
            title: 'LED TVs',
            image: '/assets/dome_camera.png',
            heading: <>Experience <br /><span className="text-white bg-transparent border-b-8 border-intex-blue">TRUE COLORS</span></>,
            subheading: 'Ultra HD Smart LED Televisions for immersive viewing.'
        },
        'washing-machines': {
            title: 'Washing Machines',
            image: '/assets/bullet_camera.png',
            heading: <>Gentle Care <br /><span className="text-white bg-transparent border-b-8 border-intex-blue">FOR YOUR CLOTHES</span></>,
            subheading: 'Fully automatic and semi-automatic washing solutions.'
        },
        'fans': {
            title: 'Ceiling Fans',
            image: '/assets/biometrics.png',
            heading: <>Cooling <br /><span className="text-white bg-transparent border-b-8 border-intex-blue">REDEFINED</span></>,
            subheading: 'High speed designer ceiling fans for every room.'
        },
        'heaters': {
            title: 'Water Heaters',
            image: '/assets/dome_camera.png',
            heading: <>Warmth <br /><span className="text-white bg-transparent border-b-8 border-intex-blue">ON DEMAND</span></>,
            subheading: 'Energy efficient water heaters for your comfort.'
        },
        'machinery': {
            title: 'Heavy Machinery',
            image: '/assets/bullet_camera.png',
            heading: <>Industrial <br /><span className="text-white bg-transparent border-b-8 border-intex-blue">STRENGTH</span></>,
            subheading: 'Robust machinery for demanding applications.'
        },
        'tools': {
            title: 'Power Tools',
            image: '/assets/biometrics.png',
            heading: <>Precision & <br /><span className="text-white bg-transparent border-b-8 border-intex-blue">POWER</span></>,
            subheading: 'Professional grade tools for every job.'
        },
        'keyboards': {
            title: 'Keyboards',
            image: '/assets/dome_camera.png',
            heading: <>Type with <br /><span className="text-white bg-transparent border-b-8 border-intex-blue">CONFIDENCE</span></>,
            subheading: 'Ergonomic and durable IT accessories.'
        },
        'powerbanks': {
            title: 'Power Banks',
            image: '/assets/bullet_camera.png',
            heading: <>Power <br /><span className="text-white bg-transparent border-b-8 border-intex-blue">ON THE GO</span></>,
            subheading: 'High capacity portable charging solutions.'
        },
        'nvr': {
            title: 'NVR & DVR',
            image: '/assets/biometrics.png',
            heading: <>Record <br /><span className="text-white bg-transparent border-b-8 border-intex-blue">EVERY MOMENT</span></>,
            subheading: 'Intelligent recording and storage systems.'
        }
    };

    const data = categoryId && categoryData[categoryId] ? categoryData[categoryId] : defaultData;

    return (
        <div className="bg-white border-b border-gray-100">
            {/* Red Title & Breadcrumbs Section */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <nav className="flex items-center space-x-2 text-[11px] font-medium text-gray-500 mb-6 font-sans">
                    <a onClick={() => window.location.href = '/'} className="hover:text-intex-blue transition-colors cursor-pointer text-gray-400">Home</a>
                    <span className="text-gray-300 mx-1">/</span>
                    <span className="text-red-600 font-bold">{data.title}</span>
                </nav>

                <h1 className="text-3xl md:text-4xl font-black text-red-600 mb-8 uppercase tracking-tighter font-sans">{data.title}</h1>
            </div>

            {/* Banner Section */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="relative w-full aspect-[21/9] sm:aspect-[32/10] rounded-2xl overflow-hidden bg-gray-900 group">
                    <img
                        src={data.image}
                        alt={`Intex ${data.title} Collection`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-12 md:px-24">
                        <div className="max-w-2xl">
                            {/* Styled Text */}
                            <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic font-sans">
                                {data.heading}
                            </h2>
                            <p className="text-white/90 text-sm md:text-lg mt-4 font-black tracking-[0.2em] uppercase font-sans">
                                {data.subheading}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

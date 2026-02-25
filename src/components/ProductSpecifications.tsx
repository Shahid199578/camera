export default function ProductSpecifications() {
    const specs = [
        { label: 'Model Name', value: 'IP Bullet 5MP Pro Outdoor Intelligent Camera' },
        { label: 'Resolution', value: '5MP Full HD (2880×1624)' },
        { label: 'Features', value: 'Day/Night mode, WDR, DWDR, Full HD, Mic & Speaker, Audio/Alarm' },
        { label: 'Night Vision', value: 'Black light full-color, intelligent dual light, infrared mode' },
        { label: 'Face Recognition', value: 'Intelligent face detection without exposure' },
    ];

    const imageSettings = [
        'Automatic white balance',
        'Digital wide dynamic (DWDR) & backlight compensation',
        'Privacy occlusion area setting supported',
        'Mirror function supported',
        'On-Screen Display (OSD) customization and movement supported',
    ];

    return (
        <div className="max-w-6xl mx-auto py-12 space-y-16">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Specifications List */}
                <div className="flex-1 space-y-0 w-full">
                    <h3 className="text-red-600 text-xl font-black uppercase tracking-widest mb-6 font-sans">Technical Specifications</h3>
                    {specs.map((spec, i) => (
                        <div key={i} className="flex flex-col md:flex-row py-4 border-b border-red-100 gap-2 md:gap-8">
                            <span className="md:w-1/3 text-gray-900 font-black uppercase text-[10px] tracking-widest">{spec.label}:</span>
                            <span className="md:w-2/3 text-gray-700 font-bold text-xs">{spec.value}</span>
                        </div>
                    ))}
                </div>

                {/* Product Image in Specs Tab as requested */}
                <div className="lg:w-1/3 w-full bg-gray-50 p-8 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                    <img
                        src="/assets/bullet_camera.png"
                        alt="Technical View"
                        className="w-full max-w-[250px] object-contain hover:scale-110 transition-transform duration-500"
                    />
                </div>
            </div>

            <div className="space-y-8">
                <div className="inline-block border-b-2 border-red-600 pb-2">
                    <h3 className="text-gray-900 text-lg font-black uppercase tracking-[0.2em]">Image Settings</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
                    {imageSettings.map((setting, i) => (
                        <div key={i} className="py-4 border-b border-gray-100 flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 bg-red-600 rotate-45" />
                            <span className="text-gray-700 text-xs font-bold leading-relaxed">{setting}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

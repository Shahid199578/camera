interface ProductSpecificationsProps {
    product?: {
        image?: string;
        specifications?: any[];
    } | null;
}

export default function ProductSpecifications({ product }: ProductSpecificationsProps) {
    const rawSpecs = product?.specifications || [];

    // Filter out standard specifications (label / value pair where value is a string)
    const standardSpecs = rawSpecs.filter((s: any) => 'label' in s && typeof s.value === 'string');

    // Everything else that has arrays (features, imageSettings, or just any custom key)
    const nestedSpecs = rawSpecs.filter((s: any) => !('label' in s) || Array.isArray(s.value));

    if (standardSpecs.length === 0 && nestedSpecs.length === 0) {
        return null;
    }

    const formatTitle = (text: string) => {
        // Formats camelCase "imageSettings" to "Image Settings"
        const result = text.replace(/([A-Z])/g, " $1");
        return result.charAt(0).toUpperCase() + result.slice(1);
    };

    return (
        <div className="max-w-6xl mx-auto py-12 space-y-16">
            {standardSpecs.length > 0 && (
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Specifications List */}
                    <div className="flex-1 space-y-0 w-full">
                        <h3 className="text-red-600 text-xl font-black uppercase tracking-widest mb-6 font-sans">Technical Specifications</h3>
                        {standardSpecs.map((spec: any, i: number) => (
                            <div key={i} className="flex flex-col md:flex-row py-4 border-b border-red-100 gap-2 md:gap-8">
                                <span className="md:w-1/3 text-gray-900 font-black uppercase text-[10px] tracking-widest">{spec.label}:</span>
                                <span className="md:w-2/3 text-gray-700 font-bold text-xs">{spec.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Product Image in Specs Tab */}
                    <div className="lg:w-1/3 w-full bg-gray-50 p-8 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                        <img
                            src={product?.image || ""}
                            alt="Technical View"
                            className="w-full max-w-[250px] object-contain hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                </div>
            )}

            {nestedSpecs.length > 0 && (
                <div className="space-y-12">
                    {nestedSpecs.map((specObj: any, idx: number) => {
                        let title = "";
                        let items: string[] = [];

                        if ('label' in specObj && Array.isArray(specObj.value)) {
                            title = specObj.label;
                            items = specObj.value;
                        } else {
                            // Extract the first key-value pair of the arbitrary object
                            const entries = Object.entries(specObj);
                            if (entries.length > 0) {
                                title = formatTitle(entries[0][0]);
                                items = entries[0][1] as string[];
                            }
                        }

                        if (!items || items.length === 0) return null;

                        return (
                            <div key={idx} className="space-y-6">
                                <div className="inline-block border-b-2 border-red-600 pb-2">
                                    <h3 className="text-gray-900 text-lg font-black uppercase tracking-[0.2em]">{title}</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
                                    {items.map((setting, i) => (
                                        <div key={i} className="py-4 border-b border-gray-100 flex items-center space-x-3">
                                            <div className="w-1.5 h-1.5 bg-red-600 rotate-45" />
                                            <span className="text-gray-700 text-xs font-bold leading-relaxed">{setting}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

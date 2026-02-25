import { ArrowRight, ShieldCheck, Cpu, Clock } from 'lucide-react';

interface Props {
    onNavigate: (view: string) => void;
}

export default function LandingPage({ onNavigate }: Props) {
    return (
        <div className="bg-white font-sans">
            {/* Hero Section */}
            <section className="relative bg-black text-white min-h-[80vh] flex items-center overflow-hidden">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/20 text-red-500 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            <span>Since 1996</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                            Secure Our <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Nation.</span>
                        </h1>

                        <p className="text-lg text-gray-400 max-w-lg font-medium leading-relaxed">
                            India's pioneering security & surveillance brand. Delivering uncompromising indigenous technology for over 28 years.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                onClick={() => onNavigate('category-cctv')}
                                className="bg-red-600 text-white px-10 py-4 text-[13px] font-black uppercase tracking-widest hover:bg-red-700 transition-colors flex items-center justify-center space-x-3"
                            >
                                <span>Explore Cameras</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => onNavigate('category-biometrics')}
                                className="bg-zinc-900 border border-zinc-800 text-white px-10 py-4 text-[13px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors flex items-center justify-center"
                            >
                                View Biometrics
                            </button>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        {/* Composition of multiple products */}
                        <div className="relative w-full aspect-square">
                            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/50 to-transparent rounded-full blur-3xl"></div>
                            <img src="/assets/bullet_camera.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] drop-shadow-[0_20px_50px_rgba(220,38,38,0.15)] z-20" alt="Intex Pro Bullet Camera" />
                            <img src="/assets/dome_camera.png" className="absolute bottom-0 left-0 w-[45%] drop-shadow-2xl z-30" alt="Intex Dome Camera" />
                            <img src="/assets/biometrics.png" className="absolute top-10 right-0 w-[40%] drop-shadow-2xl z-10 opacity-90" alt="Intex Biometrics" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section className="py-20 bg-zinc-50 border-y border-zinc-100">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-zinc-100 text-red-600 mb-2">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-black uppercase tracking-widest text-zinc-900">Uncompromising Security</h3>
                        <p className="text-zinc-500 font-medium text-sm leading-relaxed max-w-xs">Military-grade encryption and rigorous stress-testing for zero vulnerabilities.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-zinc-100 text-red-600 mb-2">
                            <Cpu className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-black uppercase tracking-widest text-zinc-900">Indigenous Tech</h3>
                        <p className="text-zinc-500 font-medium text-sm leading-relaxed max-w-xs">Engineered in India for Indian conditions. Built to withstand extreme fluctuations.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-zinc-100 text-red-600 mb-2">
                            <Clock className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-black uppercase tracking-widest text-zinc-900">28 Years Legacy</h3>
                        <p className="text-zinc-500 font-medium text-sm leading-relaxed max-w-xs">A trusted pioneer in Indian electronics, bringing decades of reliability to surveillance.</p>
                    </div>
                </div>
            </section>

            {/* Product Categories Overview */}
            <section className="py-32">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-900 mb-4">Complete Solution</h2>
                            <p className="text-zinc-500 font-medium text-lg max-w-2xl">End-to-end security infrastructure protecting enterprises, institutions, and homes across India.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Cameras Category Card */}
                        <div
                            onClick={() => onNavigate('category-cctv')}
                            className="group cursor-pointer bg-zinc-50 rounded-3xl p-10 flex flex-col items-center text-center border border-zinc-100 hover:border-red-200 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="w-full aspect-square bg-white rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-zinc-50 shadow-sm relative group-hover:bg-red-50 transition-colors">
                                <img src="/assets/bullet_camera.png" className="w-[80%] object-contain group-hover:scale-110 transition-transform duration-700" alt="CCTV" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-widest text-zinc-900 mb-2 group-hover:text-red-600 transition-colors">CCTV Cameras</h3>
                            <p className="text-zinc-500 text-sm font-medium mb-8">High-definition IP & AHD surveillance</p>
                            <span className="mt-auto text-[11px] font-black text-red-600 uppercase tracking-widest border-b border-red-600 pb-1">View Range →</span>
                        </div>

                        {/* NVR Category Card */}
                        <div
                            onClick={() => onNavigate('category-nvr')}
                            className="group cursor-pointer bg-zinc-50 rounded-3xl p-10 flex flex-col items-center text-center border border-zinc-100 hover:border-red-200 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="w-full aspect-square bg-white rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-zinc-50 shadow-sm relative group-hover:bg-red-50 transition-colors">
                                <img src="/assets/biometrics.png" className="w-[80%] object-contain group-hover:scale-110 transition-transform duration-700 opacity-60 mix-blend-multiply" alt="NVR" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-widest text-zinc-900 mb-2 group-hover:text-red-600 transition-colors">NVR & DVR</h3>
                            <p className="text-zinc-500 text-sm font-medium mb-8">Intelligent recording & storage systems</p>
                            <span className="mt-auto text-[11px] font-black text-red-600 uppercase tracking-widest border-b border-red-600 pb-1">View Range →</span>
                        </div>

                        {/* Biometrics Category Card */}
                        <div
                            onClick={() => onNavigate('category-biometrics')}
                            className="group cursor-pointer bg-zinc-50 rounded-3xl p-10 flex flex-col items-center text-center border border-zinc-100 hover:border-red-200 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="w-full aspect-square bg-white rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-zinc-50 shadow-sm relative group-hover:bg-red-50 transition-colors">
                                <img src="/assets/biometrics.png" className="w-[80%] object-contain group-hover:scale-110 transition-transform duration-700" alt="Biometrics" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-widest text-zinc-900 mb-2 group-hover:text-red-600 transition-colors">Biometric Devices</h3>
                            <p className="text-zinc-500 text-sm font-medium mb-8">Advanced access control & attendance</p>
                            <span className="mt-auto text-[11px] font-black text-red-600 uppercase tracking-widest border-b border-red-600 pb-1">View Range →</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

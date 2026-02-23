export default function BrandsSection() {
    return (
        <section className="py-16 border-y border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-10">
                    Authorized Representative &amp; Partnerships
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
                    <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">O</div>
                        <span className="text-2xl font-black text-gray-900">OXON™</span>
                    </div>
                    <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="text-xl font-bold text-gray-700">AgriPlus</span>
                    </div>
                    <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
                            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z" />
                            <path d="M2 21c0-3 1.85-5.36 5.08-6" />
                        </svg>
                        <span className="text-xl font-bold text-gray-700">V-Flow</span>
                    </div>
                    <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                        <span className="text-xl font-bold text-gray-700">HeavyDuty</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

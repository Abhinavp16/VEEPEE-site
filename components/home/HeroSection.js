'use client';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function HeroSection() {
    return (
        <section className="px-4 md:px-8 pb-12 pt-6 max-w-7xl mx-auto">
            <div className="relative w-full h-[650px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1685988466819-59f04ed4e035?w=1920&h=1080&fit=crop&q=80')`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-center p-8 md:p-16 text-white z-10">
                    <ScrollReveal className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-brand-primary/20 backdrop-blur-md rounded-full border border-brand-primary/30">
                            <span className="w-2 h-2 bg-brand-primary animate-pulse rounded-full" />
                            <span className="text-xs md:text-sm font-bold tracking-wider text-emerald-400 uppercase">
                                Premium IMPORTERS &amp; Wholesalers
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-primary font-bold leading-[1.1] mb-6">
                            Veepee <br />
                            <span className="text-brand-primary">Impex</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-lg mb-10 leading-relaxed font-light">
                            Distributor of Oxon heavy machinery. Empowering Indian farmers and industries with professional power tools, irrigation systems, and agricultural innovation.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/products"
                                className="relative px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-bold hover:shadow-[0_8px_25px_rgba(22,163,74,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group/btn overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Explore Products
                                    <svg className="group-hover/btn:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]"></div>
                            </Link>
                            <Link
                                href="/about"
                                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white hover:text-brand-primary hover:border-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                Our Legacy
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Realistic Floating App CTA */}
                    <div className="absolute bottom-10 right-10 hidden lg:block animate-fade-in-up">
                        <div className="group relative">
                            {/* Ambient Glow */}
                            <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 p-4 pl-6 rounded-3xl flex items-center gap-8 shadow-2xl overflow-hidden transition-all duration-500 hover:translate-y-[-5px] hover:bg-white/10">
                                {/* Lens Flare Effect */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rotate-45 translate-x-16 -translate-y-16 group-hover:translate-x-12 transition-transform duration-1000"></div>

                                <div className="flex flex-col relative z-10">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]"></div>
                                        <span className="text-[10px] text-white/50 font-black uppercase tracking-[0.2em] leading-none">New Mobile App</span>
                                    </div>
                                    <h4 className="text-white font-bold text-lg tracking-tight leading-none">Veepee Impex</h4>
                                    <p className="text-emerald-400/80 text-[11px] font-bold mt-1 tracking-wide leading-none font-secondary">Connect with us on the go</p>
                                </div>

                                <Link
                                    href="#"
                                    className="relative z-10 bg-white text-gray-900 px-6 py-3 rounded-2xl flex items-center gap-3 hover:bg-emerald-50 transition-all hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)] group/play"
                                >
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-brand-primary group-hover/play:scale-110 transition-transform duration-500">
                                        <path d="M17.523 15.341l-2.031-1.127a.382.382 0 00-.51.107c-.456.657-1.144 1.147-1.921 1.354-2.13.567-4.31-.634-4.877-2.764-.567-2.13.634-4.31 2.764-4.877 1.157-.308 2.37.032 3.228.847a.382.382 0 00.528-.016l1.458-1.503a.383.383 0 00-.012-.54c-1.89-1.742-4.632-2.315-7.067-1.666-3.868 1.03-6.048 4.985-5.018 8.853 1.03 3.868 4.985 6.048 8.853 5.018 2.147-.572 3.862-2.008 4.802-3.818a.38.38 0 00-.207-.568z" />
                                        <path d="M22.84 5.35c.106-.4.004-.814-.268-1.123a1.45 1.45 0 00-1.12-.5h-15a1.45 1.45 0 00-1.45 1.45v13a1.45 1.45 0 001.45 1.45h3v-2.004c0-1.105.895-2 2-2h4v2h-4v2h10c.8 0 1.45-.65 1.45-1.45V5.352z" />
                                    </svg>
                                    <div className="flex flex-col items-start leading-none">
                                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Available on</span>
                                        <span className="text-sm font-black tracking-tight">Play Store</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

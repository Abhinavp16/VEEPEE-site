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

                    {/* Quick Stats */}
                    <div className="absolute bottom-0 right-0 bg-white p-8 md:p-12 hidden md:grid grid-cols-2 gap-10 rounded-tl-[60px] shadow-[-10px_-10px_30px_rgba(0,0,0,0.1)]">
                        <div className="text-left border-r border-gray-100 pr-10">
                            <span className="block text-4xl font-bold text-brand-primary">99.99%</span>
                            <span className="text-xs uppercase tracking-widest font-black text-gray-400">Response Rate</span>
                        </div>
                        <div className="text-left">
                            <span className="block text-4xl font-bold text-gray-900">Oxon™</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

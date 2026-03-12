'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function HeroSection() {
    const PLAY_STORE_URL = '#';
    const defaultHeroImages = ['/images/Banner/1.jpg', '/images/Banner/2.jpg', '/images/Banner/3.jpg', '/images/Banner/4.jpg', '/images/Banner/5.jpg', '/images/Banner/1.jpg'];
    const [heroImages, setHeroImages] = useState(defaultHeroImages);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        let isMounted = true;

        async function loadHeroImages() {
            try {
                const rawBase = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_WEBSITE_API_BASE_URL || 'http://localhost:5000/api/v1';
                const apiBase = rawBase.replace(/\/+$/, '');
                const res = await fetch(`${apiBase}/settings/website-content`, { cache: 'no-store' });
                const data = await res.json();
                const cards = data?.data?.heroCards;
                if (!Array.isArray(cards) || cards.length !== 6) return;
                const images = cards.map((card, index) => card?.image || defaultHeroImages[index]).filter(Boolean);
                if (isMounted && images.length === 6) {
                    setHeroImages(images);
                }
            } catch {
                // Keep fallback images
            }
        }

        loadHeroImages();
        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 30000);

        return () => clearInterval(intervalId);
    }, [heroImages.length]);

    return (
        <section className="px-4 md:px-8 pb-12 pt-6 max-w-7xl mx-auto">
            <div className="relative w-full h-[650px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                {heroImages.map((image, index) => (
                    <div
                        key={`${image}-${index}`}
                        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110 ${activeImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            backgroundImage: `url('${image}')`,
                        }}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[1]" />

                <div className="relative h-full flex flex-col justify-center p-8 md:p-16 text-white z-10">
                    <ScrollReveal className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-brand-primary/20 backdrop-blur-md rounded-full border border-brand-primary/30">
                            <span className="w-2 h-2 bg-brand-primary animate-pulse rounded-full" />
                            <span className="text-xs md:text-sm font-bold tracking-wider text-brand-primary uppercase">
                                Premium IMPOTER &amp; MANUFACTURER
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
                                className="relative px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-bold hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group/btn overflow-hidden"
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
                            <div className="absolute -inset-4 bg-brand-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 p-4 pl-6 rounded-3xl flex items-center gap-8 shadow-2xl overflow-hidden transition-all duration-500 hover:translate-y-[-5px] hover:bg-white/10">
                                {/* Lens Flare Effect */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rotate-45 translate-x-16 -translate-y-16 group-hover:translate-x-12 transition-transform duration-1000"></div>

                                <div className="flex flex-col relative z-10">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse shadow-[0_0_8px_#f97316]"></div>
                                        <span className="text-[10px] text-white/50 font-black uppercase tracking-[0.2em] leading-none">New Mobile App</span>
                                    </div>
                                    <h4 className="text-white font-bold text-lg tracking-tight leading-none">OXON</h4>
                                    <p className="text-brand-primary/80 text-[11px] font-bold mt-1 tracking-wide leading-none font-secondary">Connect with us on the go</p>
                                </div>

                                <a
                                    href={PLAY_STORE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Get the OXON app on Google Play"
                                    className="relative z-10 bg-white text-gray-900 px-6 py-3 rounded-2xl flex items-center gap-3 border border-gray-200 hover:bg-orange-50 transition-all hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)] group/play"
                                >
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="group-hover/play:scale-110 transition-transform duration-500">
                                        <path d="M3 2.5v19l9.2-9.5L3 2.5z" fill="#00D4FF" />
                                        <path d="M12.2 12L3 2.5l13.2 7.2-4 2.3z" fill="#00A94F" />
                                        <path d="M3 21.5l9.2-9.5 4 2.3L3 21.5z" fill="#FFAA00" />
                                        <path d="M16.2 9.7l4.8 2.6c.7.4.7 1.4 0 1.8l-4.8 2.7L12.2 12l4-2.3z" fill="#FF3B30" />
                                    </svg>
                                    <div className="flex flex-col items-start leading-none">
                                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Get it on</span>
                                        <span className="text-sm font-black tracking-tight">Google Play</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

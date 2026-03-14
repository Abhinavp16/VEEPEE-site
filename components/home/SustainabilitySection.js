import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function SustainabilitySection() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal>
                    <div className="relative h-[500px] rounded-3xl overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&q=80"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            alt="Sustainable Agriculture"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <span className="inline-block px-4 py-1.5 bg-brand-primary/90 text-white text-xs font-bold uppercase rounded-full mb-3">
                                Cutting-Edge Machinery
                            </span>
                            <p className="text-white text-lg font-medium">
                                Elevate your farming methods with our cutting-edge machinery
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="inline-block px-4 py-2 border border-brand-primary/30 rounded-lg text-brand-primary font-bold text-sm mb-6 uppercase tracking-widest">
                        Sustainability
                    </div>
                    <h2 className="text-4xl md:text-5xl font-primary font-bold text-text-primary mb-8 leading-tight">
                        Sustainable Agriculture In Your Community
                    </h2>
                    <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                        At Veepee Impex, we intertwine efficiency and environmental responsibility in every machine we distribute. We champion sustainable farming by enhancing yields, minimizing waste, and optimizing resources.
                    </p>
                    <p className="text-text-secondary text-lg mb-10 leading-relaxed">
                        Begin a fulfilling journey in contributing to sustainable agriculture in your community. As a Veepee Impex dealer, you&apos;ll be part of a network committed to transforming farming practices across the nation.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/dealership"
                            className="px-8 py-4 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-secondary transition-all shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] flex items-center gap-3 group"
                        >
                            Join as a Dealer
                            <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </Link>
                        <Link
                            href="/#products"
                            className="px-8 py-4 bg-white border border-gray-200 text-text-primary rounded-full font-bold hover:border-brand-primary hover:text-brand-primary transition-all"
                        >
                            Buy Machines Now
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

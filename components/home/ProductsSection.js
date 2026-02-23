"use client";

import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const products = [
    {
        name: 'Oxon 67cc Petrol Chain Saw',
        price: 'Request Quote',
        image: 'https://images.unsplash.com/photo-1738965028578-e901ba424677?w=600&h=600&fit=crop&q=80',
        badge: 'Best Seller',
        specs: ['Bar Length: 22 inch', '2-Stroke Engine', '67cc Displacement'],
    },
    {
        name: 'Oxon 6W200 Combined Mill',
        price: 'Request Quote',
        image: 'https://images.unsplash.com/photo-1687709644237-ca3ef4127cc2?w=600&h=600&fit=crop&q=80',
        badge: 'New Arrival',
        specs: ['Combined Rice & Flour Mill', 'Capacity: 200-300 kg/hr'],
    },
    {
        name: 'Oxon 350 Arc Welder',
        price: 'Request Quote',
        image: 'https://images.unsplash.com/photo-1727098730153-6408da60d89d?w=600&h=600&fit=crop&q=80',
        specs: ['350 Amp Output', 'Industrial Grade', 'Copper Winding'],
    },
    {
        name: 'Oxon Earth Auger 68cc',
        price: 'Request Quote',
        image: 'https://images.unsplash.com/photo-1738964847538-54f067b996cf?w=600&h=600&fit=crop&q=80',
        specs: ['68cc Engine', 'Heavy Duty Bit', 'Diameter: 12 inch'],
    },
    {
        name: 'Oxon 3-Inch Petrol Water Pump',
        price: 'Request Quote',
        image: 'https://images.pexels.com/photos/11116153/pexels-photo-11116153.jpeg?w=600&h=600&fit=crop',
        badge: 'High Performance',
        specs: ['3-Inch Discharge', '6.5 HP Engine', 'Portable Frame'],
    },
    {
        name: 'Oxon 50L Oil Free Air Compressor',
        price: 'Request Quote',
        image: 'https://images.pexels.com/photos/31257317/pexels-photo-31257317.jpeg?w=600&h=600&fit=crop',
        specs: ['50L Tank Capacity', 'Oil Free Operation', 'Silent Motor'],
    },
    {
        name: 'Oxon 2HP Induction Motor',
        price: 'Request Quote',
        image: 'https://images.unsplash.com/photo-1651530065437-9d961dc5e8d9?w=600&h=600&fit=crop&q=80',
        specs: ['Single Phase', '100% Copper', 'ISI Certified'],
    },
];

export default function ProductsSection() {
    return (
        <section id="products" className="py-24 bg-neutral-surface">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <ScrollReveal>
                        <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Precision Engineering</h2>
                        <h3 className="text-3xl md:text-4xl font-primary font-bold text-text-primary">Our Popular Products</h3>
                    </ScrollReveal>
                    <ScrollReveal>
                        <p className="text-text-secondary text-sm max-w-sm">
                            Genuine Oxon™ products engineered for durability, performance, and maximum ROI.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {products.slice(0, 5).map((product, i) => (
                        <ScrollReveal key={i} delay={i * 50}>
                            <div className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full hover:scale-[1.02] duration-300">
                                <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative bg-neutral-background">
                                    <img
                                        src={product.image}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        alt={product.name}
                                        onError={(e) => {
                                            e.target.src = `https://placehold.co/600x600/f3f4f6/6b7280?text=${encodeURIComponent(product.name)}`;
                                        }}
                                    />
                                    {product.badge && (
                                        <div className="absolute top-3 left-3 px-2 py-1 rounded-md text-[9px] font-bold shadow-sm uppercase bg-white/95 backdrop-blur text-brand-primary border border-brand-primary/10">
                                            {product.badge}
                                        </div>
                                    )}
                                </div>
                                <h4 className="text-sm font-bold text-text-primary mb-1 line-clamp-1 group-hover:text-brand-primary transition-colors">{product.name}</h4>
                                <ul className="text-[10px] text-gray-500 space-y-1 mb-3 flex-grow">
                                    {product.specs.map((spec, j) => (
                                        <li key={j} className="flex items-center gap-1.5">
                                            <div className="w-1 h-1 rounded-full bg-brand-primary/50" />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center justify-between gap-3 mt-auto pt-3 border-t border-gray-50">
                                    <span className="text-xs font-bold text-brand-primary">{product.price}</span>
                                    <Link
                                        href="/contact"
                                        className="p-2.5 bg-brand-light/50 text-brand-primary rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-300 hover:rotate-12 hover:scale-110 shadow-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

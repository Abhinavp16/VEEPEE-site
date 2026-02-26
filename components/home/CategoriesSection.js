'use client';

import ScrollReveal from '@/components/ScrollReveal';

const categories = [
    {
        name: 'Rice Mill Machinery',
        subtitle: 'Commercial & Domestic Units',
        image: 'https://images.unsplash.com/photo-1687709644237-ca3ef4127cc2?w=1200&h=800&fit=crop&q=80',
        fallback: '/images/Banner/1.jpg',
    },
    {
        name: 'Brush Cutters',
        subtitle: 'Backpack & Side Pack Models',
        image: '/images/products/brush cutter.webp',
        fallback: '/images/products/brush cutter.webp',
    },
    {
        name: 'Water Pumps',
        subtitle: 'Petrol & Electric Pumps',
        image: 'https://images.pexels.com/photos/34935520/pexels-photo-34935520.jpeg?w=1200&h=800&fit=crop',
        fallback: '/images/Banner/3.jpg',
    },
    {
        name: 'Welding Machines',
        subtitle: 'Arc & MIG Welders',
        image: 'https://images.unsplash.com/photo-1759847552281-60e45956124d?w=1200&h=800&fit=crop&q=80',
        fallback: '/images/Banner/4.jpg',
    },
    {
        name: 'Air Compressors',
        subtitle: 'Oil-Free & Industrial',
        image: 'https://images.pexels.com/photos/31257317/pexels-photo-31257317.jpeg?w=1200&h=800&fit=crop',
        fallback: '/images/Banner/5.jpg',
    },
    {
        name: 'Power Tools',
        subtitle: 'Drills, Grinders & More',
        image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=1200&h=800&fit=crop&q=80',
        fallback: '/images/Banner/1.jpg',
    },
];

export default function CategoriesSection() {
    return (
        <section id="categories" className="py-24 px-6 max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-primary font-bold text-text-primary">Our Expertise Areas</h2>
                <div className="w-24 h-1.5 bg-brand-primary mx-auto mt-6 rounded-full" />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat, i) => (
                    <ScrollReveal key={i} delay={i * 80}>
                        <div className="relative h-64 rounded-3xl overflow-hidden group border border-gray-100 shadow-sm cursor-pointer">
                            <img
                                src={cat.image}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                alt={cat.name}
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = cat.fallback;
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                                <h3 className="text-2xl font-bold">{cat.name}</h3>
                                <p className="text-xs text-brand-primary mt-2">{cat.subtitle}</p>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}

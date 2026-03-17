import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const defaultCategories = [
    {
        name: 'Rice Mill Machinery',
        description: 'Commercial & Domestic Units',
        image: 'https://images.unsplash.com/photo-1687709644237-ca3ef4127cc2?w=1200&h=800&fit=crop&q=80',
        fallback: '/images/Banner/1.jpg',
    },
    {
        name: 'Brush Cutters',
        description: 'Backpack & Side Pack Models',
        image: '/images/products/brush cutter.webp',
        fallback: '/images/products/brush cutter.webp',
    },
    {
        name: 'Water Pumps',
        description: 'Petrol & Electric Pumps',
        image: 'https://images.pexels.com/photos/34935520/pexels-photo-34935520.jpeg?w=1200&h=800&fit=crop',
        fallback: '/images/Banner/3.jpg',
    },
    {
        name: 'Welding Machines',
        description: 'Arc & MIG Welders',
        image: 'https://images.unsplash.com/photo-1759847552281-60e45956124d?w=1200&h=800&fit=crop&q=80',
        fallback: '/images/Banner/4.jpg',
    },
    {
        name: 'Air Compressors',
        description: 'Oil-Free & Industrial',
        image: 'https://images.pexels.com/photos/31257317/pexels-photo-31257317.jpeg?w=1200&h=800&fit=crop',
        fallback: '/images/Banner/5.jpg',
    },
    {
        name: 'Power Tools',
        description: 'Drills, Grinders & More',
        image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=1200&h=800&fit=crop&q=80',
        fallback: '/images/Banner/1.jpg',
    },
];

const defaultSection = {
    eyebrow: 'PRODUCT CATEGORIES',
    title: 'Our Expertise Areas',
    description: 'Explore our core machinery categories for agriculture, fabrication, irrigation, and workshop use.',
    buttonText: 'View Products',
};

function getDescriptionPoints(description = '') {
    return description
        .split(/\r?\n|\|/)
        .map((point) => point.replace(/^[\s\-\u2022.]+/, '').trim())
        .filter(Boolean);
}

export default function CategoriesSection({
    categories = defaultCategories,
    section = defaultSection,
}) {
    return (
        <section id="categories" className="py-24 px-6 max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-16">
                <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">{section.eyebrow}</h2>
                <h3 className="text-4xl md:text-5xl font-primary font-bold text-text-primary">{section.title}</h3>
                <p className="text-text-secondary mt-6 max-w-2xl mx-auto">{section.description}</p>
                <div className="w-24 h-1.5 bg-brand-primary mx-auto mt-6 rounded-full" />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
                {categories.map((cat, i) => {
                    const descriptionPoints = getDescriptionPoints(cat.description);
                    const cardDescription = descriptionPoints.join(' ') || cat.description;

                    return (
                        <ScrollReveal key={i} delay={i * 80}>
                            <Link
                                href={`/category/${encodeURIComponent(cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')).replace(/^-|-$/g, '')}`}
                                className="group flex h-full w-full max-w-[390px] mx-auto flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                <div className="aspect-square overflow-hidden rounded-3xl bg-neutral-surface">
                                    <img
                                        src={cat.image}
                                        className="h-full w-full object-cover object-center"
                                        alt={cat.name}
                                    />
                                </div>
                                <div className="flex min-h-[200px] flex-1 flex-col items-center px-4 py-5 lg:min-h-[190px] lg:px-4 lg:py-5">
                                    <div className="mb-3 h-1 w-10 rounded-full bg-brand-primary/80" />
                                    <h3 className="min-h-[2.8rem] text-center text-[1.55rem] font-bold text-text-primary leading-tight lg:min-h-[3.2rem] lg:text-[1.45rem]">
                                        {cat.name}
                                    </h3>
                                    <p className="mt-0.5 min-h-[4.5rem] w-full text-left text-sm leading-6 text-gray-500 line-clamp-3">
                                        {cardDescription}
                                    </p>
                                </div>
                            </Link>
                        </ScrollReveal>
                    );
                })}
            </div>
        </section>
    );
}

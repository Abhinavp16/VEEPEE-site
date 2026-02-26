import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import InquiryPopupButton from '@/components/InquiryPopupButton';

export const metadata = {
    title: 'Products - Veepee Impex',
    description: 'Browse our complete range of Oxon agricultural machinery, power tools, pumps, welding equipment, and more. Pan India distribution and best wholesale prices.',
};

const productCategories = [
    {
        name: 'Rice Mills & Mini Rice Mills',
        description: 'High-capacity grain processing machines including Oxon 6N40 and 6W200 models.',
        image: 'https://images.unsplash.com/photo-1687709644237-ca3ef4127cc2?w=600&h=400&fit=crop&q=80',
        products: ['Oxon 6W200 Combined Mill', 'Oxon 6N40 Mini Rice Mill', 'Rice Mill with Petrol Engine'],
    },
    {
        name: 'Brush Cutters & Trimmers',
        description: 'Professional vegetation control with side pack and backpack options.',
        image: 'https://images.unsplash.com/photo-1635329864278-ebf9947f6745?w=600&h=400&fit=crop&q=80',
        products: ['Oxon 52cc Side Pack', 'Oxon 35cc Brush Cutter', 'Oxon 31cc Backpack'],
    },
    {
        name: 'Welding Machines',
        description: 'Industrial-grade arc welding machines ensuring strong and durable joints.',
        image: 'https://images.unsplash.com/photo-1502450529557-4509ae211488?w=600&h=400&fit=crop&q=80',
        products: ['Oxon 350 Arc Welder', 'Oxon 250 Arc Welder', 'Oxon 200 Arc Welder'],
    },
    {
        name: 'Air Compressors',
        description: 'High-performance oil-free electric air compressors for workshops and factories.',
        image: 'https://images.pexels.com/photos/31257317/pexels-photo-31257317.jpeg?w=600&h=400&fit=crop',
        products: ['Oxon 50L Oil Free', 'Oxon 30L - 1 HP', 'Compressor Oil'],
    },
    {
        name: 'Water Pumps',
        description: 'Petrol and electric water pumps for reliable agricultural and industrial use.',
        image: 'https://images.pexels.com/photos/34935520/pexels-photo-34935520.jpeg?w=600&h=400&fit=crop',
        products: ['Oxon 3-Inch Petrol Pump', 'Oxon 2-Inch Petrol Pump', '1.5 Inch Water Pump'],
    },
    {
        name: 'Construction Power Tools',
        description: 'Essential tools for construction including cutters, grinders, and vibrators.',
        image: 'https://images.unsplash.com/photo-1540655037529-adec98fb635e?w=600&h=400&fit=crop&q=80',
        products: ['Marble Cutter Machine', 'Angle Grinder', 'Needle Vibrator', 'Drill Machines', 'Paint Mixers'],
    },
    {
        name: 'Power Weeders & Tillers',
        description: 'Efficient soil cultivation and weed control machines for optimal farming.',
        image: 'https://images.unsplash.com/photo-1592397126868-ed477d7f7fa2?w=600&h=400&fit=crop&q=80',
        products: ['Power Weeder', 'Mini Tiller', 'Cultivator'],
    },
    {
        name: 'Sprayers & Washers',
        description: 'Versatile equipment for agricultural spraying and high-pressure cleaning.',
        image: 'https://images.unsplash.com/photo-1622383563227-0440114a8721?w=600&h=400&fit=crop&q=80',
        products: ['Agricultural Sprayer', 'High Pressure Washer', 'Blower Machine'],
    },
    {
        name: 'Chainsaws & Forestry',
        description: 'Powerful petrol chainsaws for tree felling and wood processing.',
        image: 'https://images.unsplash.com/photo-1589379895082-f5f84ce2729a?w=600&h=400&fit=crop&q=80',
        products: ['Oxon Petrol Chain Saw', 'Tree Cutting Saw', 'Forestry Tools'],
    },
    {
        name: 'Earth Augers',
        description: 'Heavy-duty earth augers for drilling precise holes for fencing and planting.',
        image: 'https://images.unsplash.com/photo-1558434778-9e1e2d142177?w=600&h=400&fit=crop&q=80',
        products: ['Oxon Earth Auger', 'Post Hole Digger', 'Soil Drill'],
    },
];

const featuredProducts = [
    {
        name: 'Oxon 67cc Petrol Chain Saw',
        price: '₹ 7,500/Piece',
        image: 'https://images.unsplash.com/photo-1738965028578-e901ba424677?w=400&h=400&fit=crop&q=80',
        badge: 'Best Seller',
        specs: ['Bar Length: 22 inch', '2-Stroke Engine', '67cc Displacement'],
    },
    {
        name: 'Oxon 6W200 Combined Mill',
        price: '₹ 28,000/Piece',
        image: 'https://images.unsplash.com/photo-1687709644237-ca3ef4127cc2?w=400&h=400&fit=crop&q=80',
        specs: ['Capacity: 200-300 kg/hr', 'Combined Rice & Flour'],
    },
    {
        name: 'Oxon 350 Arc Welder',
        price: '₹ 6,400/Piece',
        image: 'https://images.unsplash.com/photo-1727098730153-6408da60d89d?w=400&h=400&fit=crop&q=80',
        specs: ['Output: 350 Amp', 'Copper Winding'],
    },
    {
        name: 'Oxon Earth Auger 68cc',
        price: '₹ 9,500/Piece',
        image: 'https://images.unsplash.com/photo-1738964847538-54f067b996cf?w=400&h=400&fit=crop&q=80',
        specs: ['Diameter: 12 inch', 'Gas Powered'],
    },
    {
        name: 'Oxon 3-Inch Water Pump',
        price: '₹ 14,200/Piece',
        image: 'https://images.pexels.com/photos/11116153/pexels-photo-11116153.jpeg?w=400&h=400&fit=crop',
        badge: 'Bulk Only',
        badgeStyle: 'bg-brand-primary text-white',
        specs: ['Power: 6.5 HP', '3-Inch Discharge'],
    },
    {
        name: 'Oxon 2HP Induction Motor',
        price: '₹ 8,900/Piece',
        image: 'https://images.unsplash.com/photo-1651530065437-9d961dc5e8d9?w=400&h=400&fit=crop&q=80',
        specs: ['Single Phase / 100% Copper', 'ISI Certified'],
    },
];

const brandOptions = [
    { name: 'Oxon', icon: 'bolt' },
    { name: 'Agri Tools', icon: 'leaf' },
    { name: 'Power Tools', icon: 'wrench' },
    { name: 'Irrigation', icon: 'droplet' },
    { name: 'Construction', icon: 'building' },
];

function buildCategoryInquiryLink(category) {
    return {
        productName: category.name,
        details: category.products,
    };
}

function buildFeaturedProductInquiryLink(product) {
    return {
        productName: product.name,
        price: product.price,
        details: product.specs,
    };
}

export default function ProductsPage() {
    return (
        <div className="page-transition">
            <PageHero
                title="Our Products"
                subtitle="Genuine Oxon™ machinery engineered for durability, performance, and maximum ROI. Pan India distribution with competitive wholesale pricing."
                breadcrumbItems={['Products']}
            />

            {/* Brands Navbar */}
            <section className="px-6 pt-10">
                <ScrollReveal className="max-w-7xl mx-auto">
                    <div className="bg-white border border-gray-100 rounded-2xl p-3 md:p-4 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
                            <div className="px-4 py-2.5 rounded-md bg-gray-900 text-white font-bold text-sm tracking-wide uppercase">
                                Brands
                            </div>
                            <span className="text-xl font-bold text-text-secondary leading-none px-1">:</span>
                            <div className="flex flex-wrap gap-2">
                                {brandOptions.map((brand, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        className={`px-4 py-2.5 rounded-md text-sm font-semibold transition-all ${
                                            i === 0
                                                ? 'bg-brand-primary text-white shadow-sm'
                                                : 'bg-neutral-surface text-text-secondary hover:text-brand-primary hover:bg-white border border-gray-100'
                                        }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            {brand.icon === 'bolt' && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
                                                </svg>
                                            )}
                                            {brand.icon === 'store' && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M3 9h18" />
                                                    <path d="M5 9V5h14v4" />
                                                    <path d="M5 9v10h14V9" />
                                                </svg>
                                            )}
                                            {brand.icon === 'leaf' && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z" />
                                                    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
                                                </svg>
                                            )}
                                            {brand.icon === 'wrench' && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-3 3-3-3 3-3z" />
                                                </svg>
                                            )}
                                            {brand.icon === 'droplet' && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 2s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11Z" />
                                                </svg>
                                            )}
                                            {brand.icon === 'building' && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="3" y="2" width="18" height="20" rx="2" />
                                                    <path d="M9 22v-4h6v4" />
                                                    <path d="M8 6h.01" />
                                                    <path d="M16 6h.01" />
                                                    <path d="M8 10h.01" />
                                                    <path d="M16 10h.01" />
                                                    <path d="M8 14h.01" />
                                                    <path d="M16 14h.01" />
                                                </svg>
                                            )}
                                            {brand.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Product Categories Grid - Like HeavyTech's category layout */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">
                        Product Categories
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-primary font-bold text-text-primary">
                        The Heart of Modern Farming
                    </h3>
                    <p className="text-text-secondary mt-6 max-w-2xl mx-auto">
                        Our diverse range of agriculture and industrial machines stands at the core of modern farming practices. Each piece of equipment is designed with utmost precision.
                    </p>
                    <div className="w-24 h-1.5 bg-brand-primary mx-auto mt-6 rounded-full" />
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {productCategories.map((cat, i) => (
                        <ScrollReveal key={i} delay={i * 80}>
                            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={cat.image}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        alt={cat.name}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    <h4 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg">{cat.name}</h4>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <p className="text-sm text-text-secondary mb-4 flex-grow">{cat.description}</p>
                                    <ul className="space-y-1">
                                        {cat.products.map((p, j) => (
                                            <li key={j} className="flex items-center gap-2 text-xs text-text-secondary font-medium">
                                                <svg className="w-3 h-3 text-brand-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                </svg>
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                    <InquiryPopupButton
                                        {...buildCategoryInquiryLink(cat)}
                                        className="mt-6 w-full py-3 bg-neutral-surface text-text-secondary border border-gray-100 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-2xl text-center text-sm font-bold transition-all duration-300 inline-block cursor-pointer"
                                    >
                                        Inquire Now
                                    </InquiryPopupButton>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Featured Products - Original product cards */}
            <section className="py-24 bg-neutral-surface">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Precision Engineering</h2>
                            <h3 className="text-4xl md:text-5xl font-primary font-bold text-text-primary">Our Popular Product</h3>
                        </div>
                        <p className="text-text-secondary max-w-sm">
                            Genuine Oxon™ products engineered for durability, performance, and maximum ROI.
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
                        {featuredProducts.map((product, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className="group w-full max-w-[300px] bg-white rounded-[1.5rem] p-4 shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col">
                                    <div className="aspect-[5/4] rounded-xl overflow-hidden mb-4 relative">
                                        <img
                                            src={product.image}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            alt={product.name}
                                        />
                                        {product.badge && (
                                            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold shadow-sm uppercase ${product.badgeStyle || 'bg-white/90 backdrop-blur text-brand-primary'
                                                }`}>
                                                {product.badge}
                                            </div>
                                        )}
                                    </div>
                                    <h4 className="text-sm font-bold text-text-primary mb-1.5">{product.name}</h4>
                                    <p className="text-lg font-black text-brand-primary mb-2.5">{product.price}</p>
                                    <ul className="text-[11px] text-text-secondary space-y-1 mb-4 flex-grow">
                                        {product.specs.map((spec, j) => (
                                            <li key={j} className="flex items-center gap-2 font-medium">
                                                <svg className="w-3 h-3 text-brand-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                </svg>
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                    <InquiryPopupButton
                                        {...buildFeaturedProductInquiryLink(product)}
                                        className="w-full py-2 bg-neutral-surface text-text-secondary border border-gray-100 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-lg text-center text-xs font-bold transition-all duration-300 inline-block leading-none cursor-pointer"
                                    >
                                        Get Quote
                                    </InquiryPopupButton>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-brand-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-5xl font-primary font-bold text-white mb-6">
                            Need Bulk Orders?
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                            Get the best wholesale prices for your business. We offer competitive pricing for retailers and dealers across India.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-gray-100 transition-all flex items-center gap-3"
                            >
                                Request Bulk Quote
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </Link>
                            <a
                                href="tel:7828832346"
                                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all"
                            >
                                Call: 7828832346
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}

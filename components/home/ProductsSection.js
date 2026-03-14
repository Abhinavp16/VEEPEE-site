import ScrollReveal from '@/components/ScrollReveal';
import FeaturedProductCard from '@/components/products/FeaturedProductCard';
import { normalizeFeaturedProduct } from '@/lib/featured-products';

const defaultProducts = [
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
        name: 'Oxon 350 Arc Welder',
        price: 'Request Quote',
        image: 'https://images.unsplash.com/photo-1727098730153-6408da60d89d?w=600&h=600&fit=crop&q=80',
        specs: ['350 Amp Output', 'Industrial Grade', 'Copper Winding'],
    },
];

const defaultFeaturedSection = {
    eyebrow: 'PRECISION ENGINEERING',
    title: 'Our Popular Products',
    sideText: 'Genuine Oxon products engineered for durability, performance, and maximum ROI.',
    buttonText: 'Get Quote',
};

export default function ProductsSection({
    products = defaultProducts,
    section = defaultFeaturedSection,
}) {
    return (
        <section id="products" className="py-24 bg-neutral-surface">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <ScrollReveal>
                        <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">{section.eyebrow}</h2>
                        <h3 className="text-3xl md:text-4xl font-primary font-bold text-text-primary">{section.title}</h3>
                    </ScrollReveal>
                    <ScrollReveal>
                        <p className="text-text-secondary text-sm max-w-sm">
                            {section.sideText}
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {products.map((product, i) => (
                        <ScrollReveal key={i} delay={i * 50}>
                            <FeaturedProductCard product={normalizeFeaturedProduct(product, i)} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

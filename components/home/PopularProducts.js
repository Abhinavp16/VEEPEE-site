import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const popularProducts = [
    {
        name: 'Oxon 6W200 Combined Mill',
        price: 'Request Quote',
        image: 'https://image.pollinations.ai/prompt/combined%20rice%20mill%20and%20flour%20mill%20machine%20heavy%20duty%20agricultural%20equipment%20photorealistic?width=400&height=400&nologo=true',
        badge: 'Popular',
        specs: ['Combined Rice & Flour Mill', 'Heavy Duty Motor'],
    },
    {
        name: 'Oxon 52cc Side Pack Brush Cutter',
        price: 'Request Quote',
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/MQ/OA/WO/4609659/backpack-brush-cutter.jpg',
        badge: 'Hot',
        specs: ['52cc Engine', 'Side Pack Design'],
    },
    {
        name: 'Oxon 350 Arc Welding Machine',
        price: 'Request Quote',
        image: 'https://image.pollinations.ai/prompt/industrial%20arc%20welding%20machine%20inverter%20welder%20equipment%20photorealistic?width=400&height=400&nologo=true',
        specs: ['350 Amp Output', 'Industrial Grade'],
    },
    {
        name: 'Oxon 50L Oil Free Air Compressor',
        price: 'Request Quote',
        image: 'https://image.pollinations.ai/prompt/50L%20oil%20free%20air%20compressor%20industrial%20machine%20photorealistic?width=400&height=400&nologo=true',
        specs: ['50L Tank Capacity', 'Oil Free Operation'],
    },
    {
        name: 'Oxon 3-Inch Petrol Water Pump',
        price: 'Request Quote',
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/8/YY/IV/QJ/29082/wp-30-petrol-water-pump-500x500.jpg',
        badge: 'Best Value',
        specs: ['3-Inch Discharge', 'Petrol Engine'],
    },
];

export default function PopularProducts() {
    return (
        <section id="popular-products" className="py-24 bg-white">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Customer Favorites</h2>
                        <h3 className="text-3xl md:text-5xl font-primary font-bold text-text-primary px-4 bg-gradient-to-r from-brand-primary to-brand-dark bg-clip-text text-transparent">
                            Our Popular Product
                        </h3>
                        <div className="w-24 h-1.5 bg-brand-primary mx-auto mt-6 rounded-full" />
                    </ScrollReveal>
                </div>

                <div className="flex lg:grid lg:grid-cols-5 gap-6 overflow-x-auto pb-8 lg:pb-0 scrollbar-hide snap-x">
                    {popularProducts.map((product, i) => (
                        <ScrollReveal key={i} delay={i * 50} className="min-w-[280px] lg:min-w-0 snap-center">
                            <div className="group bg-neutral-surface rounded-2xl p-4 shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col h-full hover:-translate-y-2 duration-300 relative overflow-hidden">
                                <div className="aspect-square rounded-xl overflow-hidden mb-4 relative bg-gray-50">
                                    <img
                                        src={product.image}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        alt={product.name}
                                    />
                                    {product.badge && (
                                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold shadow-sm uppercase bg-brand-primary text-white">
                                            {product.badge}
                                        </div>
                                    )}
                                </div>
                                <h4 className="text-sm font-bold text-text-primary mb-2 line-clamp-1 group-hover:text-brand-primary transition-colors">{product.name}</h4>
                                <ul className="text-[10px] text-gray-500 space-y-1 mb-4 flex-grow">
                                    {product.specs.map((spec, j) => (
                                        <li key={j} className="flex items-center gap-1.5">
                                            <div className="w-1 h-1 rounded-full bg-brand-primary/50" />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center justify-between gap-3 mt-auto pt-3 border-t border-gray-200/50">
                                    <span className="text-sm font-bold text-brand-primary">{product.price}</span>
                                    <Link
                                        href="/contact"
                                        className="flex items-center gap-1 px-3 py-1.5 bg-brand-primary text-white text-[10px] font-bold rounded-lg hover:bg-brand-dark transition-all shadow-lg shadow-brand-primary/20"
                                    >
                                        Inquire
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-text-primary text-white font-bold rounded-full hover:bg-brand-primary transition-all duration-300 group shadow-xl"
                    >
                        View All Products
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import InquiryPopupButton from '@/components/InquiryPopupButton';

const defaultProductCategories = [
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

async function getCategories() {
    const rawBase = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || 'http://localhost:5000/api/v1';
    const apiBase = rawBase.replace(/\/+$/, '');

    try {
        const response = await fetch(`${apiBase}/settings/website-content`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            return defaultProductCategories;
        }

        const json = await response.json();
        const productCategories = Array.isArray(json?.data?.productCategories) && json.data.productCategories.length > 0
            ? json.data.productCategories
            : defaultProductCategories;

        return productCategories;
    } catch {
        return defaultProductCategories;
    }
}

export async function generateMetadata({ params }) {
    const categories = await getCategories();
    // Await params to avoid Next.js 15+ warnings
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    
    // Reverse engineer the category name from the slug as best as we can to find it
    const category = categories.find(c => 
        encodeURIComponent(c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')).replace(/^-|-$/g, '') === slug
    );

    return {
        title: category ? `${category.name} - Veepee Impex` : 'Category Products - Veepee Impex',
        description: category ? category.description : 'Browse our products in this category.',
    };
}

export default async function CategoryPage({ params }) {
    const categories = await getCategories();
    // Await params to avoid Next.js 15+ warnings
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    
    // Reverse engineer the category name from the slug as best as we can to find it
    const category = categories.find(c => 
        encodeURIComponent(c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')).replace(/^-|-$/g, '') === slug
    );

    if (!category) {
        return (
            <div className="page-transition min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl md:text-5xl font-primary font-bold text-text-primary mb-6">Category Not Found</h1>
                <p className="text-text-secondary text-lg mb-8">We couldn't find the category you were looking for.</p>
                <Link
                    href="/products"
                    className="px-8 py-3 bg-brand-primary text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-cta"
                >
                    Back to Products
                </Link>
            </div>
        );
    }

    return (
        <div className="page-transition">
            <PageHero
                title={category.name}
                subtitle={category.description}
                breadcrumbItems={['Products', category.name]}
            />

            <section className="py-24 px-6 max-w-7xl mx-auto">
                <ScrollReveal className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-primary font-bold text-text-primary mb-4">
                        All Products in {category.name}
                    </h2>
                    <p className="text-text-secondary">
                        Browse our complete range of {category.name.toLowerCase()} for your agricultural and industrial needs.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.products.map((productName, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full group">
                                {/* Simulated Image Placeholder */}
                                <div className="h-48 mb-6 rounded-2xl bg-gray-50 flex items-center justify-center overflow-hidden relative">
                                    <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <svg className="w-16 h-16 text-gray-200 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-text-primary mb-3">{productName}</h3>
                                <div className="mt-auto pt-6">
                                    <InquiryPopupButton
                                        productName={productName}
                                        details={[]}
                                        className="w-full py-3 bg-brand-primary text-white rounded-xl text-center text-sm font-bold shadow-cta hover:-translate-y-0.5 transition-all duration-300 inline-block cursor-pointer"
                                    >
                                        Inquire About This Product
                                    </InquiryPopupButton>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>
        </div>
    );
}

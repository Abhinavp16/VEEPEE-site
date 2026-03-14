import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import InquiryPopupButton from '@/components/InquiryPopupButton';

const productCardFallbackImage = 'https://placehold.co/800x520/f3f4f6/94a3b8?text=Product';

function slugifyCategoryName(name = '') {
    return encodeURIComponent(String(name).toLowerCase().replace(/[^a-z0-9]+/g, '-')).replace(/^-|-$/g, '');
}

function normalizeCategoryProduct(product, index) {
    if (typeof product === 'string') {
        return {
            name: product.trim(),
            shortDescription: '',
            description: '',
            image: '',
            images: [],
            slug: '',
            productId: '',
            sku: '',
            stock: 0,
            retailPrice: 0,
            wholesalePrice: 0,
            mrp: 0,
            order: index,
        };
    }

    const images = Array.isArray(product?.images)
        ? product.images.map((image) => String(image || '').trim()).filter(Boolean)
        : [];

    return {
        name: String(product?.name || '').trim(),
        shortDescription: String(product?.shortDescription || '').trim(),
        description: String(product?.description || '').trim(),
        image: String(product?.image || images[0] || '').trim(),
        images,
        slug: String(product?.slug || '').trim(),
        productId: String(product?.productId || '').trim(),
        sku: String(product?.sku || '').trim(),
        stock: Number(product?.stock) || 0,
        retailPrice: Number(product?.retailPrice) || 0,
        wholesalePrice: Number(product?.wholesalePrice) || 0,
        mrp: Number(product?.mrp) || 0,
        order: Number.isFinite(product?.order) ? product.order : index,
    };
}

function getCategoryProducts(category) {
    const productDetails = Array.isArray(category?.productDetails)
        ? category.productDetails.map((product, index) => normalizeCategoryProduct(product, index)).filter((product) => product.name)
        : [];

    if (productDetails.length > 0) {
        return productDetails.sort((a, b) => (a.order || 0) - (b.order || 0));
    }

    return Array.isArray(category?.products)
        ? category.products.map((product, index) => normalizeCategoryProduct(product, index)).filter((product) => product.name)
        : [];
}

function formatPrice(value) {
    if (!Number.isFinite(value) || value <= 0) {
        return '';
    }

    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(value);
}

function buildProductInquiryDetails(product) {
    const details = [];

    if (product.shortDescription) {
        details.push(product.shortDescription);
    } else if (product.description) {
        details.push(product.description);
    }
    if (product.sku) {
        details.push(`SKU: ${product.sku}`);
    }
    if (product.stock > 0) {
        details.push(`Stock: ${product.stock}`);
    }

    return details;
}

function getProductHighlights(product) {
    const baseText = product.shortDescription || product.description || '';

    return baseText
        .split(/\r?\n|[|.]/)
        .map((item) => item.replace(/^[\s\-\u2022.]+/, '').trim())
        .filter(Boolean)
        .slice(0, 2);
}

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
    const rawBase =
        process.env.NEXT_PUBLIC_API_BASE_URL ||
        process.env.API_BASE_URL ||
        process.env.NEXT_PUBLIC_WEBSITE_API_BASE_URL ||
        'https://veepee-impex.vercel.app/api/v1';
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
        slugifyCategoryName(c.name) === slug
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
        slugifyCategoryName(c.name) === slug
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

    const categoryProducts = getCategoryProducts(category);

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
                    {categoryProducts.map((product, index) => {
                        const displayPrice = formatPrice(product.retailPrice || product.wholesalePrice || product.mrp);
                        const productDescription = product.shortDescription || product.description || `Browse details and send an inquiry for ${product.name}.`;
                        const productHighlights = getProductHighlights(product);
                        return (
                            <ScrollReveal key={index} delay={index * 100}>
                                <div className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">
                                    <div className="relative h-56 overflow-hidden bg-neutral-surface">
                                        <img
                                            src={product.image || productCardFallbackImage}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                                        <div className="absolute top-4 right-4">
                                            <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold shadow-sm backdrop-blur ${product.stock > 0 ? 'bg-white/92 text-emerald-700' : 'bg-white/92 text-rose-600'}`}>
                                                {product.stock > 0 ? 'In Stock' : 'Check Availability'}
                                            </span>
                                        </div>
                                        {displayPrice && (
                                            <div className="absolute left-4 bottom-4 rounded-2xl bg-white/92 px-4 py-2 shadow-lg backdrop-blur">
                                                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">Price</p>
                                                <p className="text-base font-black text-brand-primary">{displayPrice}</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="mb-4">
                                            <div className="mb-3 h-1.5 w-14 rounded-full bg-brand-primary/80" />
                                            <h3 className="text-2xl font-primary font-bold leading-tight text-text-primary">
                                                {product.name}
                                            </h3>
                                        </div>

                                        <p className="text-sm leading-7 text-text-secondary line-clamp-3">
                                            {productDescription}
                                        </p>

                                        {productHighlights.length > 0 && (
                                            <div className="mt-5 rounded-[1.5rem] bg-neutral-surface px-4 py-4">
                                                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-primary">
                                                    Product Highlights
                                                </p>
                                                <ul className="space-y-2.5">
                                                    {productHighlights.map((highlight, highlightIndex) => (
                                                        <li key={highlightIndex} className="flex items-start gap-3 text-sm leading-6 text-text-secondary">
                                                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-primary" />
                                                            <span>{highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        <div className="mt-5 flex flex-wrap gap-2 text-xs">
                                            {product.sku && (
                                                <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5 font-semibold text-gray-600">
                                                    SKU: {product.sku}
                                                </span>
                                            )}
                                            {product.stock > 0 && (
                                                <span className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1.5 font-semibold text-brand-primary">
                                                    {product.stock} available
                                                </span>
                                            )}
                                        </div>

                                        <div className="mt-auto pt-6">
                                        <InquiryPopupButton
                                            productName={product.name}
                                            price={displayPrice}
                                            details={buildProductInquiryDetails(product)}
                                            className="w-full rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary py-3.5 text-center text-sm font-bold text-white shadow-[0_14px_30px_rgba(249,115,22,0.26)] inline-block cursor-pointer"
                                        >
                                            Inquire About This Product
                                        </InquiryPopupButton>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                    {categoryProducts.length === 0 && (
                        <div className="md:col-span-2 lg:col-span-3 rounded-[2rem] border border-dashed border-gray-300 bg-white/70 p-10 text-center">
                            <h3 className="text-2xl font-primary font-bold text-text-primary">No products added yet</h3>
                            <p className="mt-3 text-text-secondary">
                                This category is live, but no active products are linked to it right now.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

const defaultHeroImages = [
    '/images/Banner/1.jpg',
    '/images/Banner/2.jpg',
    '/images/Banner/3.jpg',
    '/images/Banner/4.jpg',
    '/images/Banner/5.jpg',
];

const defaultProductCategories = [
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

const defaultFeaturedProducts = [
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

const defaultCategoriesSection = {
    eyebrow: 'PRODUCT CATEGORIES',
    title: 'Our Expertise Areas',
    description: 'Explore our core machinery categories for agriculture, fabrication, irrigation, and workshop use.',
    buttonText: 'View Products',
};

const defaultFeaturedSection = {
    eyebrow: 'PRECISION ENGINEERING',
    title: 'Our Popular Products',
    sideText: 'Genuine Oxon products engineered for durability, performance, and maximum ROI.',
    buttonText: 'Get Quote',
};

export async function getWebsiteContent() {
    const rawBase =
        process.env.NEXT_PUBLIC_API_BASE_URL ||
        process.env.API_BASE_URL ||
        process.env.NEXT_PUBLIC_WEBSITE_API_BASE_URL ||
        'https://veepee-impex.vercel.app/api/v1';
    const apiBase = rawBase.replace(/\/+$/, '');

    try {
        const response = await fetch(`${apiBase}/settings/website-content`, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`Failed to load website content: ${response.status}`);
        }

        const json = await response.json();
        const heroImages = Array.isArray(json?.data?.heroCards) && json.data.heroCards.length > 0
            ? json.data.heroCards.map((card, index) => card?.image || defaultHeroImages[index]).filter(Boolean)
            : defaultHeroImages;
        const featuredProducts = Array.isArray(json?.data?.featuredProducts) && json.data.featuredProducts.length > 0
            ? json.data.featuredProducts
            : defaultFeaturedProducts;
        const productCategories = Array.isArray(json?.data?.productCategories) && json.data.productCategories.length > 0
            ? json.data.productCategories.map((category, index) => ({
                name: category?.name || defaultProductCategories[index]?.name || '',
                description: category?.description || '',
                image: category?.image || defaultProductCategories[index]?.image || defaultHeroImages[0],
                fallback: category?.image || defaultProductCategories[index]?.fallback || defaultHeroImages[0],
            }))
            : defaultProductCategories;
        const featuredSection = json?.data?.featuredSection
            ? { ...defaultFeaturedSection, ...json.data.featuredSection }
            : defaultFeaturedSection;
        const categoriesSection = json?.data?.categoriesSection
            ? { ...defaultCategoriesSection, ...json.data.categoriesSection }
            : defaultCategoriesSection;

        return {
            heroImages,
            featuredProducts,
            productCategories,
            featuredSection,
            categoriesSection,
        };
    } catch (error) {
        console.error('Error fetching website content:', error);
        return {
            heroImages: defaultHeroImages,
            featuredProducts: defaultFeaturedProducts,
            productCategories: defaultProductCategories,
            featuredSection: defaultFeaturedSection,
            categoriesSection: defaultCategoriesSection,
        };
    }
}

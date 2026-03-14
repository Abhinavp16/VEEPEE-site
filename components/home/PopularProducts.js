"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import FeaturedProductCard from '@/components/products/FeaturedProductCard';
import {
    defaultFeaturedProducts,
    normalizeFeaturedProduct,
} from '@/lib/featured-products';

export default function PopularProducts() {
    const [products, setProducts] = useState(defaultFeaturedProducts.map((product, index) => normalizeFeaturedProduct(product, index)));

    useEffect(() => {
        async function loadPopular() {
            try {
                const rawBase = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_WEBSITE_API_BASE_URL || 'http://localhost:5000/api/v1';
                const apiBase = rawBase.replace(/\/+$/, '');
                const res = await fetch(`${apiBase}/settings/website-content`, { cache: 'no-store' });
                const json = await res.json();
                if (json?.data?.featuredProducts?.length > 0) {
                    setProducts(json.data.featuredProducts.map((product, index) => normalizeFeaturedProduct(product, index)));
                }
            } catch (error) {
                console.error('Error fetching popular products:', error);
            }
        }
        loadPopular();
    }, []);

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
                    {products.map((product, i) => (
                        <ScrollReveal key={i} delay={i * 50} className="min-w-[280px] lg:min-w-0 snap-center">
                            <FeaturedProductCard product={product} />
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

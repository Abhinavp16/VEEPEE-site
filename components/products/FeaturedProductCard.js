import Link from 'next/link';
import {
    featuredProductFallbackImage,
    normalizeFeaturedProduct,
    slugifyFeaturedProduct,
} from '@/lib/featured-products';

export default function FeaturedProductCard({
    product,
    href,
}) {
    const normalizedProduct = normalizeFeaturedProduct(product);
    const productHref = href || `/products/${slugifyFeaturedProduct(normalizedProduct)}`;
    const visibleSpecs = normalizedProduct.specs.slice(0, 2);

    return (
        <div className="group mx-auto flex h-full w-full max-w-[320px] flex-col rounded-[1.8rem] border border-orange-100 bg-white p-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
            <div className="relative mb-4 aspect-square overflow-hidden rounded-[1.35rem] bg-white">
                <img
                    src={normalizedProduct.image || featuredProductFallbackImage}
                    className="h-full w-full object-contain object-center"
                    alt={normalizedProduct.name}
                />
                {normalizedProduct.badge && (
                    <div className={`absolute left-3 top-3 rounded-xl px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] shadow-sm ${normalizedProduct.badgeStyle || 'border border-orange-100 bg-white text-brand-primary'}`}>
                        {normalizedProduct.badge}
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col px-1">
                <h4 className="min-h-[4rem] text-[1.05rem] font-bold leading-snug text-brand-primary">
                    {normalizedProduct.name}
                </h4>

                <div className="mt-3">
                    <p className="text-xs font-bold text-gray-400">Key Features:</p>
                    <ul className="mt-2 space-y-2 text-[0.92rem] leading-relaxed text-gray-500">
                        {visibleSpecs.map((spec, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-200" />
                                <span>{spec}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-orange-50 pt-5">
                    <p className="text-[1.1rem] font-black text-brand-primary">
                        {normalizedProduct.price}
                    </p>
                    <Link
                        href={productHref}
                        aria-label={`View details for ${normalizedProduct.name}`}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-light/60 text-brand-primary shadow-sm transition-colors hover:bg-brand-primary hover:text-white"
                    >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

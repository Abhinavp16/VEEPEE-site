'use client';

import { useRouter } from 'next/navigation';

export default function BackButton({ fallbackHref = '/' }) {
    const router = useRouter();

    const handleBack = () => {
        if (typeof window !== 'undefined' && window.history.length > 1) {
            router.back();
            return;
        }

        router.push(fallbackHref);
    };

    return (
        <button
            type="button"
            onClick={handleBack}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-[0_10px_30px_rgba(15,23,42,0.28)] backdrop-blur-md transition-colors hover:bg-white/16"
            aria-label="Go back"
        >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path
                    d="M15 5L8 12L15 19"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}

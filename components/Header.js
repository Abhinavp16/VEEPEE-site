'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/dealership', label: 'Dealership' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8`}
        >
            <nav
                className={`flex items-center justify-between px-6 py-3 max-w-7xl mx-auto w-full transition-all duration-500 rounded-2xl ${scrolled
                        ? 'bg-white/80 backdrop-blur-md border border-white/20 ring-1 ring-black/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] py-2.5'
                        : 'bg-white border border-gray-100/80 ring-4 ring-gray-50/50 shadow-sm py-4'
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-11 h-11 bg-brand-primary rounded-xl flex items-center justify-center shadow-cta transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 0 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a4 4 0 0 1 4-4Z" />
                            <path d="M12 2v1" />
                            <path d="m4.9 4.9.7.7" />
                            <path d="m18.4 4.9-.7.7" />
                            <path d="M12 22v-5" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-text-primary leading-none group-hover:text-brand-primary transition-colors">
                            Veepee Impex
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-primary font-bold mt-1">
                            Pan India Distributor
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2 p-1 bg-gray-50/50 rounded-full border border-gray-100/50">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${pathname === link.href
                                ? 'text-white bg-brand-primary shadow-sm'
                                : 'text-text-secondary hover:text-brand-primary hover:bg-white'
                                }`}
                        >
                            <span className="relative z-10">{link.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="tel:7828832346"
                        className="px-6 py-2.5 rounded-full border border-gray-200 text-sm font-bold text-text-primary hover:border-brand-primary hover:text-brand-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group bg-white"
                    >
                        <svg className="group-hover:animate-bounce" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Call Us
                    </a>
                    <Link
                        href="/contact"
                        className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-sm font-bold hover:shadow-[0_8px_25px_rgba(22,163,74,0.4)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group shadow-cta"
                    >
                        <span className="relative z-10">Get Best Deals</span>
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]"></div>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-text-primary hover:bg-brand-light transition-colors border border-gray-100"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    )}
                </button>

                {/* Mobile Dropdown */}
                <div
                    className={`${mobileOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-10 opacity-0 pointer-events-none'
                        } absolute top-[calc(100%+12px)] left-0 w-full bg-white/95 backdrop-blur-xl border border-gray-100 p-6 flex flex-col gap-3 rounded-2xl shadow-2xl z-50 transition-all duration-300 md:hidden`}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-base font-bold px-4 py-3 rounded-xl transition-all ${pathname === link.href
                                ? 'bg-brand-primary text-white shadow-md'
                                : 'text-text-primary hover:bg-brand-light hover:text-brand-primary'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100">
                        <a
                            href="tel:7828832346"
                            className="py-3.5 rounded-xl border border-gray-200 text-center font-bold text-text-primary text-sm hover:bg-gray-50"
                        >
                            Call Support
                        </a>
                        <Link
                            href="/contact"
                            className="py-3.5 rounded-xl bg-brand-primary text-white text-center font-bold text-sm shadow-cta"
                        >
                            Inquiry Now
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

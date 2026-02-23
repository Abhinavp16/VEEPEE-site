export default function PageHero({ title, subtitle, breadcrumbItems }) {
    return (
        <section className="relative bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1685988466819-59f04ed4e035?w=1920&h=600&fit=crop&q=60')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
            <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
                <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                    <a href="/" className="hover:text-brand-primary transition-colors">Home</a>
                    {breadcrumbItems?.map((item, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                            <span className="text-white font-semibold">{item}</span>
                        </span>
                    ))}
                </nav>
                <h1 className="text-5xl md:text-7xl font-primary font-bold text-white leading-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl leading-relaxed">
                        {subtitle}
                    </p>
                )}
                <div className="w-24 h-1.5 bg-brand-primary mt-8 rounded-full" />
            </div>
        </section>
    );
}

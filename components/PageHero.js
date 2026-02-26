export default function PageHero({ title, subtitle }) {
    return (
        <section className="relative bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1685988466819-59f04ed4e035?w=1920&h=600&fit=crop&q=60')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
            <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-12 md:pt-44 md:pb-16">
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

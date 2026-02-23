import ScrollReveal from '@/components/ScrollReveal';

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal>
                    <div className="w-12 h-1 bg-brand-primary mb-6" />
                    <h2 className="text-4xl md:text-5xl font-primary font-bold text-text-primary mb-8 leading-tight">
                        Comprehensive <br /> Distribution Solutions
                    </h2>
                    <p className="text-text-secondary text-lg mb-10 leading-relaxed">
                        We &quot;Veepee Impex&quot; are a leading Partnership firm based in Raipur, Chhattisgarh. Since 2023, we have established ourselves as a powerhouse in the wholesale, distribution, and retail of essential Agriculture and Power tools machinery.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4 p-4 rounded-2xl bg-neutral-surface border border-gray-100 hover:border-brand-primary transition-colors">
                            <div className="w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary font-bold">
                                B2B
                            </div>
                            <div>
                                <h4 className="font-bold text-text-primary">Bulk Wholesaling</h4>
                                <p className="text-sm text-text-secondary">Providing competitive pricing for retailers across India.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-2xl bg-neutral-surface border border-gray-100 hover:border-brand-primary transition-colors">
                            <div className="w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary font-bold">
                                B2C
                            </div>
                            <div>
                                <h4 className="font-bold text-text-primary">Direct Retail</h4>
                                <p className="text-sm text-text-secondary">Premium equipment availability for individual consumers.</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-12">
                            <img
                                src="https://images.unsplash.com/photo-1755943421697-a9948e8c6234?w=400&h=600&fit=crop&q=80"
                                className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
                                alt="Industrial Tools"
                            />
                            <div className="bg-brand-primary p-6 rounded-2xl text-white">
                                <p className="text-3xl font-bold italic mb-1">Pan India</p>
                                <p className="text-xs uppercase tracking-tighter opacity-80">Supply Chain Strength</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-gray-900 p-8 rounded-2xl text-white text-center">
                                <p className="text-4xl font-bold mb-2">4.9+</p>
                                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Industry Rating</p>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1764046155497-ad7e50737ffa?w=400&h=600&fit=crop&q=80"
                                className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
                                alt="Warehouse"
                            />
                        </div>
                    </div>
                    <div className="absolute -z-10 -bottom-10 -right-10 w-48 h-48 bg-brand-light rounded-full blur-3xl" />
                </ScrollReveal>
            </div>
        </section>
    );
}

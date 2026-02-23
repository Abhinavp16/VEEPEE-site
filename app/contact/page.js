'use client';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been sent! Our team will get back to you within 24 hours.');
    };

    return (
        <div className="page-transition">
            <PageHero
                title="Contact Us"
                subtitle="Get in touch with our experts. We're here to help you find the perfect machinery solutions for your needs."
                breadcrumbItems={['Contact Us']}
            />

            {/* Contact Info Cards - Inspired by HeavyTech */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Get in Touch</h2>
                    <h3 className="text-4xl md:text-5xl font-primary font-bold text-text-primary">Contact Details</h3>
                    <div className="w-24 h-1.5 bg-brand-primary mx-auto mt-6 rounded-full" />
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <ScrollReveal delay={0}>
                        <div className="bg-brand-primary rounded-3xl p-8 text-white text-center hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-3">Call Us</h4>
                            <p className="text-white/80 text-sm mb-4">Direct Sales Helpline</p>
                            <p className="text-lg font-bold">7828832346</p>
                            <p className="text-lg font-bold">8962732346</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={150}>
                        <div className="bg-gray-900 rounded-3xl p-8 text-white text-center hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-3">Email Us</h4>
                            <p className="text-white/60 text-sm mb-4">Official Correspondance</p>
                            <a href="mailto:ixveepee@gmail.com" className="text-lg font-bold text-brand-primary hover:underline">
                                ixveepee@gmail.com
                            </a>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <div className="bg-brand-dark rounded-3xl p-8 text-white text-center hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-3">Visit Us</h4>
                            <p className="text-white/60 text-sm mb-4">Registered Address</p>
                            <p className="text-sm font-medium">
                                C-15/16, Sector-4, Devendra Nagar,<br />
                                Raipur - 492001, Chhattisgarh
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Contact Form - Full width like HeavyTech */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <ScrollReveal>
                        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-text-primary mb-2">Send us a Message</h3>
                            <p className="text-text-secondary mb-8">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none text-gray-900"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none text-gray-900"
                                            placeholder="john@email.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none text-gray-900"
                                            placeholder="+91 ..."
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Category of Interest</label>
                                        <select className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none text-gray-900 appearance-none">
                                            <option>Agricultural Machinery</option>
                                            <option>Power Tools</option>
                                            <option>Water Management</option>
                                            <option>Rice Mills</option>
                                            <option>Wholesale Inquiry</option>
                                            <option>Dealership Inquiry</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Your Message</label>
                                    <textarea
                                        className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none text-gray-900 min-h-[150px]"
                                        placeholder="Tell us what you need..."
                                        required
                                    />
                                </div>
                                <div className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1 accent-brand-primary" required />
                                    <span className="text-xs text-text-secondary">
                                        I agree that my data is collected and stored as per the privacy policy.
                                    </span>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold hover:bg-brand-secondary transition-all shadow-lg active:scale-[0.98]"
                                >
                                    Submit Message
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="sticky top-28">
                            {/* Map placeholder */}
                            <div className="bg-gray-100 rounded-3xl overflow-hidden h-[400px] mb-8 border border-gray-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9544!2d81.6296!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde25f!2sDevendra+Nagar+Raipur!5e0!3m2!1sen!2sin!4v1609459200000"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Veepee Impex Location"
                                />
                            </div>

                            {/* Extra Info */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-text-primary mb-4 text-lg">Business Hours</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-text-secondary">Monday - Friday</span>
                                        <span className="font-semibold text-text-primary">10:00 AM – 7:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-secondary">Saturday</span>
                                        <span className="font-semibold text-text-primary">10:00 AM – 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-secondary">Sunday</span>
                                        <span className="font-semibold text-red-500">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}

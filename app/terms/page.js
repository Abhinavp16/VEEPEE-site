import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
    title: 'Terms & Conditions - Veepee Impex',
    description: 'Our terms and conditions for doing business with Veepee Impex.',
};

export default function TermsPage() {
    return (
        <div className="page-transition">
            <PageHero
                title="Terms & Conditions"
                subtitle="Please read these terms and conditions carefully before using our services."
                breadcrumbItems={['Terms & Conditions']}
            />

            <section className="py-24 px-6 max-w-4xl mx-auto">
                <ScrollReveal>
                    <div className="max-w-none text-text-secondary leading-relaxed space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using the Veepee Impex website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">2. Use of Services</h2>
                            <p>
                                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of any account information.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">3. Product Information</h2>
                            <p>
                                We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions or other content are accurate, complete, reliable, current, or error-free.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">4. Intellectual Property</h2>
                            <p>
                                All content on this website, including text, graphics, logos, and images, is the property of Veepee Impex and is protected by intellectual property laws.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">5. Limitation of Liability</h2>
                            <p>
                                Veepee Impex shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">6. Governing Law</h2>
                            <p>
                                These Terms and Conditions shall be governed by and construed in accordance with the laws of India, specifically within the jurisdiction of Raipur, Chhattisgarh.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}

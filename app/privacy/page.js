import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
    title: 'Privacy Policy - Veepee Impex',
    description: 'How we handle and protect your personal data at Veepee Impex.',
};

export default function PrivacyPage() {
    return (
        <div className="page-transition">
            <PageHero
                title="Privacy Policy"
                subtitle="Your privacy is important to us. Learn how we collect, use, and protect your data."
                breadcrumbItems={['Privacy Policy']}
            />

            <section className="py-24 px-6 max-w-4xl mx-auto">
                <ScrollReveal>
                    <div className="max-w-none text-text-secondary leading-relaxed space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">1. Information Collection</h2>
                            <p>
                                We collect information you provide directly to us when you make a purchase, sign up for our newsletter, or contact us for support. This may include your name, email, phone number, and address.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">2. Use of Information</h2>
                            <p>
                                We use your info to process orders, improve our products, and communicate with you about your account or our services. We do not sell your personal data to third parties.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">3. Data Protection</h2>
                            <p>
                                We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">4. Cookies</h2>
                            <p>
                                Our website uses cookies to enhance user experience and analyze site traffic. You can choose to disable cookies through your browser settings.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">5. Changes to This Policy</h2>
                            <p>
                                We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
    title: 'Privacy Policy - Veepee Impex',
    description: 'Privacy Policy for OXON App & Website by Veepee Impex.',
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
                        <div className="prose prose-invert max-w-none">
                            <p className="text-sm text-gray-400 mb-8 italic text-center">Last updated: 12 October 2026</p>

                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-text-primary mb-6">1. Who We Are</h2>
                                <p>
                                    This policy explains how Veepee Impex, C-15/16, Sector-4, Devendra Nagar, Raipur, Chhattisgarh - 492001
                                    (&ldquo;we&rdquo;, &ldquo;us&rdquo;), handles personal data in the OXON App and on this website. We decide why and how
                                    the data described below is used.
                                </p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-text-primary mb-6">2. Information We Collect</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Account:</strong> your name, mobile number, optional email address and a password (stored only as a one-way hash).</li>
                                    <li><strong>Orders:</strong> delivery name, phone and address, items ordered, amounts, order status and your payment details such as a transfer screenshot you upload. Card and bank details are handled by payment providers, not stored by us.</li>
                                    <li><strong>Wholesalers:</strong> business name, GST number, business address, contact person and verification documents you upload, plus price negotiations.</li>
                                    <li><strong>Device and usage:</strong> a push-notification token, and which products you view, so we can send service notifications and improve the catalogue.</li>
                                    <li><strong>Photos:</strong> only images you choose to upload, such as a profile photo or a payment or business proof. The app does not read your photo library otherwise and does not collect your precise location.</li>
                                    <li><strong>Support:</strong> messages you send us by email, phone or WhatsApp.</li>
                                </ul>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-text-primary mb-6">3. How We Use Information</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Create and secure your account, process orders and deliveries</li>
                                    <li>Verify payments and wholesaler accounts</li>
                                    <li>Send order, price-change and account notifications (you can turn notifications off in your device settings)</li>
                                    <li>Provide customer support</li>
                                    <li>Fraud prevention, tax and legal compliance</li>
                                    <li>Marketing communication, only with your consent</li>
                                </ul>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-text-primary mb-6">4. Data Sharing and Processors</h2>
                                <p>We do not sell personal data. We share it only as needed to run the service, with:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li><strong>Google Firebase:</strong> push notifications and file storage for uploaded images.</li>
                                    <li><strong>Payment providers</strong> such as Razorpay, when you pay online.</li>
                                    <li><strong>Logistics partners:</strong> delivery name, phone and address for your order.</li>
                                    <li><strong>Cloud hosting and database providers</strong> that store our data for us.</li>
                                    <li><strong>Authorities</strong>, where the law requires it.</li>
                                </ul>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-text-primary mb-6">5. Your Choices and Rights</h2>
                                <p>
                                    You can view and correct your name, phone, email, address and photo in the app under Profile &rarr; Edit Profile.
                                    You can withdraw marketing consent, and you can ask us for a copy of your data or to correct it by emailing us.
                                    You can delete your account at any time, as described below.
                                </p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-text-primary mb-6">6. Account Deletion and Retention</h2>
                                <p>
                                    Request deletion in the app under Profile &rarr; Account &amp; Privacy, or on our{' '}
                                    <a className="text-brand-primary underline font-semibold" href="/delete-account">account deletion page</a> if you cannot open the app.
                                    After we verify the request, we complete it within 30 days.
                                </p>
                                <p className="mt-4">
                                    Deletion removes your profile, saved address, photo, cart, notifications, push tokens, business details, uploaded
                                    documents and payment screenshots, and closes your login. Order and payment records are kept for as long as tax,
                                    accounting, fraud-prevention and dispute rules require, without your name, phone number or street address.
                                    An order that is still in progress is completed first. Other data is kept only as long as needed for the purposes above.
                                </p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-text-primary mb-6">7. Data Security</h2>
                                <p>
                                    We implement reasonable technical and organizational measures to protect data, including encrypted connections and
                                    hashed passwords. However, no system is completely secure.
                                </p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-text-primary mb-6">8. Cookies</h2>
                                <p>
                                    This website uses cookies to enhance user experience and analyze performance. The OXON App does not use cookies.
                                </p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-text-primary mb-6">9. Children</h2>
                                <p>
                                    Our products are for business and farm use. The OXON App and this website are not directed at children under 18,
                                    and we do not knowingly collect their personal data.
                                </p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-text-primary mb-6">10. Contact and Grievances</h2>
                                <p>
                                    For privacy questions, requests or complaints, write to Veepee Impex Support at{' '}
                                    <a className="text-brand-primary underline font-semibold" href="mailto:ixveepee@gmail.com">ixveepee@gmail.com</a> or call
                                    +91 78288 32346. We respond within 30 days.
                                </p>
                                <p className="mt-4">We may update this policy; the date above shows the latest version.</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}

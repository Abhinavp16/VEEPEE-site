import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
    title: 'Refund & Cancellation - Veepee Impex',
    description: 'Learn about our refund and cancellation policies.',
};

export default function RefundPage() {
    return (
        <div className="page-transition">
            <PageHero
                title="Refund & Cancellation"
                subtitle="Transparent policies for cancellations and refunds to ensure a smooth experience."
                breadcrumbItems={['Refund & Cancellation']}
            />

            <section className="py-24 px-6 max-w-4xl mx-auto">
                <ScrollReveal>
                    <div className="max-w-none text-text-secondary leading-relaxed space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">1. Cancellation Policy</h2>
                            <p>
                                Orders can be cancelled within 24 hours of placement for a full refund. Once the order has been processed or dispatched, cancellations may not be possible or may incur a handling fee.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">2. Return Eligibility</h2>
                            <p>
                                Due to the nature of heavy machinery, returns are only accepted if the product is defective or damaged upon arrival. Please notify us within 48 hours of receipt.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">3. Refund Process</h2>
                            <p>
                                Once a return is approved, refunds are processed within 7-10 business days. The refund will be credited back to the original payment method used during the purchase.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">4. Non-Refundable Items</h2>
                            <p>
                                Customized machinery, spare parts already installed, and items showing signs of usage or tampering are not eligible for refunds or returns.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">5. Support</h2>
                            <p>
                                For any questions regarding your refund or cancellation, please reach out to our support team at ixveepee@gmail.com.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}

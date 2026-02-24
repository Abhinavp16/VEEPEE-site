import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
    title: 'Shipping Policy - Veepee Impex',
    description: 'Information about our shipping and delivery processes.',
};

export default function ShippingPage() {
    return (
        <div className="page-transition">
            <PageHero
                title="Shipping Policy"
                subtitle="We ensure safe and timely delivery of our heavy machinery and tools across India."
                breadcrumbItems={['Shipping Policy']}
            />

            <section className="py-24 px-6 max-w-4xl mx-auto">
                <ScrollReveal>
                    <div className="max-w-none text-text-secondary leading-relaxed space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">1. Shipping Coverage</h2>
                            <p>
                                Veepee Impex provides shipping services across Pan India. We work with trusted logistics partners to ensure your machinery arrives safely at your doorstep or dealership.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">2. Delivery Timelines</h2>
                            <p>
                                Standard delivery typically takes 5-10 business days depending on the location and the size of the equipment. We will provide you with a more accurate estimate at the time of order confirmation.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">3. Shipping Costs</h2>
                            <p>
                                Shipping costs are calculated based on the weight, dimensions of the product, and the delivery destination. Any applicable shipping charges will be clearly stated during the checkout process.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">4. Tracking Your Order</h2>
                            <p>
                                Once your order is dispatched, you will receive a tracking number via email or SMS to monitor the status of your shipment.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-4">5. Handling and Damage</h2>
                            <p>
                                We take extreme care in packaging. However, if your order arrives damaged, please report it to us within 24 hours of delivery so we can assist with a resolution.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}

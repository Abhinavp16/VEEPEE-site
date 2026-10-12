import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import AccountDeletionRequestForm from '@/components/AccountDeletionRequestForm';

export const metadata = {
    title: 'Request Account Deletion - Veepee Impex',
    description: 'Delete your OXON App account and the personal data linked to it.',
};

const SUPPORT_EMAIL = 'ixveepee@gmail.com';

export default function DeleteAccountPage() {
    return (
        <div className="page-transition">
            <PageHero
                title="Request Account Deletion"
                subtitle="Delete your OXON App account and the personal data linked to it."
                breadcrumbItems={['Request Account Deletion']}
            />

            <section className="py-24 px-6 max-w-4xl mx-auto">
                <ScrollReveal>
                    <div className="space-y-10 text-text-secondary leading-relaxed">
                        <div className="rounded-3xl border border-brand-primary/20 bg-brand-light/40 p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">Delete from the app</h2>
                            <p className="mt-3">
                                Open the OXON App, go to <strong>Profile &rarr; Account &amp; Privacy</strong> and choose
                                {' '}<strong>Request account deletion</strong>. You can cancel the request there until we start reviewing it.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 space-y-3">
                            <h2 className="text-2xl font-bold text-text-primary">Cannot open the app?</h2>
                            <p>
                                Submit the form below, using the name and mobile number on your account. After we verify the request with
                                the account holder, we complete deletion within <strong>30 days</strong>.
                            </p>
                        </div>

                        <AccountDeletionRequestForm />

                        <div className="space-y-4 rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-text-primary">What is deleted</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Your profile details, saved address and profile photo</li>
                                <li>Your cart, notifications and push-notification tokens</li>
                                <li>Wholesaler business details and uploaded verification documents</li>
                                <li>Payment screenshots you uploaded</li>
                                <li>Open price negotiations</li>
                                <li>Your login: access is revoked and the mobile number can be used to register again</li>
                            </ul>
                            <h2 className="pt-4 text-2xl font-bold text-text-primary">What we keep</h2>
                            <p>
                                Past orders and payment records are kept because tax, accounting, fraud-prevention and dispute rules
                                require them. They are kept <strong>without your name, phone number or street address</strong>; only the order
                                items, amounts, dates and the city, state and pincode of delivery remain.
                            </p>
                            <p>
                                If you have an order in progress, we complete the deletion after it is delivered or cancelled.
                            </p>
                            <p>
                                Questions about this process? Email{' '}
                                <a className="font-semibold text-brand-primary underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}

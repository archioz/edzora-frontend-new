import React, { useEffect } from 'react';
import { FileText } from 'lucide-react';

const TermsOfService = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-vh-100 d-flex flex-column">
            <div className="flex-grow-1 py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="text-center mb-5">
                                <FileText className="text-primary mb-4" size={64} />
                                <h1 className="display-5 fw-bold mb-4">Terms of Service</h1>
                                <p className="lead text-secondary">Effective Date: 01-03-2025</p>
                            </div>

                            <div className="card border-0 custom-shadow p-4 p-md-5">
                                <div className="policy-content">
                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">1. Introduction</h2>
                                        <p>Welcome to Edzora! By accessing or using our website, you agree to comply with these Terms of Service.</p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">2. Use of Our Services</h2>
                                        <p>You agree to use our services only for lawful purposes and in a manner that does not violate the rights of others.</p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">3. User Accounts</h2>
                                        <p>To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials.</p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">4. Payment & Transactions</h2>
                                        <p>All payments made on our platform are subject to our payment terms. We use third-party payment providers, and by using our services, you agree to their terms.</p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">5. Intellectual Property</h2>
                                        <p>All content on this website, including text, images, and logos, is owned by us or our licensors and may not be used without permission.</p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">6. Termination</h2>
                                        <p>We reserve the right to suspend or terminate your access to our services if you violate these Terms of Service.</p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">7. Limitation of Liability</h2>
                                        <p>We are not liable for any damages resulting from your use of our services, except as required by law.</p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">8. Changes to These Terms</h2>
                                        <p>We may update these Terms of Service at any time. Continued use of our services means you accept the updated terms.</p>
                                    </section>

                                    <section>
                                        <h2 className="h3 fw-bold mb-4">9. Contact Us</h2>
                                        <p>If you have any questions about these Terms of Service, contact us at:</p>
                                        <ul>
                                            <li><strong>Email:</strong> edzoraofficial@gmail.com</li>
                                            <li><strong>Website:</strong> www.edzora.com</li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;

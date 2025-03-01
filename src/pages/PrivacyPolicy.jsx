import React, { useEffect } from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {

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
                                <Shield className="text-primary mb-4" size={64} />
                                <h1 className="display-5 fw-bold mb-4">Privacy Policy</h1>
                                <p className="lead text-secondary">Effective Date: 01-03-2025</p>
                            </div>

                            <div className="card border-0 custom-shadow p-4 p-md-5">
                                <div className="policy-content">
                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">1. Information We Collect</h2>
                                        <p>We collect the following types of information:</p>
                                        <ul>
                                            <li><strong>Personal Information:</strong> Name, email address, and other details when you register on our site.</li>
                                            <li><strong>Transaction Information:</strong> If and when we integrate a payment gateway, we will update this section accordingly.</li>
                                            <li><strong>Technical Data:</strong> IP address, browser type, and usage data to improve our services.</li>
                                        </ul>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">2. How We Use Your Information</h2>
                                        <p>We use your information to:</p>
                                        <ul>
                                            <li>Provide access to digital products and services.</li>
                                            <li>Improve our services and customer experience.</li>
                                            <li>Comply with legal and regulatory obligations.</li>
                                        </ul>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">3. Payment Processing (Upcoming)</h2>
                                        <p>We have applied for a payment gateway integration and will update this section once it is approved. Until then, we do not collect or process payment information.</p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">4. Data Security</h2>
                                        <p>We implement security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">5. Sharing Your Information</h2>
                                        <p>We do not sell, trade, or rent your personal information. We may share data with service providers who help us operate our business.</p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">6. Your Rights</h2>
                                        <p>You have the right to access, modify, or delete your personal data by contacting us at edzoraofficial@gmail.com.</p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">7. Cookies</h2>
                                        <p>We use cookies to enhance your experience. You can disable cookies in your browser settings.</p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">8. Changes to This Policy</h2>
                                        <p>We may update this policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
                                    </section>

                                    <section>
                                        <h2 className="h3 fw-bold mb-4">9. Contact Us</h2>
                                        <p>For any questions regarding this Privacy Policy, please contact us at:</p>
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

export default PrivacyPolicy;

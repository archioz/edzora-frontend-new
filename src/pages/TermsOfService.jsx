import React from 'react';
import { FileText } from 'lucide-react';

const TermsOfService = () => {
    return (
        <div className="min-vh-100 d-flex flex-column">

            <div className="flex-grow-1 py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="text-center mb-5">
                                <FileText className="text-primary mb-4" size={64} />
                                <h1 className="display-5 fw-bold mb-4">Terms of Service</h1>
                                <p className="lead text-secondary">Last updated: June 15, 2025</p>
                            </div>

                            <div className="card border-0 custom-shadow p-4 p-md-5">
                                <div className="policy-content">
                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">1. Introduction</h2>
                                        <p>
                                            Welcome to DigitalMarket. These Terms of Service ("Terms") govern your use of our website and services
                                            offered by DigitalMarket ("we," "us," or "our"). By accessing or using our website and services,
                                            you agree to be bound by these Terms.
                                        </p>
                                        <p>
                                            Please read these Terms carefully before using our platform. If you do not agree to these Terms,
                                            you may not access or use our website or services.
                                        </p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">2. Account Registration</h2>
                                        <p>
                                            To access certain features of our platform, you may be required to register for an account.
                                            You agree to provide accurate, current, and complete information during the registration process
                                            and to update such information to keep it accurate, current, and complete.
                                        </p>
                                        <p>
                                            You are responsible for safeguarding your password and for all activities that occur under your account.
                                            You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                                        </p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">3. Digital Products</h2>
                                        <h3 className="h5 fw-bold mb-3">3.1 Purchases</h3>
                                        <p>
                                            All purchases through our platform are subject to product availability. We reserve the right to
                                            discontinue any product at any time. Prices for our products are subject to change without notice.
                                        </p>

                                        <h3 className="h5 fw-bold mb-3">3.2 Digital Content</h3>
                                        <p>
                                            Upon purchasing digital content, we grant you a non-exclusive, non-transferable license to use
                                            the content for personal, non-commercial purposes, subject to these Terms.
                                        </p>

                                        <h3 className="h5 fw-bold mb-3">3.3 Intellectual Property</h3>
                                        <p>
                                            All digital products sold on our platform are protected by copyright and other intellectual property laws.
                                            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
                                            republish, download, store, or transmit any of the material on our platform, except as permitted by these Terms.
                                        </p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">4. Payment Terms</h2>
                                        <p>
                                            By providing a payment method, you represent and warrant that you are authorized to use the designated
                                            payment method and that you authorize us to charge your payment method for the total amount of your purchase.
                                        </p>
                                        <p>
                                            Payment must be received prior to the delivery of any digital product. All sales are final and non-refundable
                                            except as provided in our Refund Policy.
                                        </p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">5. User Conduct</h2>
                                        <p>
                                            You agree not to use our platform:
                                        </p>
                                        <ul>
                                            <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                                            <li>To transmit any material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory, or otherwise objectionable</li>
                                            <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the platform</li>
                                            <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the platform</li>
                                            <li>To conduct any systematic or automated data collection activities on or in relation to our platform</li>
                                        </ul>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">6. Limitation of Liability</h2>
                                        <p>
                                            In no event will we, our affiliates, or their licensors, service providers, employees, agents, officers,
                                            or directors be liable for damages of any kind, under any legal theory, arising out of or in connection
                                            with your use, or inability to use, our platform, any websites linked to it, any content on our platform
                                            or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
                                        </p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">7. Indemnification</h2>
                                        <p>
                                            You agree to defend, indemnify, and hold harmless us, our affiliates, licensors, and service providers,
                                            and our and their respective officers, directors, employees, contractors, agents, licensors, suppliers,
                                            successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses,
                                            costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the platform.
                                        </p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">8. Termination</h2>
                                        <p>
                                            We may terminate or suspend your account and bar access to our platform immediately, without prior notice
                                            or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                                        </p>
                                        <p>
                                            All provisions of the Terms which by their nature should survive termination shall survive termination,
                                            including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                                        </p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">9. Changes to Terms</h2>
                                        <p>
                                            We may revise and update these Terms from time to time in our sole discretion. All changes are effective
                                            immediately when we post them, and apply to all access to and use of the platform thereafter.
                                        </p>
                                        <p>
                                            Your continued use of the platform following the posting of revised Terms means that you accept and agree
                                            to the changes.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="h3 fw-bold mb-4">10. Contact Us</h2>
                                        <p>
                                            If you have any questions about these Terms, please contact us:
                                        </p>
                                        <ul>
                                            <li>By email: legal@digitalmarket.com</li>
                                            <li>By phone: +1 (555) 123-4567</li>
                                            <li>By mail: 1234 Market St., San Francisco, CA 94103</li>
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
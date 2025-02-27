import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-vh-100 d-flex flex-column">

            <div className="flex-grow-1 py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="text-center mb-5">
                                <Shield className="text-primary mb-4" size={64} />
                                <h1 className="display-5 fw-bold mb-4">Privacy Policy</h1>
                                <p className="lead text-secondary">Last updated: June 15, 2025</p>
                            </div>

                            <div className="card border-0 custom-shadow p-4 p-md-5">
                                <div className="policy-content">
                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">1. Introduction</h2>
                                        <p>
                                            At DigitalMarket, we respect your privacy and are committed to protecting your personal data.
                                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                                            you visit our website and use our services.
                                        </p>
                                        <p>
                                            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                                            please do not access the site or use our services.
                                        </p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">2. Information We Collect</h2>
                                        <h3 className="h5 fw-bold mb-3">2.1 Personal Data</h3>
                                        <p>
                                            We may collect personal identification information, including but not limited to:
                                        </p>
                                        <ul className="mb-4">
                                            <li>Name</li>
                                            <li>Email address</li>
                                            <li>Phone number</li>
                                            <li>Billing address</li>
                                            <li>Payment information</li>
                                            <li>User account details</li>
                                        </ul>

                                        <h3 className="h5 fw-bold mb-3">2.2 Usage Data</h3>
                                        <p>
                                            We may also collect information on how the website is accessed and used. This usage data may include:
                                        </p>
                                        <ul>
                                            <li>Your computer's Internet Protocol (IP) address</li>
                                            <li>Browser type and version</li>
                                            <li>Pages of our website that you visit</li>
                                            <li>Time and date of your visit</li>
                                            <li>Time spent on those pages</li>
                                            <li>Other diagnostic data</li>
                                        </ul>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">3. How We Use Your Information</h2>
                                        <p>We may use the information we collect for various purposes, including:</p>
                                        <ul>
                                            <li>To provide and maintain our service</li>
                                            <li>To notify you about changes to our service</li>
                                            <li>To allow you to participate in interactive features of our service</li>
                                            <li>To provide customer support</li>
                                            <li>To gather analysis or valuable information to improve our service</li>
                                            <li>To monitor the usage of our service</li>
                                            <li>To detect, prevent, and address technical issues</li>
                                            <li>To fulfill any other purpose for which you provide it</li>
                                        </ul>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">4. Data Security</h2>
                                        <p>
                                            The security of your data is important to us, but remember that no method of transmission over
                                            the Internet or method of electronic storage is 100% secure. While we strive to use commercially
                                            acceptable means to protect your personal data, we cannot guarantee its absolute security.
                                        </p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">5. Third-Party Services</h2>
                                        <p>
                                            We may employ third-party companies and individuals to facilitate our service, provide the service
                                            on our behalf, perform service-related services, or assist us in analyzing how our service is used.
                                        </p>
                                        <p>
                                            These third parties have access to your personal data only to perform these tasks on our behalf
                                            and are obligated not to disclose or use it for any other purpose.
                                        </p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">6. Your Data Protection Rights</h2>
                                        <p>
                                            Depending on your location, you may have certain rights regarding your personal data, including:
                                        </p>
                                        <ul>
                                            <li>The right to access, update, or delete your information</li>
                                            <li>The right of rectification</li>
                                            <li>The right to object</li>
                                            <li>The right of restriction</li>
                                            <li>The right to data portability</li>
                                            <li>The right to withdraw consent</li>
                                        </ul>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">7. Cookies Policy</h2>
                                        <p>
                                            We use cookies and similar tracking technologies to track activity on our service and hold certain information.
                                        </p>
                                        <p>
                                            Cookies are files with a small amount of data which may include an anonymous unique identifier.
                                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                                        </p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">8. Changes to This Privacy Policy</h2>
                                        <p>
                                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                                            the new Privacy Policy on this page and updating the "Last updated" date.
                                        </p>
                                        <p>
                                            You are advised to review this Privacy Policy periodically for any changes. Changes to this
                                            Privacy Policy are effective when they are posted on this page.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="h3 fw-bold mb-4">9. Contact Us</h2>
                                        <p>
                                            If you have any questions about this Privacy Policy, please contact us:
                                        </p>
                                        <ul>
                                            <li>By email: privacy@digitalmarket.com</li>
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

export default PrivacyPolicy;
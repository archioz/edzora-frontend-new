import React, { useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

const RefundPolicy = () => {

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
                                <RotateCcw className="text-primary mb-4" size={64} />
                                <h1 className="display-5 fw-bold mb-4">Refund Policy</h1>
                                <p className="lead text-secondary">Effective Date: 01-03-2025</p>
                            </div>

                            <div className="card border-0 custom-shadow p-4 p-md-5">
                                <div className="policy-content">
                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">1. Digital Product Refund Policy</h2>
                                        <p>Due to the nature of digital products, all sales are final, and we do not offer refunds once a purchase is completed.</p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">2. Exceptions</h2>
                                        <p>Refunds may be considered under the following exceptional circumstances:</p>
                                        <ul>
                                            <li>The digital product was not delivered correctly due to a technical issue.</li>
                                            <li>You were charged incorrectly due to a billing error.</li>
                                            <li>The product is completely unusable, and our support team is unable to resolve the issue.</li>
                                        </ul>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">3. Refund Request Process</h2>
                                        <p>If you believe you are eligible for a refund, please contact us within 7 days of purchase at:</p>
                                        <ul>
                                            <li><strong>Email:</strong> edzoraofficial@gmail.com</li>
                                            <li><strong>Order Details:</strong> Please include your order ID and reason for the refund request.</li>
                                        </ul>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">4. Processing Time</h2>
                                        <p>Approved refunds will be processed within 2 business days, and funds will be credited back using the original payment method.</p>
                                    </section>

                                    <section className="mb-5">
                                        <h2 className="h3 fw-bold mb-4">5. Contact Us</h2>
                                        <p>If you have any questions regarding our Refund Policy, please contact us at:</p>
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

export default RefundPolicy;

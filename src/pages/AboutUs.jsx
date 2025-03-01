import React, { useEffect } from 'react';
import { Users } from 'lucide-react';

const AboutUs = () => {

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
                                <Users className="text-primary mb-4" size={64} />
                                <h1 className="display-5 fw-bold mb-4">About Us</h1>
                                <p className="lead text-secondary">Empowering education through digital products.</p>
                            </div>

                            <div className="card border-0 custom-shadow p-4 p-md-5">
                                <section className="mb-5">
                                    <h2 className="h3 fw-bold mb-4">Who We Are</h2>
                                    <p>We are a dedicated team of professionals passionate about providing high-quality educational digital products to learners worldwide.</p>
                                </section>

                                <section className="mb-5">
                                    <h2 className="h3 fw-bold mb-4">Our Mission</h2>
                                    <p>Our mission is to make learning accessible, engaging, and effective by offering premium educational content tailored for students and professionals.</p>
                                </section>

                                <section className="mb-5">
                                    <h2 className="h3 fw-bold mb-4">What We Offer</h2>
                                    <ul>
                                        <li>Comprehensive digital courses</li>
                                        <li>Expert-designed educational resources</li>
                                        <li>Easy-to-use online learning platform</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="h3 fw-bold mb-4">Get in Touch</h2>
                                    <p>If you have any questions, feel free to contact us at:</p>
                                    <ul>
                                        <li><strong>Email:</strong> edzoraofficial@gmail.com</li>
                                        <li><strong>Phone:</strong> +91 8903693309</li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

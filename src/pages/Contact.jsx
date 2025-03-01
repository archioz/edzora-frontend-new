import React, { useEffect } from 'react';
import { Mail } from 'lucide-react';

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="min-vh-100 d-flex flex-column">
            <div className="flex-grow-1 py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center mb-5">
                                <Mail className="text-primary mb-4" size={64} />
                                <h1 className="display-5 fw-bold mb-4">Contact Us</h1>
                                <p className="lead text-secondary">We’d love to hear from you! Get in touch with us for any inquiries or support.</p>
                            </div>

                            <div className="card border-0 custom-shadow p-4 p-md-5">
                                <section className="mb-5">
                                    <h2 className="h3 fw-bold mb-4">Our Contact Details</h2>
                                    <ul className="list-unstyled">
                                        <li><strong>Email:</strong> edzoraofficial@gmail.com</li>
                                        <li><strong>Phone:</strong> +91 8903693309</li>
                                        <li><strong>Address:</strong> 1/11, Pasumalai, Madurai, Tamil nadu, India</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="h3 fw-bold mb-4">Send Us a Message</h2>
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Your Name</label>
                                            <input type="text" className="form-control" placeholder="Enter your name" required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Your Email</label>
                                            <input type="email" className="form-control" placeholder="Enter your email" required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Your Message</label>
                                            <textarea className="form-control" rows="4" placeholder="Write your message" required></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                    </form>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

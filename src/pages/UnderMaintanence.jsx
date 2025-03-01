import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Settings, Clock, AlertTriangle } from 'lucide-react';

const UnderMaintanence = () => {

    useEffect(() => {

        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card border-0 custom-shadow p-5 text-center">
                                <div className="mb-4">
                                    <Settings className="text-primary" size={80} strokeWidth={1} />
                                </div>
                                <h1 className="display-4 fw-bold mb-4">Site Under Maintenance</h1>
                                <p className="lead text-secondary mb-5">
                                    We're currently performing scheduled maintenance to improve your experience.
                                    Our team is working hard to bring the site back online as soon as possible.
                                </p>

                                <div className="row g-4 mb-5">
                                    <div className="col-md-6">
                                        <div className="bg-light p-4 rounded-4">
                                            <div className="d-flex align-items-center justify-content-center mb-3">
                                                <Clock className="text-primary me-3" size={32} />
                                                <span className="h4 fw-bold mb-0">Estimated Time</span>
                                            </div>
                                            <p className="text-secondary mb-0">We'll be back in approximately 1 week</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="bg-light p-4 rounded-4">
                                            <div className="d-flex align-items-center justify-content-center mb-3">
                                                <AlertTriangle className="text-primary me-3" size={32} />
                                                <span className="h4 fw-bold mb-0">Need Help?</span>
                                            </div>
                                            <p className="text-secondary mb-0">Contact edzoraofficial@gmail.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center gap-3">
                                    <Link to="/" className="btn btn-primary btn-lg">Home</Link>
                                    {/* <a href="mailto:support@digitalmarket.com" className="btn btn-outline-primary btn-lg">Contact Support</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default UnderMaintanence
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Nav, Navbar, Button, Row, Col, Card, Form } from 'react-bootstrap'
import {
    faRocket,
    faShieldHalved,
    faGem,
    faCreditCard,
    faQuestionCircle,
    faEnvelope,
    faPhone,
    faLocationDot,
    faArrowRight,
    faStar
} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import Header from '../Layout/Header'

function Landing() {
    return (
        <>
            {/* Navigation */}

            {/* Hero Section */}
            <section className="hero-section" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h1>Transform Your Digital Workflow</h1>
                            <p className="lead mb-4">Discover premium digital products that streamline your work process and boost productivity in the modern digital age.</p>
                            <div className="d-flex gap-3">
                                <Button size="lg" className="btn-primary">
                                    Browse Products <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                </Button>
                                <Button size="lg" variant="light">Learn More</Button>
                            </div>
                            <div className="hero-stats">
                                <div className="hero-stat">
                                    <div className="hero-stat-number">2500+</div>
                                    <div className="hero-stat-label">Happy Customers</div>
                                </div>
                                <div className="hero-stat">
                                    <div className="hero-stat-number">20+</div>
                                    <div className="hero-stat-label">Premium Products</div>
                                </div>
                                <div className="hero-stat">
                                    <div className="hero-stat-number">24/7</div>
                                    <div className="hero-stat-label">Expert Support</div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                                alt="Hero"
                                className="img-fluid rounded-4 shadow-lg"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Products Section */}
            <section className="section-padding bg-light" id="products">
                <Container>
                    <h2 className="section-title">Featured Products</h2>
                    <p className="section-subtitle">Explore our collection of premium digital products designed for modern professionals</p>
                    <Row className="g-4">
                        {[
                            {
                                title: 'Photoshop Render Course',
                                price: '499',
                                image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
                                rating: 4.8,
                                reviews: 2456,
                                badge: 'Best Seller'
                            },
                            {
                                title: 'Lumion Exterior Render',
                                price: '799',
                                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
                                rating: 4.9,
                                reviews: 1832,
                                badge: 'New'
                            },
                            {
                                title: 'Autocad Beginner Tutorial',
                                price: '199',
                                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                                rating: 4.7,
                                reviews: 3218,
                                badge: 'Popular'
                            },
                            {
                                title: 'Master 3DS Max Software',
                                price: '1499',
                                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
                                rating: 4.9,
                                reviews: 1567,
                                badge: 'Featured'
                            },
                            {
                                title: 'React JS Master Course',
                                price: '349',
                                image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
                                rating: 4.8,
                                reviews: 2456,
                                badge: 'Best Seller'
                            },
                            {
                                title: 'Python Beginner Course',
                                price: '499',
                                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
                                rating: 4.9,
                                reviews: 1832,
                                badge: 'New'
                            },
                            {
                                title: '10 Javascript Projects',
                                price: '149',
                                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                                rating: 4.7,
                                reviews: 3218,
                                badge: 'Popular'
                            },
                            {
                                title: 'Textures and 299',
                                price: '399',
                                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
                                rating: 4.9,
                                reviews: 1567,
                                badge: 'Featured'
                            }
                        ].map((product, index) => (
                            <Col md={3} key={index}>
                                <Card className="product-card h-100">
                                    <div className="product-badge">{product.badge}</div>
                                    <div style={{ overflow: 'hidden' }}>
                                        <Card.Img variant="top" src={product.image} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="fw-bold">{product.title}</Card.Title>
                                        <div className="product-rating">
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <span className="product-rating-number">{product.rating}</span>
                                            <span className="product-rating-count">({product.reviews})</span>
                                        </div>
                                        <div className="product-price">₹{product.price}</div>
                                        <Button variant="primary" className="w-100">
                                            Buy Now <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Features Section */}
            <section className="section-padding" id="features">
                <Container>
                    <h2 className="section-title">Why Choose Us</h2>
                    <p className="section-subtitle">Experience the difference with our premium digital products and exceptional service</p>
                    <Row className="g-4">
                        {[
                            { icon: faRocket, title: 'Instant Delivery', desc: 'Get your products instantly after purchase' },
                            { icon: faShieldHalved, title: 'Secure & Safe', desc: 'Bank-grade security for all transactions' },
                            { icon: faGem, title: 'Premium Quality', desc: 'Thoroughly tested, high-quality products' },
                            { icon: faCreditCard, title: 'Money Back', desc: '30-day no-questions-asked guarantee' }
                        ].map((feature, index) => (
                            <Col md={3} key={index}>
                                <div className="text-center p-4 rounded-4 h-100" style={{ background: 'var(--secondary-color)' }}>
                                    <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
                                    <h4 className="mb-3 fw-bold">{feature.title}</h4>
                                    <p className="mb-0 ">{feature.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Testimonials Section */}
            {/* <section className="section-padding" id="testimonials">
        <Container>
          <h2 className="section-title">Customer Stories</h2>
          <p className="section-subtitle">See what our satisfied customers have to say about their experience</p>
          <Row className="g-4">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Creative Director',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
                text: 'The quality and attention to detail in these digital products is outstanding. Absolutely worth every penny!'
              },
              {
                name: 'Michael Chen',
                role: 'Startup Founder',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
                text: 'These products have transformed our workflow. The support team is incredibly responsive and helpful.'
              },
              {
                name: 'Emily Davis',
                role: 'Marketing Manager',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
                text: 'Exceptional quality and value. The templates have saved us countless hours of work.'
              }
            ].map((testimonial, index) => (
              <Col md={4} key={index}>
                <div className="testimonial-card h-100">
                  <div className="text-warning mb-4">{'★'.repeat(5)}</div>
                  <p className="mb-4 fs-5">{testimonial.text}</p>
                  <div className="d-flex align-items-center">
                    <img src={testimonial.image} alt={testimonial.name} className="rounded-circle me-3" />
                    <div>
                      <h5 className="mb-1">{testimonial.name}</h5>
                      <small className="">{testimonial.role}</small>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}

            {/* Newsletter Section */}
            <section className="section-padding bg-light">
                <Container>
                    <div className="newsletter-section">
                        <Row className="justify-content-center">
                            <Col md={8} className="text-center">
                                <h2 className="mb-4 fw-bold">Stay Updated</h2>
                                <p className="mb-4 ">Subscribe to our newsletter for exclusive offers and the latest updates</p>
                                <Form className="d-flex gap-2">
                                    <Form.Control type="email" placeholder="Enter your email" className="flex-grow-1" />
                                    <Button variant="primary" className="px-4">Subscribe</Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            {/* Footer */}
          
        </>
    )
}

export default Landing
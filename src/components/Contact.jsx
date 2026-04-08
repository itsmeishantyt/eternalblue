import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const btn = e.target.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        // Create FormData for Netlify
        const netlifyFormData = new FormData(e.target);

        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(netlifyFormData).toString()
        })
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                btn.textContent = originalText;
                btn.disabled = false;
                setTimeout(() => setStatus(''), 5000);
            })
            .catch((error) => {
                console.error('Form submission error:', error);
                setStatus('error');
                btn.textContent = originalText;
                btn.disabled = false;
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Let's bring your ideas to life</p>
                </motion.div>

                <div className="contact-content-centered">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', margin: '0 auto' }}
                    >
                        <h3>Let's Work Together</h3>
                        <p>Have a project in mind? We'd love to hear about it. Send us an email and we'll get back to you as soon as possible.</p>

                        <div className="contact-details-centered">
                            <div className="contact-item-centered">
                                <div className="contact-icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}>📧</div>
                                <div>
                                    <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Email</h4>
                                    <a href="mailto:synvexisdigital@gmail.com" style={{ fontSize: '1.25rem', color: 'var(--color-accent)' }}>synvexisdigital@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .contact-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 3rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .contact-info h3 { font-size: 1.75rem; margin-bottom: 1rem; color: var(--color-text-primary); }
                .contact-info p { color: var(--color-text-secondary); margin-bottom: 2rem; }
                
                .contact-details { display: flex; flex-direction: column; gap: 1.5rem; }
                .contact-item { display: flex; gap: 1rem; align-items: flex-start; }
                .contact-icon { font-size: 1.5rem; }
                .contact-item h4 { font-size: 1.1rem; margin-bottom: 0.25rem; color: var(--color-text-primary); }
                .contact-item a { color: var(--color-primary-light); }
                .contact-item a:hover { color: var(--color-accent); }
                .social-links { display: flex; gap: 1rem; }

                .contact-form {
                    background: rgba(15, 23, 42, 0.4);
                    border: 1px solid var(--glass-border);
                    border-radius: 1.5rem;
                    padding: 2rem;
                    backdrop-filter: blur(10px);
                }
                .form-group { margin-bottom: 1.5rem; }
                .form-group label { display: block; margin-bottom: 0.5rem; color: var(--color-text-secondary); }
                .form-group input, .form-group textarea {
                    width: 100%; padding: 1rem;
                    background: rgba(0,0,0,0.3); border: 1px solid var(--glass-border);
                    border-radius: 0.5rem; color: white;
                }
                .form-group input:focus, .form-group textarea:focus {
                    outline: none; border-color: var(--color-accent);
                    box-shadow: 0 0 10px rgba(0, 240, 255, 0.1);
                }
                .form-status.success {
                    margin-top: 1rem; padding: 1rem;
                    background: rgba(0, 255, 157, 0.1);
                    border: 1px solid var(--color-success);
                    color: var(--color-success);
                    border-radius: 0.5rem; text-align: center;
                }
                .form-status.error {
                    margin-top: 1rem; padding: 1rem;
                    background: rgba(239, 68, 68, 0.1);
                    border: 1px solid #ef4444;
                    color: #ef4444;
                    border-radius: 0.5rem; text-align: center;
                }
            `}</style>
        </section>
    );
};

export default Contact;

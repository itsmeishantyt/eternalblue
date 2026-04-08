import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Our Work</h2>
                    <p className="section-subtitle">Featured projects that showcase our expertise</p>
                </motion.div>

                <div className="portfolio-grid">
                    {/* Project 1: Looklist */}
                    <motion.article
                        className="project-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="project-image">
                            <img
                                src="/assets/images/looklist.png"
                                alt="Looklist Platform"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div className="project-overlay">
                                <a href="https://looklist.co.uk" className="project-link" target="_blank" rel="noopener noreferrer">View Live</a>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">Looklist</h3>
                            <p className="project-description">
                                A comprehensive platform connecting clients with service professionals.
                                Features include booking management, real-time messaging, payment processing,
                                and advanced search functionality.
                            </p>
                            <div className="project-technologies">
                                <span className="tech-tag location-tag">🇬🇧 UK</span>
                                <span className="tech-tag">JavaScript</span>
                                <span className="tech-tag">Supabase</span>
                                <span className="tech-tag">Stripe</span>
                                <span className="tech-tag">Real-time</span>
                            </div>
                        </div>
                    </motion.article>

                    {/* Project 2: Tan Ai */}
                    <motion.article
                        className="project-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="project-image">
                            <img
                                src="/assets/images/tanai.png"
                                alt="Tan AI Assistant"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div className="project-overlay">
                                <a href="https://looklist.co.uk/tan/" className="project-link" target="_blank" rel="noopener noreferrer">View Live</a>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">Tan Ai</h3>
                            <p className="project-description">
                                An innovative AI-powered application delivering intelligent solutions.
                                Built with modern technologies and a focus on user experience and performance.
                            </p>
                            <div className="project-technologies">
                                <span className="tech-tag location-tag">🇬🇧 UK</span>
                                <span className="tech-tag">AI/ML</span>
                                <span className="tech-tag">JavaScript</span>
                                <span className="tech-tag">API Integration</span>
                                <span className="tech-tag">Modern UI</span>
                             </div>
                        </div>
                    </motion.article>

                    {/* Project 3: N&Z Logistics LLC */}
                    <motion.article
                        className="project-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <div className="project-image">
                            <img
                                src="/assets/images/nnzlogistics.png"
                                alt="N&Z Logistics LLC"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div className="project-overlay">
                                <a href="https://nnzlogisticsllc.com" className="project-link" target="_blank" rel="noopener noreferrer">View Live</a>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">N&Z Logistics LLC</h3>
                            <p className="project-description">
                                A robust logistics and transportation management solution designed for efficiency and reliability.
                                Streamlining fleet operations and real-time shipment tracking.
                            </p>
                            <div className="project-technologies">
                                <span className="tech-tag location-tag">🇺🇸 USA</span>
                                <span className="tech-tag">Logistics Tech</span>
                                <span className="tech-tag">Fleet Management</span>
                                <span className="tech-tag">Real-time Tracking</span>
                            </div>
                        </div>
                    </motion.article>
                </div>
            </div>

            <style>{`
        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 3rem;
        }
        .project-card {
            background: rgba(15, 23, 42, 0.6);
            border: 1px solid var(--glass-border);
            border-radius: 1.5rem;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: all 0.3s ease;
        }
        .project-card:hover {
            border-color: var(--color-primary);
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
            transform: translateY(-8px);
        }
        .project-image {
            height: 250px;
            position: relative;
            overflow: hidden;
        }
        .project-image-placeholder {
            width: 100%; height: 100%;
            display: flex; align-items: center; justify-content: center;
            background: linear-gradient(45deg, #0f172a, #1e1b4b);
            position: relative;
        }
        .project-image-placeholder::after {
            content: ''; position: absolute; inset: 0;
            background-image: radial-gradient(var(--color-primary) 1px, transparent 1px);
            background-size: 20px 20px; opacity: 0.2;
        }
        .placeholder-text {
            font-size: 2rem; font-weight: 700; color: white; z-index: 1;
            font-family: var(--font-display);
        }
        .project-overlay {
            position: absolute; inset: 0;
            background: rgba(0,0,0,0.7);
            display: flex; align-items: center; justify-content: center;
            opacity: 0; transition: opacity 0.3s;
        }
        .project-card:hover .project-overlay { opacity: 1; }
        
        .project-link {
            padding: 0.8rem 2rem;
            background: var(--gradient-text);
            color: white; border-radius: 0.5rem; font-weight: 600;
            transform: translateY(20px); transition: all 0.3s;
        }
        .project-card:hover .project-link { transform: translateY(0); }
        .project-link:hover { box-shadow: 0 0 15px rgba(0, 240, 255, 0.5); }

        .project-content { padding: 2rem; flex: 1; display: flex; flex-direction: column; }
        .project-title { font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--color-text-primary); }
        .project-description { color: var(--color-text-secondary); margin-bottom: 1.5rem; flex: 1; }
        .project-technologies { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .tech-tag {
            padding: 0.25rem 0.75rem;
            background: rgba(37, 99, 235, 0.1);
            border: 1px solid rgba(37, 99, 235, 0.3);
            color: var(--color-primary-light);
            font-size: 0.75rem; text-transform: uppercase; border-radius: 4px;
        }
        .location-tag {
            background: rgba(0, 240, 255, 0.1);
            border-color: rgba(0, 240, 255, 0.3);
            color: var(--color-accent);
            font-weight: 700;
        }
      `}</style>
        </section>
    );
};

export default Projects;

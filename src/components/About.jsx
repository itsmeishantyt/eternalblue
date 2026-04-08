import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        { icon: '🎨', title: 'UI/UX Design', desc: 'Creating intuitive and visually stunning user interfaces' },
        { icon: '⚡', title: 'Full-Stack Development', desc: 'Building robust applications from frontend to backend' },
        { icon: '🚀', title: 'Performance', desc: 'Optimizing for speed, scalability, and reliability' },
        { icon: '🔒', title: 'Security', desc: 'Implementing best practices for data protection' }
    ];

    return (
        <section className="about" id="about">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">About Us</h2>
                    <p className="section-subtitle">Building the future, one project at a time</p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="about-description">
                            At <strong>Synvexis Digital</strong>, we're passionate about creating cutting-edge digital solutions
                            that push the boundaries of what's possible. Our team combines technical expertise with creative
                            vision to deliver exceptional web applications and digital experiences.
                        </p>
                        <p className="about-description">
                            From concept to deployment, we focus on crafting scalable, performant, and beautiful applications
                            that make a lasting impact.
                        </p>
                    </motion.div>

                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <motion.div
                                className="skill-card"
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="skill-icon">{skill.icon}</div>
                                <h3>{skill.title}</h3>
                                <p>{skill.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .about {
             background: linear-gradient(180deg, transparent 0%, var(--color-bg-secondary) 50%, transparent 100%);
        }
        .about-text { max-width: 800px; margin: 0 auto; text-align: center; }
        .about-description { font-size: 1.125rem; color: var(--color-text-secondary); margin-bottom: 1.5rem; }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        .skill-card {
            background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
            border: 1px solid var(--glass-border);
            border-radius: 1rem;
            padding: 2rem;
            text-align: center;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }
        .skill-card:hover {
            border-color: var(--color-accent);
            transform: translateY(-5px);
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.15);
        }
        .skill-icon { font-size: 3rem; margin-bottom: 1rem; transition: transform 0.3s; }
        .skill-card:hover .skill-icon { transform: scale(1.1) rotate(5deg); }
        .skill-card h3 { color: var(--color-text-primary); margin-bottom: 0.5rem; font-size: 1.25rem; }
        .skill-card p { color: var(--color-text-tertiary); font-size: 0.95rem; }
      `}</style>
        </section>
    );
};

export default About;

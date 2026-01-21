import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="hero-title">
                        <span className="title-line">Crafting Digital</span>
                        <br />
                        <span className="title-line">Excellence</span>
                    </h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        We transform ideas into innovative digital experiences that inspire and engage.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <a href="#portfolio" className="btn btn-primary">View Our Work</a>
                        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <div className="mouse"></div>
                    <p>Scroll to explore</p>
                </motion.div>
            </div>

            <style>{`
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            padding-top: 80px; /* Offset for fixed navbar */
        }
        .hero-background {
            position: absolute;
            inset: 0;
            overflow: hidden;
            z-index: 0;
        }
        .gradient-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(100px) brightness(1.2);
            mix-blend-mode: color-dodge;
            opacity: 0.5;
            animation: float 20s ease-in-out infinite;
        }
        .orb-1 { width: 500px; height: 500px; background: var(--color-primary); top: -10%; right: -10%; }
        .orb-2 { width: 400px; height: 400px; background: var(--color-accent); bottom: -10%; left: -10%; animation-delay: -7s; }
        .orb-3 { width: 300px; height: 300px; background: var(--color-secondary); top: 50%; left: 50%; transform: translate(-50%, -50%); animation-delay: -14s; }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .hero-content { position: relative; z-index: 1; text-align: center; }
        .hero-title { font-size: clamp(3rem, 8vw, 6rem); font-weight: 800; line-height: 1.1; margin-bottom: 2rem; }
        .title-line { 
            background: linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #00f0ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            background-size: 200% auto;
            animation: shimmer 5s ease-in-out infinite alternate;
        }

        @keyframes shimmer { to { background-position: 200% center; } }

        .hero-subtitle {
            font-size: clamp(1.125rem, 2vw, 1.5rem);
            color: var(--color-text-secondary);
            max-width: 600px;
            margin: 0 auto 3rem;
        }
        .hero-cta { display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; }
        
        .scroll-indicator {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            color: var(--color-text-tertiary);
            font-size: 0.875rem;
        }
        .mouse {
            width: 26px;
            height: 40px;
            border: 2px solid var(--color-text-tertiary);
            border-radius: 20px;
            position: relative;
        }
        .mouse::before {
            content: ''; position: absolute; top: 8px; left: 50%; transform: translateX(-50%);
            width: 4px; height: 8px; background: var(--color-primary); border-radius: 2px;
            animation: scrollMouse 2s infinite;
        }
        @keyframes scrollMouse {
            0% { opacity: 1; transform: translateX(-50%) translateY(0); }
            100% { opacity: 0; transform: translateX(-50%) translateY(15px); }
        }
      `}</style>
        </section>
    );
};

export default Hero;

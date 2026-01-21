const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <img
                                src="/assets/images/logo.png"
                                alt="EternalBlue Logo"
                                className="logo-image"
                                style={{ height: '40px', mixBlendMode: 'screen' }}
                            />
                            <span className="logo-text">EternalBlue<span className="logo-accent">Studios</span></span>
                        </div>
                        <p>Crafting digital excellence since 2024</p>
                    </div>
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} EternalBlue Studios. All rights reserved.</p>
                </div>
            </div>
            <style>{`
        .footer {
            background: linear-gradient(to top, #020617, transparent);
            border-top: 1px solid var(--glass-border);
            padding: 4rem 0 2rem;
            margin-top: 4rem;
        }
        .footer-content {
            display: flex; justify-content: space-between; align-items: center;
            flex-wrap: wrap; gap: 2rem; margin-bottom: 2rem;
        }
        .footer-logo p { color: var(--color-text-tertiary); margin-top: 0.5rem; font-size: 0.9rem; }
        .logo-text {
            font-family: var(--font-display);
            font-weight: 700;
            color: var(--color-text-primary);
        }
        .logo-accent {
            color: var(--color-accent);
        }
        .footer-links { display: flex; gap: 2rem; }
        .footer-links a { color: var(--color-text-secondary); transition: color 0.3s; }
        .footer-links a:hover { color: var(--color-accent); }
        .footer-bottom { 
            border-top: 1px solid var(--glass-border); padding-top: 2rem; 
            text-align: center; color: var(--color-text-tertiary); font-size: 0.85rem;
        }
        @media (max-width: 768px) {
            .footer-content { flex-direction: column; text-align: center; }
        }
      `}</style>
        </footer>
    );
};

export default Footer;

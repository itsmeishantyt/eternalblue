import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogoMouseMove = (e) => {
        const logoContainer = e.currentTarget;
        const logoImage = logoContainer.querySelector('.logo-image');
        if (!logoImage) return;

        const rect = logoContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (centerY - y) / 5;
        const rotateY = (x - centerX) / 5;

        logoImage.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    };

    const handleLogoMouseLeave = (e) => {
        const logoImage = e.currentTarget.querySelector('.logo-image');
        if (logoImage) {
            logoImage.style.transform = 'perspective(500px) rotateX(0) rotateY(0) scale(1)';
        }
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div
                    className="logo"
                    onMouseMove={handleLogoMouseMove}
                    onMouseLeave={handleLogoMouseLeave}
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', perspective: '1000px', cursor: 'pointer' }}
                >
                    <span className="logo-text">Synvexis<span className="logo-accent">Digital</span></span>
                </div>

                <button
                    className={`mobile-menu-toggle ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span><span></span><span></span>
                </button>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="nav-link" onClick={() => setIsOpen(false)}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <style>{`
        .navbar {
            position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
            background: rgba(3, 0, 20, 0.7);
            backdrop-filter: blur(20px) saturate(180%);
            border-bottom: 1px solid rgba(148, 163, 184, 0.08);
            transition: all 0.3s ease;
        }
        .navbar.scrolled {
            background: rgba(3, 0, 20, 0.95);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }
        .nav-container {
            display: flex; justify-content: space-between; align-items: center;
            padding: 1.15rem 2rem; max-width: 1400px; margin: 0 auto;
        }
        .logo-text {
            font-family: var(--font-display); font-size: 1.3rem; font-weight: 700;
            color: var(--color-text-primary);
            letter-spacing: -0.02em;
        }
        .logo-accent {
            color: var(--color-accent);
        }
        .nav-links { display: flex; gap: 2.5rem; align-items: center; }
        .nav-link {
            color: var(--color-text-secondary); font-weight: 500;
            font-size: 0.95rem; position: relative; padding: 0.5rem 0;
            transition: all 0.3s ease;
        }
        .nav-link::after {
            content: ''; position: absolute; bottom: 0; left: 0;
            width: 0; height: 2px;
            background: linear-gradient(90deg, var(--color-accent), var(--color-primary));
            transition: width 0.3s ease;
        }
        .nav-link:hover { color: var(--color-text-primary); }
        .nav-link:hover::after { width: 100%; }
        
        .mobile-menu-toggle {
            display: none; flex-direction: column; gap: 6px;
            background: none; border: none; cursor: pointer; padding: 0.5rem;
        }
        .mobile-menu-toggle span {
            width: 28px; height: 2px; background: var(--color-text-primary);
            transition: all 0.3s;
        }
        .mobile-menu-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
        .mobile-menu-toggle.active span:nth-child(2) { opacity: 0; }
        .mobile-menu-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }

        @media (max-width: 768px) {
            .nav-container { padding: 1rem 1.5rem; }
            .mobile-menu-toggle { display: flex; }
            .nav-links {
                position: fixed; top: 70px; left: 0; right: 0;
                flex-direction: column; background: rgba(3, 0, 20, 0.98);
                backdrop-filter: blur(20px); padding: 2rem; gap: 1.5rem;
                transform: translateX(100%); transition: transform 0.3s ease;
            }
            .nav-links.active { transform: translateX(0); }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;

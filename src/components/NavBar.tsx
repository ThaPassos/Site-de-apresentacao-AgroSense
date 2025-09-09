import { useState, useEffect } from "react";
import LogoEscrita from "../assets/logoEscrita.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setNavbarScrolled(isScrolled);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); 
  };

  return (
    <>
      <nav className={`navbar ${navbarScrolled && !isMobile ? 'scrolled' : ''}`}>
        <div className="links">
          <a href="#Home" onClick={(e) => {
            e.preventDefault();
            scrollToSection('Home');
          }}>Home</a>
          
          <a href="#NossoTrabalho" onClick={(e) => {
            e.preventDefault();
            scrollToSection('NossoTrabalho');
          }}>Nosso trabalho</a>
          
          <a href="#QuemSomos" onClick={(e) => {
            e.preventDefault();
            scrollToSection('QuemSomos');
          }}>Quem somos</a>
          
          <a href="#Contato" onClick={(e) => {
            e.preventDefault();
            scrollToSection('Contato');
          }}>Contato</a>
        </div>

        <img src={LogoEscrita} alt="Agrosense" className="logoEscrita" />

        <div className="fundoBtn">
          <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="menuMobileOverlay" onClick={() => setMenuOpen(false)}>
          <div className="menuMobile" onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={() => setMenuOpen(false)}>
              <X size={25} />
            </button>
            <a href="#Home" onClick={(e) => {
              e.preventDefault();
              scrollToSection('Home');
            }}>Home</a>
            
            <a href="#NossoTrabalho" onClick={(e) => {
              e.preventDefault();
              scrollToSection('NossoTrabalho');
            }}>Nosso trabalho</a>
            
            <a href="#QuemSomos" onClick={(e) => {
              e.preventDefault();
              scrollToSection('QuemSomos');
            }}>Quem somos</a>
            
            <a href="#Contato" onClick={(e) => {
              e.preventDefault();
              scrollToSection('Contato');
            }}>Contato</a>
          </div>
        </div>
      )}
    </>
  );
}
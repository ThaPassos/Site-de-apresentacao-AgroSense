import { useState, useEffect } from "react";
import ImagemFundo from "../assets/imagemFundo.png";
import LogoRedonda from "../assets/logoRedonda.png";
import LogoEscrita from "../assets/logoEscrita.png";
import { Menu, X } from "lucide-react";
import "./PaginaInicial.css"

export default function PaginaInicial() {
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

  return (
    <div className="paginaInicial">
      <div
        className="background"
        style={{ backgroundImage: `url(${ImagemFundo})` }}
      />

      <div className="conteudo">
        <nav className={`navbar ${navbarScrolled && !isMobile ? 'scrolled' : ''} ${navbarScrolled ? 'navbar-zindex-high' : 'navbar-zindex-normal'}`}>
          <div className="links">
            <a href="#Home">Home</a>
            <a href="#NossoTrabalho">Nosso trabalho</a>
            <a href="#QuemSomos">Quem somos</a>
            <a href="#contato">Contato</a>
          </div>

          <img src={LogoEscrita} alt="Agrosense" className="logoEscrita" />

          <div className="fundoBtn">
            <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </nav>

        <img src={LogoRedonda} alt="Logo redonda" className="logoRedonda" />

        {menuOpen && (
        <div className="menuMobileOverlay" onClick={() => setMenuOpen(false)}>
            <div className="menuMobile" onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={() => setMenuOpen(false)}>
                <X size={25} />
            </button>
            <a href="#Home">Home</a>
            <a href="#NossoTrabalho">Nosso trabalho</a>
            <a href="#QuemSomos">Quem somos</a>
            <a href="#contato">Contato</a>
            </div>
        </div>
        )}

        <div className="textoPrincipal">
          <div className="textoContainer">
            <h2>A EMPRESA COM OS</h2>
            <h1>SENSORES DE ALTA PRECISÃO</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
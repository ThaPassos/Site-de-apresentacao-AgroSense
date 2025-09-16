import { useState } from "react";
import simboloEnergia from "../assets/simboloEnergia.png";
import simboloPlantaInteligente from "../assets/simboloPlantaInteligente.png";
import simboloSensor from "../assets/simboloSensor.png";
import simboloArvore from "../assets/simboloArvore.png";
import agroSenseNossoTrabalho from "../assets/agroSense-NossoTrabalho.png";
import "./NossoTrabalho.css";
import { Menu, X } from "lucide-react";
import Card from "./Card";

export default function NossoTrabalho() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nossoTrabalho">
            <Card />
      <div className="conteudoTrabalho">
        <nav className="navbarTrabalho">
          
        <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        </nav>

        {menuOpen && (
          <div className="menuMobileOverlay" onClick={() => setMenuOpen(false)}>
            <div className="menuMobile" onClick={(e) => e.stopPropagation()}>
              <button className="closeBtn" onClick={() => setMenuOpen(false)}>
                <X size={25} />
              </button>
              <a href="#Home"> Home</a>
              <a href="#NossoTrabalho">Nosso Trabalho</a>
              <a href="#QuemSomos">Quem somos</a>
              <a href="#contato">Contato</a>
            </div>
          </div>
        )}

        <div className="textoNossoTrabalho">
          <h2>NOSSO TRABALHO</h2>
        </div>

        <div className="textoPrincipalTrabalho">
          <img src={agroSenseNossoTrabalho} alt="Nosso trabalho AgroSense" className="titulo" />
        </div>

        <div className="icones">
          <div className="icone">
            <img src={simboloEnergia} alt="sustentável e eficiente" />
            <span>Sustentável e eficiente</span>
          </div>
          <div className="icone">
            <img src={simboloPlantaInteligente} alt="soluções inovadoras" />
            <span>Soluções inovadoras</span>
          </div>
          <div className="icone">
            <img src={simboloSensor} alt="sensores de qualidade" />
            <span>Sensores de qualidade</span>
          </div>
          <div className="icone">
            <img src={simboloArvore} alt="defensores da vida" />
            <span>Defensores da vida</span>
          </div>
        </div>
      </div>
    </div>
  );
}

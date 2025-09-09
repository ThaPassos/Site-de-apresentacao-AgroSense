import "./Contato.css"
import LogoRedonda from "../assets/logoRedonda.png"
import Instagram from "../assets/Instagram.png"
import Linkedin from "../assets/Linkedin.png"
import Facebook from "../assets/Facebook.png"
import Whatsapp from "../assets/Whatsapp.png"

export default function Contato (){
    return(
        <div className="container">
            <div className="espaco">
                <h2 className="texto">É isso que você terá com a AgroSense, além dos sensores de alta precisão,
                    garantindo controle total da sua platação, você terá acessibilidade e agilidade,
                    todas as informações que precisa com apenas um toque, dados completos e robustos de forma simples
                </h2>
            </div>
            <footer className="areaInformacoes">
                <div className="areaLogo">
                    <img src={LogoRedonda} className="logo" />
                </div>

                <div className="informacos">
                    <div className="">
                        <h1>EMAIL</h1>
                        <h2 className="email">agrosense@gmail.com</h2>
                    </div>

                    <div className="web">
                        <h1>WEB</h1>
                        <h2>agrosense.com</h2>
                    </div>

                    <div className="redesSociais">
                        <h1>ENTRE EM CONTATO</h1>
                        <div className="imagens">
                            <img src={Linkedin} alt="Linkedin" />
                            <img src={Facebook} alt="Facebook" />
                            <img src={Whatsapp} alt="Whatsapp" />
                            <img src={Instagram} alt="Instagram" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
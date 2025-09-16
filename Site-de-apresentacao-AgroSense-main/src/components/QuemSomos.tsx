import ImagemDeFundo from "../assets/fotoPlataInteligente.png";
import LogoEscrita from "../assets/logoEscrita.png";
import "./QuemSomos.css";

export default function QuemSomos() {
  return (
    <div className="quemsomos">
      <div
        className="backgroundQuemSomos"
        style={{ backgroundImage: `url(${ImagemDeFundo})` }}
      ></div>

      <p className="TextoApresentacaoCom">Com a
            <img
                src={LogoEscrita}
                alt="Logo da empresa"
                className="LogoEscritaTexto"
            />
      </p>

      <p className="TextoApresentacao">
        você acompanha em tempo real tudo o que acontece em suas áreas
        agrícolas. Nossos sensores monitoram fatores essenciais, como a umidade
        do solo, a temperatura, a umidade do ar e a luminosidade, fornecendo
        informações precisas para apoiar suas decisões. Dessa forma, você mantém
        o controle da sua produção, garante maior produtividade e ainda
        contribui para a sustentabilidade do meio ambiente.
      </p>

      <h1 className="long-shadow">
        Imagine ter <br />
        o controle total <br />
        da sua plantação <br />
        na palma da mão.
      </h1>

      <footer className="footer"></footer>
    </div>
  );
}

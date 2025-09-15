import Image from "next/image";
import './globals.css';
import Button from "./components/Button";

export default function Home() {
  return (
   <div >
    <nav className="nav">
      <div className="titulo">Odonto Studio®</div>
      <ul className="menu">
        <li>Serviços</li>
        <li>Sobre</li>
        <li>Contato</li>
        
        </ul>
    </nav>
  
      <section className="ct-01">
      <div>
          <h1><span>Transforme</span> o seu sorriso 
  com a <span>Odonto Studio</span></h1>
<p>Cuidamos de cada detalhe para devolver
a confiança e o brilho do seu sorriso.</p>
 <Button />
      </div>
<Image
src= "/images/background.png"
alt="Background"
className="bg"
width={703}
height={564}

/>
</section>

  <div className="ct-02 animou">
    <span>✦  Sorria com confiança </span>
    <span>✦  Sorria com confiança </span>
    <span>✦  Sorria com confiança </span>
    <span>✦  Sorria com confiança </span>
    <span>✦  Sorria com confiança </span>
    <span>✦  Sorria com confiança </span>
  

  </div>

<section className="ct-03">
  <div className="container-03">
    <h1>A Odonto Studo</h1>
    <p>Na Odonto Studio, tecnologia e cuidado humano se unem para transformar sorrisos. Aqui cada detalhe é pensado para oferecer conforto, precisão e resultados estéticos de alto nível.</p>
  <ul>
    <li>✦ Estrutura premium e equipamentos de última geração</li>
    <li>✦ Tratamentos estéticos e funcionais personalizados</li>
    <li>✦ Equipe especializada em diversas áreas da odontologia</li>
    <li>✦ Experiência humanizada e focada no bem-estar</li>
  </ul>
  <Button />

  </div>
 
  <div>
  <Image
src= "/images/cliente.png"
alt="slide"
width={428}
height={500}

/>
  </div>
</section>
<section>
  <div>
    <h1>Nossa História</h1>
    <p>A Odonto Studio nasceu com o propósito de oferecer muito mais do que tratamentos odontológicos. Nosso foco é criar experiências transformadoras, unindo ciência, inovação e acolhimento em cada etapa do atendimento.</p>
  <Button />
  </div>
  <div>icone</div>
</section>

<section>
  <div><h1>
    Conheça nossas <span>especialidades </span>
e encontre a <span>solução perfeita</span> para você</h1></div>

<div>
  <div>
    <p>Clareamento Dental, dentes mais brancos e um sorriso radiante.</p>
  </div>
    <div>
    <p>Implantes Dentários Reconstrua seu sorriso com conforto e naturalidade.</p>
    </div>
      <div>
    <p>Ortodontia e Correção estética e funcional para todas as idades.</p>
    </div>
      <div>
    <p>Estética Dental e Harmonia e renovação do seu sorriso.</p>
    </div>
</div>
<Image 
src="/images/assets.png"
alt="assets"
width={342}
height={347
}
/>
<span>SCROLL</span>
</section>
<section>
  <div>
    <h1>Depoimentos</h1>
  </div>
</section>
   </div>
  );
}

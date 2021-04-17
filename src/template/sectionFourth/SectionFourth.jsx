import React from "react";
import "./SectionFourth.css";
import Svg1 from "../../assets/Vector (1).svg";
import Svg2 from "../../assets/medal 1.svg";
import Svg3 from "../../assets/Group 6.svg";
export default function SectionFourth() {
  return (
    <div className="sectionFourth">
      <div className="quality">
        <img src={Svg1} alt="svg" />
        <h1>Qualidade</h1>
        <p>Camisaria e Alfaiataria 100% artesanal.</p>
      </div>
      <div className="confiance">
        <img src={Svg2} alt="svg" />
        <h1>Confiança</h1>
        <p>Atendimento personalizado no escritório ou residência.</p>
      </div>
      <div className="experience">
        <img src={Svg3} alt="svg" />
        <h1>Experiência</h1>
        <p>Tradição e modernidade proporcionando elegância.</p>
      </div>
    </div>
  );
}

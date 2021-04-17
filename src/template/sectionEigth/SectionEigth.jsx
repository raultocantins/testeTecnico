import React from "react";
import "./SectionEigth.css";
import Grayshirt from "../../assets/grayshirt.png";
export default function SectionEigth() {
  return (
    <div className="sectionEigth">
      <div className="describe">
        <h1>Alfaiataria</h1>
        <p>totalmente feito a mão sob medida</p>
        <div className="list">
          <ul>
            <li>Fio Super 120 e 130</li>
            <li>Lã fria Australiana</li>
            <li>Botões Importados</li>
          </ul>
          <ul>
            <li>Ternos e Calças</li>
            <li>Paletós e Smokings</li>
            <li>Sociais e Esportivos</li>
          </ul>
        </div>
        <button>Quero um orçamento</button>
      </div>
      <div className="bannerShirt">
        <img src={Grayshirt} alt="white shirt" />
      </div>
    </div>
  );
}

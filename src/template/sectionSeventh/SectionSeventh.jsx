import React from "react";
import "./SectionSeventh.css";
import WhiteShirt from "../../assets/whiteShirt.png";
export default function SectionSeventh() {
  return (
    <div className="sectionSeventh">
      <div className="bannerShirt">
        <img src={WhiteShirt} alt="white shirt" />
      </div>
      <div className="describe">
        <h1>Camisaria</h1>
        <p>confeccionadas artesanalmente</p>
        <div className="list">
          <ul>
            <li>100% Algodão</li>
            <li>Monograma</li>
            <li>Slim</li>
          </ul>
          <ul>
            <li>Nacionais e Importadas</li>
            <li>Tradicionais e Esportivas</li>
            <li>Casamentos</li>
          </ul>
        </div>
        <button>Quero um orçamento</button>
      </div>
    </div>
  );
}

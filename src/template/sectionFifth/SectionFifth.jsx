import React from "react";
import "./SectionFifth.css";
import Shirt from "../../assets/bannershirt.png";
export default function SectionFifth() {
  return (
    <div className="sectionFifth">
      <div className="describe">
        <h1>Condição Imperdível</h1>
        <p>
          Até 10 meses para confeccionar sua roupa e não se preocupe se suas
          medidas aumentaram ou diminuíram, estará sempre elegante;
        </p>
        <p>Poder presentear alguém com uma roupa de alta costura, <strong>exclusiva</strong>;</p>
        <p>Garante uma condição muito especial por <strong>tempo limitado</strong>;</p>
        <p>12% de desconto e pagamento em até <strong>3x sem juros</strong>.</p>
        <button>Garanta essa condição especial!</button>
      </div>
      <div className="banner">
        <img src={Shirt} alt="banner shirt" />
      </div>
    </div>
  );
}

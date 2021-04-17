import React from "react";
import "./SectionTwo.css";
import PersonalImg from "../../assets/personalImg.png";

export default function SectionTwo() {
  return (
    <div className="sectionTwo">
      <div className="personalImg">
        <img src={PersonalImg} alt="personalimage" />
      </div>
      <div className="personalDescribe">
        <h1>Renee Trajar</h1>
        <p>
          Com mais de 35 anos de experiência em camisas, calças e ternos sob
          medida, possuímos profissionais experientes e altamente qualificados.
        </p>
        <p>
          Cada cliente tem seu molde exclusivamente desenvolvido para seu
          biotipo através das medidas tiradas pelo próprio Sr. Renee.
        </p>
        <p >
          “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe
          satisfação ao usar nossos produtos, aliado a um relacionamento franco
          e honesto, valorizando o ser humano.”
        </p>
        <button>Agende uma visita!</button>
      </div>
    </div>
  );
}

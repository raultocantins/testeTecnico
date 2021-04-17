import React from "react";
import "./SectionThird.css";
import Banel1 from "../../assets/banel1.png";
import Banel2 from "../../assets/banel2.png";
//import BackgroundNull from "../../assets/backgroundNull.png";
export default function SectionThird() {
  return (
    <div className="sectionThird">
      <div className="describe">
        <p>
          “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é
          impecável em todos os detalhes, desde a costura ao caimento. O Renee
          tem uma equipe de mestre!”
        </p>
        <p>Nelson Garey</p>
        <p>Advogado | Nelson Garey Advogados Associados</p>
      </div>

      <div className="imgbanel">
        <img src={Banel1} alt="banel1" />
        <img src={Banel2} alt="banel2" />
      </div>
    </div>
  );
}
